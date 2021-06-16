import React from 'react'
import {  View ,Text,Image, ScrollView } from 'react-native'
import {loginStyle} from "./style"
import { data,SignInHead, text1, text2,ByContinuingyou,TermsOfuse,And,PrivacyPolicy,alreadyAccount,signUp, Login, SignUpHead, ForgotPassword } from '../../utils/en/constant';
import CustomButton from '../../Component/customButton';
 export default function LogComponent  ({ onPress,coverImg,login,onClick })  {
    return (
     <ScrollView style={loginStyle.container}>
     <View style={loginStyle.top}>
       <Text  style={loginStyle.head}>{login ? SignInHead : SignUpHead}</Text>
       <Text style={loginStyle.detail}>{text1}</Text>
       <Text style={loginStyle.detail}> {text2}</Text>
       </View>
       <View style={loginStyle.mid}>
       <View style={loginStyle.img}>
       <Image fadeDuration={0} style={{width:"100%",height:"100%"}} source={coverImg}  />
       </View>
       <View style={{  alignItems:"center",
  justifyContent:"center",}}>
     {data.map((item)=>{
       return(
        <CustomButton 
 onPress={() => console.log('Pressed')}
    leftImg={true}
    key={item.id}
    buttonStyle={loginStyle.button}
    textStyle={loginStyle.buttonText}
    text={item.name}
    Img={item.img}
/>
       );
     })}
     </View>
     <Text style={{textAlign:"right",marginHorizontal:50,marginVertical:2}} > <Text style={loginStyle.account}>{alreadyAccount} </Text><Text style={loginStyle.signUp} onPress={onPress}>{login ? Login : signUp}</Text> </Text>
     </View>
    
    {
      !login &&
       <View >
     <CustomButton text={ForgotPassword}
      buttonStyle={loginStyle.forgetButton} 
     textStyle={loginStyle.forgetText} onPress={onClick} />                         
 </View>
    }
      <View style={loginStyle.bottom}>
      <Text style={loginStyle.detail}>{ByContinuingyou}</Text> 
      <Text><Text style={loginStyle.underline}>{TermsOfuse}</Text> <Text style={loginStyle.detail}>{And} </Text><Text style={loginStyle.underline}>{PrivacyPolicy}</Text> </Text>
</View>
     </ScrollView>
    )
}
