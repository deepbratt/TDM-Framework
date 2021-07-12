import React,{FC} from "react";
import { View,Text, TouchableOpacity } from "react-native";
import { HeaderProps } from "../../../types";

const CustomHeader:FC<HeaderProps>=({pressBtn,Headtitle})=>{
    return <View style={{backgroundColor:"blue",width:"100%",height:80,flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
        <Text style={{color:"white"}}> head</Text>
        <TouchableOpacity>
        <Text style={{color:"white",}} onPress={pressBtn} >MenuBar</Text> 
        </TouchableOpacity>
  
    </View>;
}
export default CustomHeader;