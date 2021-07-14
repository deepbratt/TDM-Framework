import React,{FC} from 'react'
import { TouchableOpacity,Text,Image,View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { ButtonProps } from '../../../types';
import { Link } from 'react-router-native'

 const CustomButton:FC<ButtonProps> = ({
    buttonStyle,
    textStyle,
    onPress,
    linkTo,
    leftImg,
    Img,
    text,
    })=>{
    return (
        <Link onPress={onPress} to={linkTo} underlayColor="none" component={TouchableOpacity}   style={
            buttonStyle
          }>
      
      {leftImg &&
      <View style={{width:70}}>
     <Image fadeDuration={0} style={{marginHorizontal:20,width:"41%",height:"100%"}} source={Img}  />
     </View>    }
        <Text style={textStyle}>{text}</Text>
   
      </Link>
    )
}

export default CustomButton;