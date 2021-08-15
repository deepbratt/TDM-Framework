import React, { useEffect, useRef, useState } from "react";
import { View, ScrollView, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import CustomLinearGradient from "../../component/customLinearGradient";
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
  EditAdhere,
  SaveButton,
  DeleteButton,
  regNumber,
  engineCapacity,
} from "../../utils/constants/postDetails/postDetails";
import { COLOR } from "../../Theme/Colors";
import { carDetailsById, createCars ,carUpdate, carDelete} from "../../utils/api/CarsApi";
import { Field, Formik } from "formik";
import { DropdownValidation, numeric } from "../../utils/form/validationForm";
import CustomInput from "../../component/CustomInput/CustomInput";
import * as ImagePicker from "expo-image-picker";
import CustomText from "../../component/customText";
import RBSheet from "react-native-raw-bottom-sheet";
import { globalStyle } from "../../Styles";
import CustomAlert from "../../component/customOTP/customAlert";
import { postForm } from "../../../types";
import {
    AndMake,
    FormDel,
  FormSuccessfuL,
  GoToAds,
  GoToHome,
  Has,
  InvalidInput,
  NotFound,
  PermissionToAccess,
  SomethingWrong,
  Your,
} from "../../utils/constants/alertMsg";
import { useHistory, useParams } from "react-router-native";
import CustomLoader from "../../component/CustomLoader";
import DropDView from "../../section/dropdownView";

const EditPost = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState<Array<any>>([]);
  const [Loader, setLoader] = useState(false);
  const [imageBlob, setImageBlob] = useState<Array<string | Blob>>([]);
  const [Delete, setDel] = useState(false);

  const [Loading, setLoading] = useState(false);
  const [index, setindexItem] = useState<any>([]);
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
  useEffect(() => {
    fetchItem();
  }, []);
  const fetchItem = async () => {
    console.log("sss", id);
    setLoading(true);
    await carDetailsById(id)
      .then((res) => {
        if (res.status === "success") {
          setLoading(false), setindexItem(res.data.result);
        } else if (res.status === "fail") {
          return setLoading(false), alert(`${res.message}`);
        }
      })
      .catch((error) => {
        if (error.status === 401) return alert(error);
      });
  };
  const handlePost = async (drop: any, { resetForm }:any) => {
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
      await carUpdate(id,formData)
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
                path: `/car-Details/${id}`,
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

  const deleteAd=async()=>{
    setDel(true),
    await carDelete(id)
      .then((response) => {
        console.log("resDel", response);
        if (response.status === "success") {
          setDel(false),
            console.log("response", response),
            setInput((prev) => ({
              ...prev,
              MsgTitle: FormDel,
              Msg: `${Your}${index.model}${AndMake}${index.make}${Has}`,
              path: `/your-ads`,
              button: GoToAds,
              close: true,
            })),
            refRBSheet.current?.open();
        } else if (response.status === "fail") {
          setLoader(false),
            setInput((prev) => ({
              ...prev,
              MsgTitle: NotFound,
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
  }
  return (
    <ScrollView style={styles.container}>
      <CustomHeader
        headerStyle={{ backgroundColor: COLOR.Cultured }}
        title={EditAdhere}
        color={COLOR.DarkCharcoal}
        onPress={() => history.goBack()}
      />
      {Loading ? (
        <CustomLoader />
      ) : (
        <>
           {selectedImage.length === 0 ? (
        <TouchableOpacity style={styles.main} onPress={openImagePickerAsync}>
          <Image
            style={{ alignSelf: "center" }}
            source={{ uri: index[0].uri }}
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
            initialValues={{
                description: index.description,
                location: index.location,
                city: index.city,
                province: index.province,
                model: index.model,
                make: index.make,
                modelYear: index.modelYear,
                condition: index.condition,
                registrationCity: index.registrationCity,
                bodyColor: index.bodyColor,
                bodyType: index.bodyType,
                engineType: index.engineType,
                assembly: index.assembly,
                transmission: index.transmission,
                milage: index.milage,
                price: index.price,
                features: index.features,
                regNumber: index.regNumber,
               engineCapacity: index. engineCapacity,
             
              }}
            onSubmit={(values, { resetForm }) => {
              handlePost(values, { resetForm });
            }}
            validationSchema={DropdownValidation}
          >
            {({
              errors,
              handleSubmit,
              setFieldValue,
              values,
              isSubmitting,
            }) => (
              <View>
                <DropDView
                  Icon={PlaceIcon}
                  Label={LocationLabel}
                  data={locationList}
                  value={values.location}
                  onChange={(value: any) => setFieldValue("location", value)}
                  error={errors.location ? true : false}
                />
                <DropDView
                  Icon={PlaceIcon}
                  Label={cityLabel}
                  data={locationList}
                  value={values.city}
                  onChange={(value: any) => setFieldValue("city", value)}
                  error={errors.city ? true : false}
                />
                <DropDView
                  Icon={PlaceIcon}
                  Label={provinceLabel}
                  data={provinceList}
                  value={values.province}
                  onChange={(value: any) => setFieldValue("province", value)}
                  error={errors.province ? true : false}
                />
                <DropDView
                  Icon={ModelIcon}
                  Label={CarMakeLabel}
                  data={CarMake}
                  value={values.make}
                  onChange={(value: any) => setFieldValue("make", value)}
                  error={errors.make ? true : false}
                />

                <DropDView
                  Icon={ModelIcon}
                  Label={CarModelLabel}
                  data={CarModel}
                  value={values.model}
                  onChange={(value: any) => setFieldValue("model", value)}
                  error={errors.model ? true : false}
                />
                 <DropDView
                  Icon={AmountIcon}
                  Label={YearLabel}
                  data={years}
                  value={values.modelYear}
                  onChange={(value: any) => setFieldValue("modelYear", value)}
                  error={errors.modelYear ? true : false}
                />
                <DropDView
                  Icon={ConditionIcon}
                  Label={ConditionLabel}
                  data={Condition}
                  value={values.condition}
                  onChange={(value: any) => setFieldValue("condition", value)}
                  error={errors.condition ? true : false}
                />
                <DropDView
                  Icon={ApartmentIcon}
                  Label={RegisterCityLabel}
                  data={registerList}
                  value={values.registrationCity}
                  onChange={(value: any) =>
                    setFieldValue("registrationCity", value)
                  }
                  error={errors.registrationCity ? true : false}
                />
                <DropDView
                  Icon={PaletteIcon}
                  Label={BodyColorLabel}
                  data={bodyColor}
                  value={values.bodyColor}
                  onChange={(value: any) => setFieldValue("bodyColor", value)}
                  error={errors.bodyColor ? true : false}
                />
                <DropDView
                  Icon={PaletteIcon}
                  Label={BodyTypeLabel}
                  data={bodyType}
                  value={values.bodyType}
                  onChange={(value: any) => setFieldValue("bodyType", value)}
                  error={errors.bodyType ? true : false}
                />
                
                <DropDView
                  Icon={PaletteIcon}
                  Label={EngineTypeLabel}
                  data={EngineTypes}
                  value={values.engineType}
                  onChange={(value: any) => setFieldValue("engineType", value)}
                  error={errors.engineType ? true : false}
                />

                <DropDView
                  Icon={PaletteIcon}
                  Label={assemblyLabel}
                  data={Assembly}
                  value={values.assembly}
                  onChange={(value: any) => setFieldValue("assembly", value)}
                  error={errors.assembly ? true : false}
                />
                <DropDView
                  Icon={PaletteIcon}
                  Label={Transmission}
                  data={TransmissionType}
                  value={values.transmission}
                  onChange={(value: any) =>
                    setFieldValue("transmission", value)
                  }
                  error={errors.transmission ? true : false}
                />
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
                  text={Loader ? "Loading..." : SaveButton}
                  textstyle={styles.gradientTextStyle}
                  onPress={handleSubmit}
                />
              </View>
            )}
          </Formik>
          <CustomLinearGradient
                  colors={[COLOR.CarminePink, COLOR.primary]}
                  GradientButtonStyle={styles.gradientStyle2}
                  text={Delete ? "Loading..." : DeleteButton}
                  textstyle={styles.gradientTextStyle}
                  onPress={deleteAd}
                />
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
        </>
      )}
    </ScrollView>
  );
};
export default EditPost;
