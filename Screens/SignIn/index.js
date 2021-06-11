import React from 'react'
import {  View ,Text,Image, TouchableHighlight, TouchableOpacity,} from 'react-native'
import {loginStyle} from "./style"
import { Button } from 'react-native-paper';
import { data,SignInHead, text1, text2,ByContinuingyou,TermsOfuse,And,PrivacyPolicy,alreadyAccount,signUp } from './constant';
export const SignIn = () => {
    return (
     <View style={loginStyle.container}>
     <View style={loginStyle.top}>
       <Text  style={loginStyle.head}>{SignInHead}</Text>
       <Text style={loginStyle.detail}>{text1}</Text>
       <Text style={loginStyle.detail}> {text2}</Text>
    
       </View>
       <View style={loginStyle.mid}>
       <Image style={loginStyle.img} source={require('../../assets/signin.png')}  />
     
     {data.map((item)=>{
       return(
    <TouchableOpacity key={item.id} style={loginStyle.button}>
    <Image style={loginStyle.buttonIcon} source={item.img}  />
        <Button  color="rgba(102, 102, 102, 1)" mode="Outlined" onPress={() => console.log('Pressed')}>
    <Text style={loginStyle.buttonText}> {item.name}</Text>
  </Button>
</TouchableOpacity>
       );
     })}
     <TouchableOpacity><Text style={{textAlign:"right",marginHorizontal:15}}>{alreadyAccount} <Text style={loginStyle.signUp}>{signUp}</Text> </Text></TouchableOpacity>
     </View>
 
      <View style={loginStyle.bottom}>
      <Text style={loginStyle.detail}>{ByContinuingyou}</Text> 
      <Text><Text style={loginStyle.underline}>{TermsOfuse}</Text> <Text style={loginStyle.detail}>{And} </Text><Text style={loginStyle.underline}>{PrivacyPolicy}</Text> </Text>
</View>
     </View>
    )
}
