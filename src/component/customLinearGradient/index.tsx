import React, { FC } from 'react';
import { Text,TouchableOpacity,Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
interface Props{
    colors: any;
    GradientButtonStyle: any;
    textstyle: any;
    text: string;
    imgStyle: any;
    source: any;
    onPress: () => void;
}
const CustomLinearGradient:FC<Props> = (Props) => {
    return (
        <TouchableOpacity onPress={Props.onPress}>
            <LinearGradient
                colors={Props.colors}
                style={Props.GradientButtonStyle}
            >
                <Text style={Props.textstyle}>{Props.text}</Text>
                <Image style={Props.imgStyle}
                    source={Props.source}
                />
            </LinearGradient>
        </TouchableOpacity>
    )
}
export default CustomLinearGradient;