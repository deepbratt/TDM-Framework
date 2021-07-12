import React,{FC} from 'react';
import { View, Text,Image, TouchableOpacity } from 'react-native';

interface Props{
  containerStyle: any;
  imgStyle: any;
  source: any;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  textStyle1: any;
  textStyle2: any;
  textStyle3: any;
  textStyle4: any;
  textContainerStyle: any;
  onPress: () => void;
}

const CustomForgotButton:FC<Props>= (Props) => {
  return (
    <TouchableOpacity onPress={Props.onPress}>
      <View style={Props.containerStyle}>
        <Image style={Props.imgStyle}
          source={Props.source} />
        <Text style={Props.textStyle1}>
          {Props.text1}
        </Text>
        <View style={Props.textContainerStyle}>
          <Text style={Props.textStyle2}>
            {Props.text2}
          </Text>
          <Text style={Props.textStyle3}>
            {Props.text3}
          </Text>
          <Text style={Props.textStyle4}>
            {Props.text4}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
export default CustomForgotButton;