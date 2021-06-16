import React, { useState } from 'react'
import {  View ,Text,Image, TouchableOpacity, ScrollView,} from 'react-native'
import {signInStyles} from "./style"
import { Button, TextInput } from 'react-native-paper';
import {  text1, text2,ByContinuingyou,TermsOfuse,And,PrivacyPolicy, EnterPassword, enterEmail, signUp, VerifyYourAccount, EnteryourNumber, EnterdigitCode } from '../../utils/en/constant';
import { CustomInput } from '../../Component/CustomInput';
import { ForgetYourPassword, Login } from '../../utils/en/ResetPwconstant';
import CustomButton from '../../Component/customButton';
export default function Verify ({ navigation }){
   
    const [isActive, setisActive] = useState(false);
    const [Active, setActive] = useState(false);
const cstomStyle = Active ? signInStyles.inputField : signInStyles.activeField;

const customStyle = isActive ? signInStyles.inputField : signInStyles.activeField;
    return (
       
     <ScrollView style={signInStyles.container}>
     <View style={signInStyles.top}>
       <Text  style={signInStyles.head}>{VerifyYourAccount}</Text>
       <Text style={signInStyles.detail}>{text1}</Text>
       <Text style={signInStyles.detail}> {text2}</Text>
       </View>
       <View >
       <View style={signInStyles.img}>
       <Image fadeDuration={0} style={{width:"100%",height:"100%"}} source={require('../../assets/signin.png')}  />
       </View>
       <View style={{alignItems:"center",
  justifyContent:"center",}}>
        <CustomInput
      placeholder={EnteryourNumber}
      style={cstomStyle}
      onFocus={() => setActive( true )}
    onBlur={() => setActive( false )}
      leftIcon={<TextInput.Icon size={18}  color={Active ? '#C20000' : '#ACABB1'}  name="phone" />}
      theme={{ colors: { primary: "white" } }}
      underlineColor="transparent"
    />
    <CustomInput
      placeholder={EnterdigitCode}
       style={customStyle}
      onFocus={() => setisActive( true )}
    onBlur={() => setisActive( false )}
      secureTextEntry
      leftIcon={<TextInput.Icon size={18} color={isActive ? '#C20000' : '#ACABB1'} name="lock" />}    
    />
 <View style={{  alignItems:"center",
  justifyContent:"center",marginVertical:20}} >
                            <CustomButton text={Login} 
                             buttonStyle={signInStyles.SignInButton}
                              textStyle={signInStyles.loginText}
                               onPress={() => navigation.navigate("SignIn")}/>
                            </View>  
 </View>
 <View >
     <CustomButton text={ForgetYourPassword} buttonStyle={signInStyles.forgetButton} textStyle={signInStyles.forgetText} onPress={() => navigation.navigate("ResetPassword")}>
   
                            </CustomButton>
 </View>
 </View>
 
      <View style={signInStyles.bottom}>
      <Text style={signInStyles.detail}>{ByContinuingyou}</Text> 
      <Text><Text style={signInStyles.underline}>{TermsOfuse}</Text> <Text style={signInStyles.detail}>{And} </Text><Text style={signInStyles.underline}>{PrivacyPolicy}</Text> </Text>
</View>
     </ScrollView>
    
    )
}
