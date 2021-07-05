import React,{FC} from "react";
import { View,Text, TouchableOpacity ,Button} from "react-native";
import { HeaderProps } from "../../../types";

const CustomHeader:FC<HeaderProps>=({pressBtn,Headtitle})=>{
    return <View style={{backgroundColor:"blue",width:"100%",height:70,flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
        <Text style={{color:"white"}}> head</Text>
      <Button onPress={pressBtn} title="menu"></Button>  
    </View>;
}
export default CustomHeader;