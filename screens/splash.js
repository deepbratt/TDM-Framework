import React from 'react'
import {  View ,Text,Image} from 'react-native'
import {loginStyle} from "./SignIn/style"

import {  text1, text2, } from './SignIn/constant';
export default function Splash (){
    return (
     <View style={loginStyle.container}>
     <View style={{width:200,height:90}}>
     <Image fadeDuration={0} style={{width:"100%",height:"100%"}}  source={require('../assets/tezDealzzz.png')}  />
     </View>
   
      <View style={{marginVertical:20}}>
      <Text style={loginStyle.detail}>{text1}</Text>
       <Text style={loginStyle.detail}> {text2}</Text>
       </View>
     </View>
    )
}
