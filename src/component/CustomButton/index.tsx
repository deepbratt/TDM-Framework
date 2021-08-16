import React,{FC} from 'react'
import { TouchableOpacity,Text,Image,View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { ButtonProps } from '../../../types';
import { Link } from 'react-router-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
 const CustomButton:FC<ButtonProps> = ({
    buttonStyle,
    textStyle,
    onPress,
    linkTo,
    leftImg,
    Img,
    text,
    colorIcon,
    size
    })=>{
    return (
        <Link onPress={onPress} to={`${linkTo}`} underlayColor="none" component={TouchableOpacity}   
        style={buttonStyle}>
      
      {leftImg &&
      <View 
      style={{width:wp('19%'),justifyContent:"center",alignItems:"center"}}
      >
     <TextInput.Icon size={size} 
     style={{height:"100%"}}
      name={`${Img}`} color={colorIcon} />
     </View>    }
        <Text style={textStyle}>{text}</Text>
      </Link>
    )
}

export default CustomButton;