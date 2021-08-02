import React,{FC} from 'react';
import { Text } from 'react-native';
import { TextProps } from '../../../types';

const CustomText: FC<TextProps> = ({
    text,
    textStyle,
}) => {
    return (
        <Text style={textStyle}>
            {text}
        </Text>
    )
}
export default CustomText;