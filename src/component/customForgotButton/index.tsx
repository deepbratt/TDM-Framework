import React,{FC} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ForgotButtonProps } from '../../../types';

const CustomForgotButton: FC<ForgotButtonProps> = ({
  containerStyle,
  imgStyle,
  source,
  text1,
  text2,
  text3,
  text4,
  textStyle1,
  textStyle2,
  textStyle3,
  textStyle4,
  textContainerStyle,
  onPress
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={containerStyle}>
        <Image style={imgStyle}
          source={source} />
        <Text style={textStyle1}>
          {text1}
        </Text>
        <View style={textContainerStyle}>
          <Text style={textStyle2}>
            {text2}
          </Text>
          <Text style={textStyle3}>
            {text3}
          </Text>
          <Text style={textStyle4}>
            {text4}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
export default CustomForgotButton;