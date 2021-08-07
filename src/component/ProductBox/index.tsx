import { AntDesign, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React,{FC} from 'react'
import { TouchableOpacity } from 'react-native';
import {View,Text,Image} from "react-native"
import { PBoxProps } from '../../../types';
import { COLOR } from '../../Theme/Colors';
import CustomButton from '../CustomButton';
import { boxStyle } from './style'
 const ProductBox:FC<PBoxProps>= ({src,Price,Title,year,KMeter,onPress,onSelect,status,date,Location,color}) => {
    const {boxView,main,Div,img,div2,price,name,KmText,location,
        div3,icon,dateText,pending,pText,payed,center}=boxStyle;
    return (
  <TouchableOpacity style={boxView} onPress={onSelect} > 
   <View style={main}>
        <View style={Div}>
           <Image
              fadeDuration={0}
              style={img}
              source={src}
            />
        </View>
        <View style={div2}>
             <View>
               <Text style={price}>Rs. {Price} </Text>
               <Text style={name}>{Title} </Text>
               <Text style={KmText}>{year} <Text> {KMeter}</Text></Text>
            </View>
         <View >
             <Text  style={location}><Ionicons name="location-outline" size={14} color={COLOR.secondary} />{Location}</Text>
        </View>
        </View>
        <View style={div3}>
            <View  style={center}>
               { status &&
               status === 'Payed' ? (
                <CustomButton 
                buttonStyle={payed}
                 onPress={onPress}
                textStyle={pText}
                 text={status}
                    />
               ): status === "Pending" ? ( <LinearGradient
                  colors={[COLOR.CarminePink, COLOR.primary]}
                  start={{ x: 0, y: 0.4 }}
                  end={{ x: 0, y: 1 }}
                  onPress={onPress}
                style={pending} ><Text style={pText}>{status}</Text></LinearGradient>
                ):  status === "like" ?(
                            <TouchableOpacity style={icon} onPress={onPress}>
                                <AntDesign name="heart" size={20} color={color} />
                              </TouchableOpacity>
                ): null
                 } 
                  
            </View>
            <View style={dateText}>
               <Text style={location}>{date}</Text>
             </View>
        </View>
      </View>
 </TouchableOpacity>
    )
}
export default ProductBox;
