
import React,{FC} from 'react'
import {View,Image,Text} from "react-native"
import { COLOR } from '../../Theme/Colors';
import { Lorem ,elit} from '../../utils/constants/en';
import { styles } from "./style"
const Splash = () => {
    const {
       container,
       splashText,
       image
      } = styles;
    return (
        <View style={{flex:1,  backgroundColor: COLOR.White,
    }}>
       <View style={container}>
 <Image  
 style={image}
                  source={require("../../../assets/images/logo.png")}
                />
                <Text style={splashText}>{Lorem}</Text>
                <Text style={splashText}>{elit}</Text>
       </View>
       </View>
    )
}
export default Splash;
