import React, { useEffect, useRef, useState } from "react";
import { View, Text } from "react-native";
import { Field, Formik } from "formik";
import CustomAvatar from "../../component/Avatar";
import CustomHeader from "../../component/customHeader/CustomHeader";
import CustomInput from "../../component/CustomInput/CustomInput";
import { openDrawer } from "../../navigation";
import { globalStyle } from "../../Styles";
import { COLOR } from "../../Theme/Colors";
import * as ImagePicker from "expo-image-picker";
import CustomLinearGradient from "../../component/customLinearGradient";
import { styles } from "./style";
import DropDownSaim from "../../component/dropDownSaim";
import {
  cityLabel,
  countryList,
  genderList,
  locationList,
} from "../../utils/constants/postDetails/postDetails";
import DatePicker from "react-native-datepicker";
import {
  AccountInfo,
  BasicInfo,
  Cancel,
  Confirm,
  ConfirmPass,
  Country,
  DateofBirth,
  Email,
  FirstName,
  FullName,
  Gender,
  LastName,
  MiddleName,
  MobieNumber,
  NewPass,
  numeric,
  OldPass,
  PasswordInfo,
  profilnames,
  SaveChanges,
  Username,
} from "../../utils/form/profileForm";
import {
  InvalidInput,
  passwordInfo,
  PermissionToAccess,
  SuccessfuL,
  Updatee,
} from "../../utils/constants/alertMsg";
import { List, TextInput } from "react-native-paper";
import { UpdateMe, UpdateMyPassword } from "../../utils/api/index";
import RBSheet from "react-native-raw-bottom-sheet";
import CustomAlert from "../../component/customOTP/customAlert";
import { connect } from "react-redux";
import { updateMyPassValidate } from "../../utils/form/validationForm";

const Profile = (currentUser: { currentUser: any }) => {
  const _User = currentUser.currentUser;
  const refRBSheet = useRef<RBSheet>(null);
  const [bottom, setbottom] = useState({
    Msg: "",
    MsgTitle: "",
    path: "",
    button: "",
    close: false,
  });

  const [input, setInput] = useState({
    firstName: _User.firstName,
    lastName: _User.lastName,
    middleName: _User.middleName,
    displayName: _User.displayName,
    gender: _User.gender,
    country: _User.country,
    city: _User.city,
    dateOfBirth: _User.dateOfBirth,
  });
  const [account, setaccount] = useState({
    phone: _User.phone,
    email: _User.email,
  });
  const [selectedImage, setSelectedImage] = useState<Array<any>>([]);
  const [Loader, setLoader] = useState(false);
  const [imageBlob, setImageBlob] = useState<Array<string | Blob>>([]);
  const [Loading, setloading] = useState(false);
  const [Load, setload] = useState(false);
  const [save, setsave] = useState(false);
  const [data, setdata] = useState({
    secureTextEntry: true,
    secureTextEntry1: true,
    showPassword: "eye-off",
    showPassword1: "eye-off",
  });

  const handleChange = async (value: any) => {
    console.log(value, selectedImage);
    const {
      city,
      country,
      dateOfBirth,
      displayName,
      firstName,
      gender,
      lastName,
      middleName,
    } = value;
    const images = imageBlob;
    // const body = {
    //   city: city,
    //   country: country,
    //   dateOfBirth: dateOfBirth,
    //   displayName: displayName,
    //   firstName: firstName,
    //   gender: gender,
    //   lastName: lastName,
    //   middleName: middleName,
    //   image: selectedImage.localUri,
    // };
    let formData = new FormData();
    formData.append("city", city),
      formData.append("country", country),
      formData.append("dateOfBirth", dateOfBirth),
      formData.append("displayName", displayName),
      formData.append("firstName", firstName),
      formData.append("gender", gender),
      formData.append("lastName", lastName),
      formData.append("middleName", middleName);
    for (let i = 0; i < selectedImage.length; i++) {
      formData.append("image", selectedImage[i]);
    }
    console.log("pic", images, "val", formData);
    setloading(true);
    await UpdateMe(formData)
      .then((response) => {
        console.log("dx", response);
        if (response.status === "success") {
          console.log("res", response);
          return (
            setloading(false),
            setbottom((prev) => ({
              ...prev,
              MsgTitle: SuccessfuL,
              Msg: `${response.message}${Updatee}`,
              button: "Ok",
              close: true,
            })),
            refRBSheet.current?.open()
          );
        } else if (response.status === "fail") {
          return (
            setloading(false),
            setbottom((prev) => ({
              ...prev,
              MsgTitle: InvalidInput,
              Msg: `${response.message}`,
              button: "Ok",
            })),
            refRBSheet.current?.open()
          );
        }
      })
      .catch((error) => {
        if (error.status === 401) return alert(error);
      });
  };
  useEffect(() => {
    console.log(selectedImage);
  }, [selectedImage]);


  const handlePasswords = async (value: {
    passwordCurrent: any;
    password: any;
    passwordConfirm: any;
  }) => {
    console.log("srt", value);
    const { passwordCurrent, password, passwordConfirm } = value;
    let formData = new FormData();
      formData.append("passwordCurrent", passwordCurrent),
      formData.append("password", password),
      formData.append("passwordConfirm", passwordConfirm),
      console.log("d", formData);
    setsave(true);
    await UpdateMyPassword(formData)
      .then((response) => {
        console.log("srt", response);
        if (response.status === "success") {
          return (
            setsave(false),
            setbottom((prev) => ({
              ...prev,
              MsgTitle: SuccessfuL,
              Msg: passwordInfo,
              close: true,
            })),
            refRBSheet.current?.open()
          );
        } else if (response.status === "fail") {
          return (
            setsave(false),
            setbottom((prev) => ({
              ...prev,
              MsgTitle: InvalidInput,
              Msg: `${response.message}`,
              button: "Ok",
              close: false,
            })),
            refRBSheet.current?.open()
          );
        }
      })
      .catch((error) => {
        if (error.status === 401) return alert(error);
      });
  };

  const handleEmail = () => {
    console.log("press", currentUser.currentUser);
    console.log("press", _User.firstName);
  };
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert(PermissionToAccess);
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    let localUri = pickerResult.uri;
    let filename = localUri.split("/").pop();

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename ? filename : "");
    let type = match ? `image/${match[1]}` : `image`;
    //   setSelectedImage({ localUri: pickerResult.uri });
    let response = await fetch(localUri);
    let Blob = await response.blob();
    let imageData = { uri: localUri, name: filename, type };
    setImageBlob([...imageBlob, Blob]);
    // let temp=selectedImage;
    // temp.push(imageData);
    setSelectedImage([...selectedImage, imageData]);
    // console.log("image",temp);
  };
    // let openImagePickerAsync = async () => {
  //   let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
  //   if (permissionResult.granted === false) {
  //     alert(PermissionToAccess);
  //     return;
  //   }
  //   let pickerResult = await ImagePicker.launchImageLibraryAsync();
  //   if (pickerResult.cancelled === true) {
  //     return;
  //   }
  //   console.log("images", selectedImage);
  //   setSelectedImage({ localUri: pickerResult.uri });
  //   console.log("image", selectedImage, selectedImage);
  // };
  const handleShow = () => {
    setdata((prev) => ({
      ...prev,
      showPassword: prev.showPassword === "eye" ? "eye-off" : "eye",
      secureTextEntry: !prev.secureTextEntry,
    }));
  };
  const handleShowEye = () => {
    setdata((prev) => ({
      ...prev,
      showPassword1: prev.showPassword1 === "eye" ? "eye-off" : "eye",
      secureTextEntry1: !prev.secureTextEntry1,
    }));
  };

  return (
    <View>
      <CustomHeader
        headerStyle={{ backgroundColor: COLOR.Cultured }}
        color={COLOR.DarkCharcoal}
        isHome={true}
        title={"Your Profile"}
        onPress={() => openDrawer()}
      />
      <View style={globalStyle.container}>
        <View style={[styles.alignCenter, styles.profieView]}>
          {selectedImage.length === 0 ? (
            <CustomAvatar
              rounded
              source={{uri:_User.image}}
              size={84}
              onPress={openImagePickerAsync}
            />
          ) : (
            <CustomAvatar
              rounded
              source={{ uri: selectedImage[0].uri }}
              size={84}
              onPress={openImagePickerAsync}
            />
          )}
        </View>
        <View style={styles.align}>
          <View style={{ marginVertical: 20 }} />
          <Formik
            initialValues={input}
            onSubmit={(values) => {
              handleChange(values);
            }}
          >
            {({ handleSubmit, setFieldValue, values }) => (
              <View style={[styles.alignCenter]}>
                <List.AccordionGroup>
                  <View style={styles.list}>
                    <List.Accordion
                      title={BasicInfo}
                      id="1"
                      titleStyle={styles.title}
                    >
                      <Field
                        component={CustomInput}
                        inputFieldStyle={styles.inputView}
                        activeFieldStyle={globalStyle.activeField}
                        placeholder={FirstName}
                        name={profilnames.firstName}
                        required
                        multiline={false}
                      />
                      <Field
                        component={CustomInput}
                        inputFieldStyle={styles.inputView}
                        activeFieldStyle={globalStyle.activeField}
                        placeholder={LastName}
                        name={profilnames.lastName}
                        required
                        multiline={false}
                      />
                      <Field
                        component={CustomInput}
                        inputFieldStyle={styles.inputView}
                        activeFieldStyle={globalStyle.activeField}
                        placeholder={MiddleName}
                        name={profilnames.middleName}
                        required
                        multiline={false}
                      />
                      <Field
                        component={CustomInput}
                        inputFieldStyle={styles.inputView}
                        activeFieldStyle={globalStyle.activeField}
                        placeholder={Username}
                        name={profilnames.displayName}
                        required
                        multiline={false}
                      />
                      <View style={styles.MainViewDropDown}>
                        <DropDownSaim
                          itemContainerStyle={styles.itemContainerDropDrown}
                          label={Gender}
                          enableSearch
                          itemTextStyle={styles.itemTextDropDown}
                          data={genderList}
                          disableSort={true}
                          value={values.gender}
                          onChange={(value: any) =>
                            setFieldValue(profilnames.gender, value)
                          }
                          required={true}
                          textInputStyle={styles.textInputDropDown}
                        />
                      </View>
                      <DatePicker
                        showIcon={false}
                        androidMode="spinner"
                        style={styles.inputView}
                        date={values.dateOfBirth}
                        mode="date"
                        placeholder={DateofBirth}
                        format={profilnames.DOB}
                        //   maxDate={moment().format('DD-MM-YYYY')}
                        confirmBtnText={Confirm}
                        cancelBtnText={Cancel}
                        customStyles={{ dateInput: styles.dateInput }}
                        onDateChange={(value: any) =>
                          setFieldValue(profilnames.dateOfBirth, value)
                        }
                      />

                      <View style={styles.MainViewDropDown}>
                        <DropDownSaim
                          itemContainerStyle={styles.itemContainerDropDrown}
                          label={Country}
                          enableSearch
                          itemTextStyle={styles.itemTextDropDown}
                          data={countryList}
                          disableSort={true}
                          value={values.country}
                          onChange={(value: any) =>
                            setFieldValue(profilnames.country, value)
                          }
                          required={true}
                          textInputStyle={styles.textInputDropDown}
                        />
                      </View>
                      <View style={styles.MainViewDropDown}>
                        <DropDownSaim
                          itemContainerStyle={styles.itemContainerDropDrown}
                          label={cityLabel}
                          enableSearch
                          itemTextStyle={styles.itemTextDropDown}
                          data={locationList}
                          disableSort={true}
                          value={values.city}
                          onChange={(value: any) =>
                            setFieldValue(profilnames.city, value)
                          }
                          required={true}
                          textInputStyle={styles.textInputDropDown}
                        />
                      </View>
                      <CustomLinearGradient
                        colors={[COLOR.CarminePink, COLOR.primary]}
                        GradientButtonStyle={styles.gradientStyle1}
                        text={Loading ? "Saving..." : SaveChanges}
                        textstyle={styles.gradientTextStyle}
                        onPress={handleSubmit}
                      />
                    </List.Accordion>
                  </View>
                </List.AccordionGroup>
              </View>
            )}
          </Formik>
          <View style={{ marginVertical: 20 }} />
          <Formik
            initialValues={account}
            onSubmit={(values) => {
              handleEmail(values);
            }}
          >
            {({ handleSubmit, setFieldValue, values }) => (
              <View style={[styles.alignCenter]}>
                <List.AccordionGroup>
                  <View style={styles.list}>
                    <List.Accordion
                      title={AccountInfo}
                      id="1"
                      titleStyle={styles.title}
                    >
                      <Field
                        component={CustomInput}
                        inputFieldStyle={styles.inputView}
                        activeFieldStyle={globalStyle.activeField}
                        placeholder={Email}
                        name={profilnames.email}
                        required
                        disabled={_User.isEmailVerified ? true : false}
                      />
                      <Field
                        component={CustomInput}
                        inputFieldStyle={styles.inputView}
                        activeFieldStyle={globalStyle.activeField}
                        placeholder={MobieNumber}
                        name={profilnames.phone}
                        required
                        keyboardType={numeric}
                        disabled={_User.isPhoneVerified ? true : false}
                      />
                      <CustomLinearGradient
                        colors={[COLOR.CarminePink, COLOR.primary]}
                        GradientButtonStyle={styles.gradientStyle1}
                        text={Load ? "Saving..." : SaveChanges}
                        textstyle={styles.gradientTextStyle}
                        onPress={handleSubmit}
                      />
                    </List.Accordion>
                  </View>
                </List.AccordionGroup>
              </View>
            )}
          </Formik>
          <View style={{ marginVertical: 20 }} />
          <Formik
            initialValues={{
              passwordCurrent: "",
              password: "",
              passwordConfirm: "",
            }}
            onSubmit={(values) => {
              handlePasswords(values);
            }}
            validationSchema={updateMyPassValidate}
          >
            {({ handleSubmit, setFieldValue, values }) => (
              <View style={[styles.alignCenter]}>
                <List.AccordionGroup>
                  <View style={styles.list}>
                    <List.Accordion
                      title={PasswordInfo}
                      id="1"
                      titleStyle={styles.title}
                    >
                      <Field
                        component={CustomInput}
                        inputFieldStyle={styles.inputView}
                        activeFieldStyle={styles.activeView}
                        placeholder={OldPass}
                        name={profilnames.passwordCurrent}
                        secureTextEntry={data.secureTextEntry}
                        required
                        errorTextStyle={styles.errorText}
                        rightIcon={
                          <TextInput.Icon
                            size={16}
                            color={COLOR.Silver}
                            name={data.showPassword}
                            onPress={handleShow}
                          />
                        }
                      />
                      <Field
                        component={CustomInput}
                        inputFieldStyle={styles.inputView}
                        activeFieldStyle={styles.activeView}
                        placeholder={NewPass}
                        name={profilnames.password}
                        required
                        errorTextStyle={styles.errorText}
                        secureTextEntry={data.secureTextEntry1}
                        rightIcon={
                          <TextInput.Icon
                            size={16}
                            color={COLOR.Silver}
                            name={data.showPassword1}
                            onPress={handleShowEye}
                          />
                        }
                      />
                      <Field
                        component={CustomInput}
                        inputFieldStyle={styles.inputView}
                        activeFieldStyle={styles.activeView}
                        placeholder={ConfirmPass}
                        name={profilnames.passwordConfirm}
                        secureTextEntry={data.secureTextEntry1}
                        required
                        errorTextStyle={styles.errorText}
                        rightIcon={
                          <TextInput.Icon
                            size={16}
                            color={COLOR.Silver}
                            name={data.showPassword1}
                            onPress={handleShowEye}
                          />
                        }
                      />
                      <CustomLinearGradient
                        colors={[COLOR.CarminePink, COLOR.primary]}
                        GradientButtonStyle={styles.gradientStyle1}
                        text={save ? "Saving..." : SaveChanges}
                        textstyle={styles.gradientTextStyle}
                        onPress={handleSubmit}
                      />
                    </List.Accordion>
                  </View>
                </List.AccordionGroup>
              </View>
            )}
          </Formik>
        </View>
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        animationType="slide"
        customStyles={{
          wrapper: globalStyle.wrapperStyle,
          container: globalStyle.containerStyle,
          draggableIcon: globalStyle.draggableIcon,
        }}
      >
        <CustomAlert
          Title={bottom.MsgTitle}
          Msg={bottom.Msg}
          onPress={() => refRBSheet.current?.close()}
          buttonTitle={bottom.button}
        />
      </RBSheet>
    </View>
  );
};
const mapStateToProps = (state: {
  rootReducer: { auth: { currentUser: any } };
}) => ({
  currentUser: state.rootReducer.auth.currentUser,
});
export default connect(mapStateToProps)(Profile);
