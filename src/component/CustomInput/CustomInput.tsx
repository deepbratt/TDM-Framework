import React,{FC} from 'react'
import { Text,  StyleSheet } from 'react-native';
import {TextInput,} from 'react-native-paper'
import { globalStyle } from '../../Styles'
import { InputProp } from '../../../types';
import { COLOR } from '../../Theme/Colors';
import { FormikProps } from 'formik';

interface form{
  leftIcon:any,
  rightIcon:any,
  secureText:boolean;
  inputFieldStyle:any,
  activeFieldStyle:any,
  errorTextStyle:any
}

const CustomInput:FC<form> = (props: { [x: string]: any; field: { name: any; onFocus:any; onBlur: any; onChange: any; value: any; }; form: { errors: any; touched: any; setFieldTouched: any; }; }) => {
  const {
    field: { name, onBlur,onFocus, onChange, value },
    form: { errors, touched, setFieldTouched },
    leftIcon,rightIcon,secureText,inputFieldStyle,
    activeFieldStyle,errorTextStyle,
    ...inputProps
  } = props

  const hasError = errors[name] && touched[name]

  return (
    <>
      <TextInput
        style={[
          inputFieldStyle,
          hasError && activeFieldStyle
        ]}
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name)
          onBlur(name)
        }}
        secureTextEntry={secureText}
        onFocus={onFocus}
        left={leftIcon}
        right={rightIcon}
        theme={{ colors: { primary: "transparent" } }}
        underlineColor={"transparent"}
        {...inputProps}
             
      />
      {hasError && <Text style={errorTextStyle}>{errors[name]}</Text>}
    </>
  )
}

export default CustomInput