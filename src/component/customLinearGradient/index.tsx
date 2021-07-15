import React, { FC } from 'react';
import { Text,TouchableOpacity,Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { LinearGradientProps } from '../../../types';

const CustomLinearGradient: FC<LinearGradientProps> = ({
    colors,
    GradientButtonStyle,
    text,
    textstyle,
    imgStyle,
    source,
    onPress,
}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <LinearGradient
                colors={colors}
                style={GradientButtonStyle}
            >
                <Text style={textstyle}>{text}</Text>
                <Image style={imgStyle}
                    source={source}
                />
            </LinearGradient>
        </TouchableOpacity>
    )
}
export default CustomLinearGradient;