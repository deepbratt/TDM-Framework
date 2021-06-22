import React from 'react'
import {StyleSheet, TouchableOpacity, Text, ViewPropTypes,Image,View} from 'react-native';
import { Link } from "react-router-native";
const CustomLink = ({underlayColor,to,text,Linkstyle,style}) => {
    return (
        <Link to={to} underlayColor={underlayColor}
        style={Linkstyle} >
        <View>
            <Text  style={style} >
             {text}
            
    </Text>
    </View>                
    </Link>
    )
}
export default CustomLink;
