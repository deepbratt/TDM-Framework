import React,{FC} from 'react';
import { View, Text } from 'react-native';

interface Props{
    text: any;
    textStyle: any;
}
const CustomText: FC<Props> = (Props) => {
    return (
        <Text style={Props.textStyle}>
            {Props.text}
        </Text>
    )
}
export default CustomText;