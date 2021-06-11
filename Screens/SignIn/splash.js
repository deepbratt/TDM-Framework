import React from 'react'
import {  View ,Text,Image} from 'react-native'
import {loginStyle} from "./style"

import {  text1, text2, } from './constant';
export const Splash = () => {
    return (
     <View style={loginStyle.container}>
       <Image style={{width:200,height:90}}  source={require('../../assets/tezDealzzz.png')}  />
      <View style={{marginVertical:20}}>
      <Text style={loginStyle.detail}>{text1}</Text>
       <Text style={loginStyle.detail}> {text2}</Text>
       </View>
     </View>
    )
}
