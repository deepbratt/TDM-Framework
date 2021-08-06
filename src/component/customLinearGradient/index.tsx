import React, { FC } from 'react';
import { Text,TouchableOpacity,Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { LinearGradientProps } from '../../../types';
import { Link } from 'react-router-native';
const CustomLinearGradient: FC<LinearGradientProps> = ({
  colors,
  GradientButtonStyle,
  text,
  textstyle,
  imgStyle,
  source,
  linkTo,
    onPress,
}) => {
  return (
    <Link to={linkTo} onPress={onPress} component={TouchableOpacity}>
      <LinearGradient
        colors={colors}
        style={GradientButtonStyle}
              
      >
        <Text style={textstyle}>{text}</Text>
        <Image style={imgStyle} source={source} />
      </LinearGradient>
    </Link>
  );
};
export default CustomLinearGradient;