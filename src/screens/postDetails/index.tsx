import React, { useEffect, useRef, useState } from "react";
import { View, ScrollView, Image, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import DropDownSaim from "../../component/dropDownSaim/index";
import CustomLinearGradient from "../../component/customLinearGradient/index";
import CustomHeader from "../../component/customHeader/CustomHeader";
import {
  bodyColor,
  CarModel,
  Condition,
  locationList,
  PlaceIcon,
  ModelIcon,
  AmountIcon,
  ConditionIcon,
  ApartmentIcon,
  PaletteIcon,
  MilageIcon,
  DescriptionIcon,
  LocationLabel,
  CarModelLabel,
  CarMakeLabel,
  YearLabel,
  ConditionLabel,
  RegisterCityLabel,
  BodyColorLabel,
  MileageLabel,
  PriceRangeLabel,
  DescriptionLabel,
  AddPostButton,
  BodyTypeLabel,
  bodyType,
  EngineTypeLabel,
  assemblyLabel,
  Transmission,
  PostAdhere,
  CarMake,
  registerList,
  TransmissionType,
  Assembly,
  years,
  FeaturesLabel,
  EngineTypes,
  provinceList,
  provinceLabel,
  cityLabel,
  regNumber,
  engineCapacity,
} from "../../utils/constants/postDetails/postDetails";
import { COLOR } from "../../Theme/Colors";
import { createCars } from "../../utils/api/CarsApi";
import { Field, Formik } from "formik";
import { DropdownValidation, numeric } from "../../utils/form/validationForm";
import CustomInput from "../../component/CustomInput/CustomInput";
import * as ImagePicker from "expo-image-picker";
import CustomText from "../../component/customText/index";
import RBSheet from "react-native-raw-bottom-sheet";
import { globalStyle } from "../../Styles/index";
import CustomAlert from "../../component/customOTP/customAlert";
import { useHistory } from "react-router";
import { Switch } from 'react-native-paper';
import { postForm } from "../../../types";

import {
  FormSuccessfuL,
  GoToHome,
  InvalidInput,
  PermissionToAccess,
  SomethingWrong,
} from "../../utils/constants/alertMsg";
import CustomButton from "../../component/CustomButton/index";

const PostDetails = () => {
  const [selectedImage, setSelectedImage] = useState<Array<any>>([]);
  const [Loader, setLoader] = useState(false);
  const [imageBlob, setImageBlob] = useState<Array<string | Blob>>([]);
  const [dropdown, setDropdown] = useState({
    description: "uuuu",
    location: "",
    city: "",
    province: "",
    model: "",
    make: "",
    modelYear: "2020",
    condition: "",
    registrationCity: "",
    bodyColor: "",
    bodyType: "",
    engineType: "",
    assembly: "",
    transmission: "",
    milage: "666",
    price: "777",
    features: "hhhh",
    regNumber: "W5RTF",
    engineCapacity: "600",
  });
  console.log("city", dropdown.city)
  const refRBSheet = useRef<RBSheet>(null);
  const [input, setInput] = useState({
    Msg: "",
    MsgTitle: "",
    path: "",
    button: "",
    close: false,
  });
  const history = useHistory();
  useEffect(() => {
    console.log(selectedImage);
  }, [selectedImage]);
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

  const handlePost = async (drop: any, { resetForm }: any) => {
    const {
      description,
      location,
      city,
      province,
      model,
      make,
      modelYear,
      condition,
      registrationCity,
      bodyColor,
      milage,
      price,
      bodyType,
      engineType,
      assembly,
      transmission,
      features,
      regNumber,
      engineCapacity,
    } = drop;

    const images = imageBlob;

    
    let formData = new FormData();
    formData.append("description", description),
      formData.append("location", location);
    formData.append("city", city);
    formData.append("province", province);
    formData.append("model", model);
    formData.append("make", make);
    formData.append("modelYear", modelYear);
    formData.append("condition", condition);
    formData.append("registrationCity", registrationCity);
    formData.append("bodyColor", bodyColor);
    formData.append("milage", milage);
    formData.append("price", price);
    formData.append("bodyType", bodyType);
    formData.append("engineType", engineType);
    formData.append("assembly", assembly);
    formData.append("transmission", transmission);
    formData.append("engineCapacity", engineCapacity);
    formData.append("regNumber", regNumber);

    for (let i = 0; i < selectedImage.length; i++) {
      formData.append("image", selectedImage[i]);
    }
    for (let i = 0; i < features.length; i++) {
      formData.append("features", features[i]);
    }

    console.log("pic", images, "values", formData);

    setLoader(true),
    await createCars(formData)
      .then((response) => {
        console.log("res", response);
          resetForm({ drop: "" });
          setSelectedImage([]);
        if (response.status === "success") {
          setLoader(false),
          console.log("res", response),
            setInput((prev) => ({
              ...prev,
              MsgTitle: FormSuccessfuL,
              Msg: ``,
              path: "/your-ads",
              button: GoToHome,
              close: true,
            })),
            refRBSheet.current?.open();
        } else if (response.status === "fail") {
          setLoader(false),
            setInput((prev) => ({
              ...prev,
              MsgTitle: InvalidInput,
              Msg: `${response.message}`,
              button: "Ok",
              close: false,
            })),
            refRBSheet.current?.open();
        }
      })
      .catch((error) => {
        if (error.status === 401) return alert(SomethingWrong);
      });
  };
 

  

  return (
    <ScrollView style={styles.container}>
      <CustomHeader
        headerStyle={{ backgroundColor: COLOR.Cultured }}
        title={PostAdhere}
        color={COLOR.DarkCharcoal}
        onPress={() => history.goBack()}
      />
      {selectedImage.length === 0 ? (
        <TouchableOpacity style={styles.main} onPress={openImagePickerAsync}>
          <Image
            style={{ alignSelf: "center" }}
            source={require("../../../assets/images/postDetails/camera.png")}
          />
          <CustomText
            text="Add Photo"
            textStyle={{
              fontSize: 12,
              textAlign: "center",
              fontFamily: "IBMPlexSans-Light",
              color: COLOR.GraniteGray,
            }}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.main} onPress={openImagePickerAsync}>
          <Image
            source={{ uri: selectedImage[0].uri }}
            style={styles.thumbnail}
          />
        </TouchableOpacity>
      )}
      <View style={styles.borderView}></View>
      <Formik
        initialValues={dropdown}
        onSubmit={(values: any, { resetForm }: any) => {
          handlePost(values, { resetForm });
        }}
        validationSchema={DropdownValidation}
      >
        {({ errors, handleSubmit, setFieldValue, values }:any) => (
          <View>
            <View style={styles.dropdownContainer}>
              <View style={styles.iconView}>
                <Image style={styles.buttonIcon} source={PlaceIcon} />
              </View>
              <View style={[styles.MainViewDropDown,{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}]}>
                <DropDownSaim
                  itemContainerStyle={styles.itemContainerDropDrown}
                  label={LocationLabel}
                  enableSearch
                  itemTextStyle={styles.itemTextDropDown}
                  data={locationList}
                  disableSort={true}
                  value={values.location}
                  onChange={(value: any) => setFieldValue("location", value)}
                  required={true}
                  error={errors.location ? true : false}
                  errorColor={COLOR.primary}
                  textInputStyle={styles.textInputDropDown}
                />
              </View>
            </View>
            <View style={styles.dropdownContainer}>
              <View style={styles.iconView}>
                <Image style={styles.buttonIcon} source={PlaceIcon} />
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
                  onChange={(value: any) => setFieldValue("city", value)}
                  required={true}
                  error={errors.city ? true : false}
                  errorColor={COLOR.primary}
                  textInputStyle={styles.textInputDropDown}
                />
              </View>
            </View>
            <View style={styles.dropdownContainer}>
              <View style={styles.iconView}>
                <Image style={styles.buttonIcon} source={PlaceIcon} />
              </View>
              <View style={styles.MainViewDropDown}>
                <DropDownSaim
                  itemContainerStyle={styles.itemContainerDropDrown}
                  label={provinceLabel}
                  enableSearch
                  itemTextStyle={styles.itemTextDropDown}
                  data={provinceList}
                  disableSort={true}
                  value={values.province}
                  onChange={(value: any) => setFieldValue("province", value)}
                  required={true}
                  error={errors.province ? true : false}
                  errorColor={COLOR.primary}
                  textInputStyle={styles.textInputDropDown}
                />
              </View>
            </View>
            <View style={styles.dropdownContainer}>
              <View style={styles.iconView}>
                <Image style={styles.buttonIcon} source={ModelIcon} />
              </View>
              <View style={styles.MainViewDropDown}>
                <DropDownSaim
                  itemContainerStyle={styles.itemContainerDropDrown}
                  label={CarMakeLabel}
                  enableSearch
                  itemTextStyle={styles.itemTextDropDown}
                  data={CarMake}
                  disableSort={true}
                  value={values.make}
                  onChange={(value: any) => setFieldValue("make", value)}
                  required={true}
                  error={errors.make ? true : false}
                  errorColor={COLOR.primary}
                  textInputStyle={styles.textInputDropDown}
                />
              </View>
            </View>
            <View style={styles.dropdownContainer}>
              <View style={styles.iconView}>
                <Image style={styles.buttonIcon} source={ModelIcon} />
              </View>
              <View style={styles.MainViewDropDown}>
                <DropDownSaim
                  itemContainerStyle={styles.itemContainerDropDrown}
                  label={CarModelLabel}
                  enableSearch
                  itemTextStyle={styles.itemTextDropDown}
                  data={CarModel}
                  disableSort={true}
                  value={values.model}
                  onChange={(value: any) => setFieldValue("model", value)}
                  required={true}
                  error={errors.model ? true : false}
                  errorColor={COLOR.primary}
                  textInputStyle={styles.textInputDropDown}
                />
              </View>
            </View>
            <View style={styles.dropdownContainer}>
              <View style={styles.iconView}>
                <Image style={styles.buttonIcon} source={AmountIcon} />
              </View>
              <View style={styles.MainViewDropDown}>
                <DropDownSaim
                  itemContainerStyle={styles.itemContainerDropDrown}
                  label={YearLabel}
                  itemTextStyle={styles.itemTextDropDown}
                  data={years}
                  disableSort={true}
                  value={values.modelYear}
                  onChange={(value: any) => setFieldValue("modelYear", value)}
                  required={true}
                  error={errors.modelYear ? true : false}
                  errorColor={COLOR.primary}
                  textInputStyle={styles.textInputDropDown}
                />
              </View>
            </View>
            <View style={styles.dropdownContainer}>
              <View style={styles.iconView}>
                <Image style={styles.buttonIcon} source={ConditionIcon} />
              </View>
              <View style={styles.MainViewDropDown}>
                <DropDownSaim
                  itemContainerStyle={styles.itemContainerDropDrown}
                  label={ConditionLabel}
                  itemTextStyle={styles.itemTextDropDown}
                  data={Condition}
                  disableSort={true}
                  value={values.condition}
                  onChange={(value: any) => setFieldValue("condition", value)}
                  required={true}
                  error={errors.condition ? true : false}
                  errorColor={COLOR.primary}
                  textInputStyle={styles.textInputDropDown}
                />
              </View>
            </View>
            <View style={styles.dropdownContainer}>
              <View style={styles.iconView}>
                <Image style={styles.buttonIcon} source={ApartmentIcon} />
              </View>
              <View style={styles.MainViewDropDown}>
                <DropDownSaim
                  itemContainerStyle={styles.itemContainerDropDrown}
                  label={RegisterCityLabel}
                  itemTextStyle={styles.itemTextDropDown}
                  data={registerList}
                  disableSort={true}
                  value={values.registrationCity}
                  onChange={(value: any) =>
                    setFieldValue("registrationCity", value)
                  }
                  required={true}
                  error={errors.registrationCity ? true : false}
                  errorColor={COLOR.primary}
                  textInputStyle={styles.textInputDropDown}
                />
              </View>
            </View>
            <View style={styles.dropdownContainer}>
              <View style={styles.iconView}>
                <Image style={styles.buttonIcon} source={PaletteIcon} />
              </View>
              <View style={styles.MainViewDropDown}>
                <DropDownSaim
                  itemContainerStyle={styles.itemContainerDropDrown}
                  label={BodyColorLabel}
                  itemTextStyle={styles.itemTextDropDown}
                  data={bodyColor}
                  disableSort={true}
                  value={values.bodyColor}
                  onChange={(value: any) => setFieldValue("bodyColor", value)}
                  required={true}
                  error={errors.bodyColor ? true : false}
                  errorColor={COLOR.primary}
                  textInputStyle={styles.textInputDropDown}
                />
              </View>
            </View>
            <View style={styles.dropdownContainer}>
              <View style={styles.iconView}>
                <Image style={styles.buttonIcon} source={PaletteIcon} />
              </View>
              <View style={styles.MainViewDropDown}>
                <DropDownSaim
                  itemContainerStyle={styles.itemContainerDropDrown}
                  label={BodyTypeLabel}
                  itemTextStyle={styles.itemTextDropDown}
                  data={bodyType}
                  disableSort={true}
                  value={values.bodyType}
                  onChange={(value: any) => setFieldValue("bodyType", value)}
                  required={true}
                  error={errors.bodyType ? true : false}
                  errorColor={COLOR.primary}
                  textInputStyle={styles.textInputDropDown}
                />
              </View>
            </View>
            <View style={styles.dropdownContainer}>
              <View style={styles.iconView}>
                <Image style={styles.buttonIcon} source={PaletteIcon} />
              </View>
              <View style={styles.MainViewDropDown}>
                <DropDownSaim
                  itemContainerStyle={styles.itemContainerDropDrown}
                  label={EngineTypeLabel}
                  itemTextStyle={styles.itemTextDropDown}
                  data={EngineTypes}
                  enableSearch
                  disableSort={true}
                  value={values.engineType}
                  onChange={(value: any) => setFieldValue("engineType", value)}
                  required={true}
                  error={errors.engineType ? true : false}
                  errorColor={COLOR.primary}
                  textInputStyle={styles.textInputDropDown}
                />
              </View>
            </View>
            <View style={styles.dropdownContainer}>
              <View style={styles.iconView}>
                <Image style={styles.buttonIcon} source={PaletteIcon} />
              </View>
              <View style={styles.MainViewDropDown}>
                <DropDownSaim
                  itemContainerStyle={styles.itemContainerDropDrown}
                  label={assemblyLabel}
                  itemTextStyle={styles.itemTextDropDown}
                  data={Assembly}
                  disableSort={true}
                  value={values.assembly}
                  onChange={(value: any) => setFieldValue("assembly", value)}
                  required={true}
                  error={errors.assembly ? true : false}
                  errorColor={COLOR.primary}
                  textInputStyle={styles.textInputDropDown}
                />
              </View>
            </View>
            <View style={styles.dropdownContainer}>
              <View style={styles.iconView}>
                <Image style={styles.buttonIcon} source={PaletteIcon} />
              </View>
              <View style={styles.MainViewDropDown}>
                <DropDownSaim
                  itemContainerStyle={styles.itemContainerDropDrown}
                  label={Transmission}
                  itemTextStyle={styles.itemTextDropDown}
                  data={TransmissionType}
                  disableSort={true}
                  value={values.transmission}
                  onChange={(value: any) =>
                    setFieldValue("transmission", value)
                  }
                  required={true}
                  error={errors.transmission ? true : false}
                  errorColor={COLOR.primary}
                  textInputStyle={styles.textInputDropDown}
                />
              </View>
            </View>
            <View style={styles.dropdownContainer}>
              <View style={styles.iconView}>
                <Image style={styles.buttonIcon} source={MilageIcon} />
              </View>
              <View style={styles.MainViewDropDown}>
                <Field
                  component={CustomInput}
                  inputFieldStyle={styles.Inputs}
                  activeFieldStyle={styles.error}
                  placeholder={MileageLabel}
                  keyboardType={numeric}
                  name={"milage"}
                  required
                  errorTextStyle={styles.errorText}
                />
              </View>
            </View>
            <View style={styles.dropdownContainer}>
              <View style={styles.iconView}>
                <Image style={styles.buttonIcon} source={MilageIcon} />
              </View>
              <View style={styles.MainViewDropDown}>
                <Field
                  component={CustomInput}
                  inputFieldStyle={styles.Inputs}
                  activeFieldStyle={styles.error}
                  placeholder={engineCapacity}
                  keyboardType={numeric}
                  name={"engineCapacity"}
                  required
                  errorTextStyle={styles.errorText}
                />
              </View>
            </View>
            <View style={styles.dropdownContainer}>
              <View style={styles.iconView}>
                <Image style={styles.buttonIcon} source={MilageIcon} />
              </View>
              <View style={styles.MainViewDropDown}>
                <Field
                  component={CustomInput}
                  inputFieldStyle={styles.Inputs}
                  activeFieldStyle={styles.error}
                  placeholder={regNumber}
                  name={"regNumber"}
                  required
                  errorTextStyle={styles.errorText}
                />
              </View>
            </View>
            <View style={styles.dropdownContainer}>
              <View style={styles.iconView}>
                <Image style={styles.buttonIcon} source={AmountIcon} />
              </View>
              <View style={styles.MainViewDropDown}>
                <Field
                  component={CustomInput}
                  inputFieldStyle={styles.Inputs}
                  activeFieldStyle={styles.error}
                  placeholder={PriceRangeLabel}
                  name={"price"}
                  keyboardType={numeric}
                  required
                  errorTextStyle={styles.errorText}
                />
              </View>
            </View>
            <View style={styles.dropdownContainer}>
              <View style={styles.iconView}>
                <Image style={styles.buttonIcon} source={AmountIcon} />
              </View>
              <View style={styles.MainViewDropDown}>
                <Field
                  component={CustomInput}
                  inputFieldStyle={styles.Inputs}
                  activeFieldStyle={styles.error}
                  placeholder={FeaturesLabel}
                  name={"features"}
                  required
                  errorTextStyle={styles.errorText}
                />
              </View>
            </View>
            <View style={styles.dropdownContainer}>
              <View style={styles.iconView}>
                <Image style={styles.buttonIcon} source={DescriptionIcon} />
              </View>
              <View style={styles.MainViewDropDown}>
                <Field
                  component={CustomInput}
                  inputFieldStyle={styles.Inputs}
                  activeFieldStyle={styles.error}
                  multiline={true}
                  placeholder={DescriptionLabel}
                  name={"description"}
                  required
                  errorTextStyle={styles.errorText}
                />
              </View>
            </View>
            <CustomLinearGradient
              colors={[COLOR.CarminePink, COLOR.primary]}
              GradientButtonStyle={styles.gradientStyle1}
              text={Loader ? "Loading..." : AddPostButton}
              textstyle={styles.gradientTextStyle}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
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
          Title={input.MsgTitle}
          Msg={input.Msg}
          onPress={
            input.close
              ? () => history.push(input.path)
              : () => refRBSheet.current?.close()
          }
          buttonTitle={input.button}
        />
      </RBSheet>
    </ScrollView>
  );
};
export default PostDetails;
