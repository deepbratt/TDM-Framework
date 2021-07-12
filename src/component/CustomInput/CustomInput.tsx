import React,{FC} from 'react'
import { TextInput } from 'react-native-paper';
import { InputProp } from '../../../types';

 const CustomInput:FC<InputProp> = ({
    placeholder,
    style,
    onBlur,
    onFocus,
    secureTextEntry,
    leftIcon,
    rightIcon,
    value,
    onChange,
    multiline,
    numberOfLines,
    onClick,
    disabled
}) => {

    return (
        <TextInput
        placeholder={placeholder}
         style={style}
        onFocus={onFocus}
      onBlur={onBlur}
        secureTextEntry={secureTextEntry}
        left={leftIcon}
        right={rightIcon}
        value={value} 
        onChangeText={onChange}
        multiline={multiline}
        numberOfLines={numberOfLines}
        theme={{ colors: { primary: "white" } }}
        underlineColor={"transparent"}
        onClick={onClick}
        disabled={disabled}
      />
    )
}

export default CustomInput;