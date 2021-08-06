import React,{useRef, useState} from 'react';
import { View, ScrollView, Image, TouchableOpacity,  } from 'react-native';
import { styles } from './styles';
import DropDownSaim from '../../component/dropDownSaim';
import CustomLinearGradient from '../../component/customLinearGradient';
import CustomHeader from '../../component/customHeader/CustomHeader';
import {
    bodyColor,
    CarModel,
    Condition,
    locationList,
    Milage,
    PriceRange,
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
} from '../../utils/constants/postDetails/postDetails';
import { COLOR } from '../../Theme/Colors';
import { createCars } from '../../utils/api';
import { Field, Formik } from 'formik';
import { DropdownValidation } from '../../utils/form/validationForm';
import CustomInput from '../../component/CustomInput/CustomInput';
import * as ImagePicker from 'expo-image-picker';
import CustomText from '../../component/customText';
import RBSheet from 'react-native-raw-bottom-sheet';
import { globalStyle } from '../../Styles';
import CustomAlert from '../../component/customOTP/customAlert';
import { Ok } from '../../utils/constants/en';
import { useHistory } from 'react-router';
import { postForm } from '../../../types';

const PostDetails = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [Loader, setLoader] = useState(false);
    const [dropdown,setDropdown ]=useState({
        description:"",
        location:"",
        city:"",
        province:"",
        carModel:"",
        carMake:"",
        year:"",
        condition:"",
        registrationCity:"",
        bodycolor:"",
        bodyType:"",
        engineType:"",
        assembly:"",
        transmission:"",
        milage:"",
        priceRange:"",
        features:"",
    });
    const refRBSheet = useRef<RBSheet>(null);
    const [input,setInput]=useState({
        Msg:"",
        MsgTitle:"",
        path:"",
        button:""
    })
   const history=useHistory();

    let openImagePickerAsync = async () => {
      let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
      if (permissionResult.granted === false) {
        alert('Permission to access camera roll is required!');
        return;
      }
      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      if (pickerResult.cancelled === true) {
        return;
      }
      setSelectedImage({ localUri: pickerResult.uri });
      console.log("image",selectedImage)
    };
 
    const handlePost=async(drop:postForm)=>{
  
        const { 
       description,
        location,
        city,
        province,
        carModel,
        carMake,
        year,
        condition,
        registrationCity,
        bodycolor,
        milage,
        priceRange,
        bodyType,
        engineType,
        assembly,
       transmission,
       features}=drop;
        const body={
            "description":description,
            "location":location,
            "city":city,
            "province": province,
            "carModel":carModel,
            "carMake":carMake,
            "year":year,
            "condition":condition,
            "registrationCity":registrationCity,
            "bodycolor":bodycolor,
            "milage":milage,
            "priceRange":priceRange,
            "bodyType":bodyType,
            "engineType":engineType,
            "assembly":assembly,
           "transmission":transmission,
           "features":features,
           "Image":selectedImage,
        };
      console.log("values",body);
      setLoader(true),
     await createCars(body).then(response=>{
         console.log("res",response);
         if(response.status === "success"){
            setLoader(false),
            setInput(prev=>({
              ...prev, MsgTitle:"Form Submit Successfully",
                    Msg:``,
                    path:'/',
                    button:"Go to home"
             })),
             refRBSheet.current?.open()
         } else if (response.status === "fail"){
            setLoader(false),
             setInput(prev=>({
                ...prev, MsgTitle:"Invalid Input Date",
                      Msg:`${response.message}`,
                      path:'/post-details',
                      button:"Ok"
               })),
               refRBSheet.current?.open()
         }
     }).catch(error=>{
        if (error.status === 401) return alert("user and password incorrect"); 
       })  
   };
    return (
        <ScrollView style={styles.container}>
            <CustomHeader
                headerStyle={{ backgroundColor: COLOR.Cultured }}
                title={PostAdhere}
                color={COLOR.DarkCharcoal}
                onPress={()=>history.goBack()}
            />          
{
    selectedImage === null ?
    (
        <TouchableOpacity style={styles.main} onPress={openImagePickerAsync}>
        <Image style={{ alignSelf: 'center' }}
          source={require('../../../assets/images/postDetails/camera.png')} />
           <CustomText
        text="Add Photo"
        textStyle={{ fontSize: 12, textAlign: 'center', fontFamily: 'IBMPlexSans-Light', color: COLOR.GraniteGray }}
      />
          </TouchableOpacity>
    ) :
    (
        <TouchableOpacity style={styles.main} onPress={openImagePickerAsync}>
            <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
          </TouchableOpacity>   
    )
}

                <View style={styles.borderView}></View>
     <Formik
         initialValues={dropdown}
         onSubmit={(values) => { handlePost(values)}}
         validationSchema={DropdownValidation}
    //   enableReinitialize
    >
      {({ errors, handleSubmit, setFieldValue, values, isSubmitting }) => (
              <View>
 <View style={styles.dropdownContainer}>
            <View style={styles.iconView}>
              <Image style={styles.buttonIcon}
                  source={PlaceIcon} />
          </View> 
                     <View style={styles.MainViewDropDown}>
                         <DropDownSaim
                             itemContainerStyle={styles.itemContainerDropDrown}
                             label={LocationLabel}
                             enableSearch
                             itemTextStyle={styles.itemTextDropDown}
                             data={locationList}
                             disableSort={true}
                             value={values.location}
                             onChange={(value: any) => setFieldValue('location', value)}
                             required={true}
                             error={errors.location ? true : false}
                             errorColor={COLOR.primary}
                             textInputStyle={styles.textInputDropDown}
                         />
                     </View>
                </View>
                <View style={styles.dropdownContainer}>
            <View style={styles.iconView}>
              <Image style={styles.buttonIcon}
                  source={PlaceIcon} />
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
                             onChange={(value: any) => setFieldValue('city', value)}
                             required={true}
                             error={errors.location ? true : false}
                             errorColor={COLOR.primary}
                             textInputStyle={styles.textInputDropDown}
                         />
                     </View>
                </View>
                <View style={styles.dropdownContainer}>
            <View style={styles.iconView}>
              <Image style={styles.buttonIcon}
                  source={PlaceIcon} />
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
                             onChange={(value: any) => setFieldValue('province', value)}
                             required={true}
                             error={errors.location ? true : false}
                             errorColor={COLOR.primary}
                             textInputStyle={styles.textInputDropDown}
                         />
                     </View>
                </View>
                <View style={styles.dropdownContainer}>
                    <View style={styles.iconView}>
                        <Image style={styles.buttonIcon}
                            source={ModelIcon} />
                    </View>
                    <View style={styles.MainViewDropDown}>
                        <DropDownSaim
                            itemContainerStyle={styles.itemContainerDropDrown}
                            label={CarModelLabel}
                            enableSearch
                            itemTextStyle={styles.itemTextDropDown}
                            data={CarModel}
                            disableSort={true}
                            value={values.carModel}
                            onChange={(value: any) => setFieldValue('carModel', value)}
                            required={true}
                             error={errors.location ? true : false}
                            errorColor={COLOR.primary}
                             textInputStyle={styles.textInputDropDown}
                        />
                    </View>
                </View>
                <View style={styles.dropdownContainer}>
                    <View style={styles.iconView}>
                        <Image style={styles.buttonIcon}
                            source={ModelIcon} />
                    </View>
                    <View style={styles.MainViewDropDown}>
                        <DropDownSaim
                            itemContainerStyle={styles.itemContainerDropDrown}
                            label={CarMakeLabel}
                            enableSearch
                            itemTextStyle={styles.itemTextDropDown}
                            data={CarMake}
                            disableSort={true}
                            value={values.carMake}
                            onChange={(value: any) => setFieldValue("carMake", value )}
                             required={true}
                             error={errors.carMake ? true : false}
                            errorColor={COLOR.primary}
                             textInputStyle={styles.textInputDropDown}
                        />
                    </View>
                </View>
                <View style={styles.dropdownContainer}>
                    <View style={styles.iconView}>
                        <Image style={styles.buttonIcon}
                            source={AmountIcon} />
                    </View>
                    <View style={styles.MainViewDropDown}>
                        <DropDownSaim
                            itemContainerStyle={styles.itemContainerDropDrown}
                            label={YearLabel}
                            itemTextStyle={styles.itemTextDropDown}
                            data={years}
                            disableSort={true}
                            value={values.year}
                            onChange={(value: any) => setFieldValue( "year", value)}
                            required={true}
                            error={errors.year ? true : false}
                            errorColor={COLOR.primary}
                            textInputStyle={styles.textInputDropDown}
                        />
                    </View>
                </View>
                <View style={styles.dropdownContainer}>
                    <View style={styles.iconView}>
                        <Image style={styles.buttonIcon}
                            source={ConditionIcon} />
                    </View>
                    <View style={styles.MainViewDropDown}>
                        <DropDownSaim
                            itemContainerStyle={styles.itemContainerDropDrown}
                            label={ConditionLabel}
                            itemTextStyle={styles.itemTextDropDown}
                            data={Condition}
                            disableSort={true}
                            value={values.condition}
                            onChange={(value: any) => setFieldValue("condition", value )}
                            required={true}
                            error={errors.condition ? true : false}
                            errorColor={COLOR.primary}
                            textInputStyle={styles.textInputDropDown}
                        />
                    </View>
                </View>
                <View style={styles.dropdownContainer}>
                    <View style={styles.iconView}>
                        <Image style={styles.buttonIcon}
                            source={ApartmentIcon} />
                    </View>
                    <View style={styles.MainViewDropDown}>
                        <DropDownSaim
                            itemContainerStyle={styles.itemContainerDropDrown}
                            label={RegisterCityLabel}
                            itemTextStyle={styles.itemTextDropDown}
                            data={registerList}
                            disableSort={true}
                            value={values.registrationCity}
                            onChange={(value: any) => setFieldValue("registrationCity", value)}
                            required={true}
                            error={errors.registrationCity ? true : false}
                            errorColor={COLOR.primary}
                            textInputStyle={styles.textInputDropDown}
                        />
                    </View>
                </View>
                <View style={styles.dropdownContainer}>
                    <View style={styles.iconView}>
                        <Image style={styles.buttonIcon}
                            source={PaletteIcon} />
                    </View>
                    <View style={styles.MainViewDropDown}>
                        <DropDownSaim
                            itemContainerStyle={styles.itemContainerDropDrown}
                            label={BodyColorLabel}
                            itemTextStyle={styles.itemTextDropDown}
                            data={bodyColor}
                            disableSort={true}
                            value={values.bodycolor}
                            onChange={(value: any) => setFieldValue("bodycolor", value)}
                            required={true}
                            error={errors.bodycolor ? true : false}
                            errorColor={COLOR.primary}
                            textInputStyle={styles.textInputDropDown}
                        />
                    </View>
                </View>
                <View style={styles.dropdownContainer}>
                    <View style={styles.iconView}>
                        <Image style={styles.buttonIcon}
                            source={PaletteIcon} />
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
                        <Image style={styles.buttonIcon}
                            source={PaletteIcon} />
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
                        <Image style={styles.buttonIcon}
                            source={PaletteIcon} />
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
                        <Image style={styles.buttonIcon}
                            source={PaletteIcon} />
                    </View>
                    <View style={styles.MainViewDropDown}>
                        <DropDownSaim
                            itemContainerStyle={styles.itemContainerDropDrown}
                            label={Transmission}
                            itemTextStyle={styles.itemTextDropDown}
                            data={TransmissionType}
                            disableSort={true}
                            value={values.transmission}
                            onChange={(value: any) => setFieldValue("transmission", value)}
                            required={true}
                            error={errors.transmission ? true : false}
                            errorColor={COLOR.primary}
                            textInputStyle={styles.textInputDropDown}
                        />
                    </View>
                </View>
                <View style={styles.dropdownContainer}>
                    <View style={styles.iconView}>
                        <Image style={styles.buttonIcon}
                            source={MilageIcon} />
                    </View>
                    <View style={styles.MainViewDropDown}>
                     <Field
                        component={CustomInput}
                        inputFieldStyle={styles.Inputs}
                        activeFieldStyle={styles.error}
                        placeholder={MileageLabel}
                        name={"milage"}
                        required
                        errorTextStyle={styles.errorText}
                    />
                    </View>
                </View>
                <View style={styles.dropdownContainer}>
                    <View style={styles.iconView}>
                        <Image style={styles.buttonIcon}
                            source={AmountIcon} />
                    </View>
                    <View style={styles.MainViewDropDown}>
                      <Field
                          component={CustomInput}
                          inputFieldStyle={styles.Inputs}
                          activeFieldStyle={styles.error}
                          placeholder={PriceRangeLabel}
                          name={"priceRange"}
                          required
                          errorTextStyle={styles.errorText}
                      />  
                    </View>
                </View>
                <View style={styles.dropdownContainer}>
                    <View style={styles.iconView}>
                        <Image style={styles.buttonIcon}
                            source={AmountIcon} />
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
                    <Image style={styles.buttonIcon}
                            source={DescriptionIcon} />
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
                    colors={[COLOR.CarminePink,COLOR.primary]}
                    GradientButtonStyle={styles.gradientStyle1}
                    text={Loader ? "Loading...": AddPostButton}
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
          container:globalStyle.containerStyle,
          draggableIcon: globalStyle.draggableIcon
        }}
      >
        <CustomAlert 
       Title={input.MsgTitle}
       Msg={input.Msg}
       onPress={()=>history.push(input.path)}
       buttonTitle={input.button}
        />
      </RBSheet>
             </ScrollView>
    
        // </View>
   
   
   )
}
export default PostDetails;