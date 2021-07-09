import React,{FC} from 'react'
import { Button } from 'react-native';
interface ButtonProp{
  titles:string;
  onPress:()=>void
}

 const CustomButton:FC<ButtonProp>= ({titles,onPress}) => {
    return (
      <Button onPress={onPress}>{titles}</Button>  
    )
}
export default CustomButton;