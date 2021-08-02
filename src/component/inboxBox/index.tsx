import { AntDesign, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React,{FC} from 'react'
import { TouchableOpacity } from 'react-native';
import {View,Text,Image} from "react-native"
import { TextInput } from 'react-native-paper';
import { InboxBoxProps } from '../../../types';
import { COLOR } from '../../Theme/Colors';
import CustomButton from '../CustomButton';
import { inboxBoxStyle } from './style'
 const InboxBox:FC<InboxBoxProps>= ({src,Time,User,count,Msg,onPress,attach,seen,Incoming,Audio,status,color}) => {
    const {boxView,main,Div,img,div2,name,msg,
        div3,icon,timeText,time,pText,payed,center,flexCenter}=inboxBoxStyle;
    return (
  <TouchableOpacity style={boxView} onPress={onPress}> 
   <View style={main}>
        <View style={[Div,{backgroundColor:color}]}>
           <Image
              fadeDuration={0}
              style={img}
              source={src}
            />
        </View>
        <View style={div2}>
<View>
<Text style={name}>{User}</Text>
</View>
{ status &&
    status === 'audio' ? (  
    <View style={flexCenter}>
        <View style={icon}>
             <Ionicons name="mic" size={14} color={Incoming ? COLOR.DarkCharcoal:COLOR.secondary} />    
        </View> 
         <Text style={[msg,{color:Incoming ? COLOR.DarkCharcoal:COLOR.CadetGrey}]}>{Audio}</Text>
      </View>
      ):  status === 'attach' ? (   <View style={flexCenter}>
      <View style={icon}>
            <TextInput.Icon name={require('../../../assets/images/carlist/attach.png')} size={12} color={Incoming ? COLOR.DarkCharcoal:COLOR.secondary} />
        </View> 
         <Text style={[msg,{color:Incoming ? COLOR.DarkCharcoal:COLOR.CadetGrey}]}>{attach}</Text>
      </View>): (  
      <View style={flexCenter}>
         <Text style={[msg,{color:Incoming ? COLOR.DarkCharcoal:COLOR.CadetGrey}]}>{Msg}</Text>
      </View>
      )
} 
        </View>
        <View style={div3}>
        <View style={time}>
               <Text style={[timeText,{color:Incoming ? COLOR.DarkCharcoal:COLOR.CadetGrey}]}>{Time}</Text>
             </View>
            <View  style={center}>
            {seen && 
            seen ? (
                <View style={payed}>
                <Text style={pText}>{count}</Text>
            </View> 
                )
            : null
             
            }
               
            </View>
           
        </View>
      </View>
 </TouchableOpacity>
    )
}
export default InboxBox;
