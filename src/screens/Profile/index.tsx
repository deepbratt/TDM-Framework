import React, { useState } from 'react'
import { View } from 'react-native';
import { Field, Formik } from 'formik';
import CustomAvatar from '../../component/Avatar';
import CustomHeader from '../../component/customHeader/CustomHeader';
import CustomInput from '../../component/CustomInput/CustomInput';
import { openDrawer } from '../../navigation';
import { globalStyle } from '../../Styles';
import { COLOR } from '../../Theme/Colors';
import * as ImagePicker from 'expo-image-picker';
import CustomLinearGradient from '../../component/customLinearGradient';
import { styles } from './style';
import DropDownSaim from '../../component/dropDownSaim';
import { cityLabel, countryList, genderList, locationList } from '../../utils/constants/postDetails/postDetails';
import DatePicker from 'react-native-datepicker';
import { Cancel, Confirm, Country, DateofBirth, Email, FullName, Gender, MobieNumber, numeric, profilnames, SaveChanges, Username } from '../../utils/form/profileForm';
import { PermissionToAccess } from '../../utils/constants/alertMsg';

 const Profile = () => {
     
    const [input,setInput]=useState({
          fullName:"",
          userName:"",
          gender:"",
          country:"",
          city:"",
          mobileNumber:"",
          email:"",
          date:"",
      })
      const [selectedImage, setSelectedImage] = useState(null);
  const handleChange=(value:any)=>{
console.log(value,selectedImage)
  }
  
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
    setSelectedImage({ localUri: pickerResult.uri });
    console.log("image",selectedImage)
  };

    return (
     <View>
       <CustomHeader
           headerStyle={{ backgroundColor:COLOR.Cultured }}
          color={COLOR.DarkCharcoal} isHome={true} title={"Your Profile"}
          onPress={() => openDrawer()} />
        <View style={globalStyle.container}>
             <View  style={[styles.alignCenter,styles.profieView]}>
       {selectedImage === null ? (
             <CustomAvatar
                 rounded
                 source={require('../../../assets/images/drawer/profile.png')}
                 size={84}
                 onPress={openImagePickerAsync}
                /> ) :  (
             <CustomAvatar
                 rounded
                 source={{ uri: selectedImage.localUri }}
                 size={84}
                 onPress={openImagePickerAsync}
                /> )}  
            </View>
            <Formik
         initialValues={input}
         onSubmit={(values) => {handleChange(values)}}
    >
      {({ handleSubmit, setFieldValue, values,  }) => (
              <View style={styles.alignCenter}>
                    <Field
                          component={CustomInput}
                          inputFieldStyle={styles.inputView}
                          activeFieldStyle={globalStyle.activeField}
                          placeholder={FullName}
                          name={profilnames.fullName}
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
                             onChange={(value: any) => setFieldValue(profilnames.gender, value)}
                             required={true}
                             textInputStyle={styles.textInputDropDown}
                         />
                     </View>
                       <DatePicker
                             showIcon={false}
                             androidMode="spinner"
                             style={styles.inputView}
                             date={values.date}
                             mode="date"
                             placeholder={DateofBirth}
                             format={profilnames.DOB}
                    //   maxDate={moment().format('DD-MM-YYYY')}
                             confirmBtnText={Confirm}
                             cancelBtnText={Cancel}
                             customStyles={{dateInput: styles.dateInput }}
                             onDateChange={(value: any) => setFieldValue(profilnames.date, value)}
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
                             onChange={(value: any) => setFieldValue(profilnames.country, value)}
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
                             onChange={(value: any) => setFieldValue(profilnames.city, value)}
                             required={true}
                             textInputStyle={styles.textInputDropDown}
                         />
                     </View>
                     <Field
                          component={CustomInput}
                          inputFieldStyle={styles.inputView}
                          activeFieldStyle={globalStyle.activeField}
                          placeholder={Username}
                          name={profilnames.userName}
                          required
                      /> 
                    <Field
                          component={CustomInput}
                          inputFieldStyle={styles.inputView}
                          activeFieldStyle={globalStyle.activeField}
                          placeholder={Email}
                          name={profilnames.email}
                          required
                      /> 
                       <Field
                          component={CustomInput}
                          inputFieldStyle={styles.inputView}
                          activeFieldStyle={globalStyle.activeField}
                          placeholder={MobieNumber}
                          name={profilnames.mobileNumber}
                          required
                          keyboardType={numeric}
                      /> 
                <CustomLinearGradient
                    colors={[COLOR.CarminePink,COLOR.primary]}
                    GradientButtonStyle={styles.gradientStyle1}
                    text={SaveChanges}
                    textstyle={styles.gradientTextStyle}
                    onPress={handleSubmit}
                />
              </View> 
               )}
                </Formik>
           </View>
       </View>
    )
}
export default Profile;