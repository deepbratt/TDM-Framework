import { ViewProps } from "react-native";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
export type LayoutProps = {
  children?:React.ReactNode;
  header:string;
  text1:string;
  text2:string;
};
export type HeaderProps = {
  title:string;
  onPress ?:() => void  ;
  location?:() => void  ;
  isHome?:boolean; headerStyle?:any;
   color?:any; 
};
export type DropDownProps={
  color?:any;textcolor?:any;
  changeVisbility?:() => void;
   setData?:() => void ;
}
export type SignInProp={
  onPress:()=>void;
  login:boolean;
  onClick:()=>void
};
export type ButtonProps={
  type?: any,
  buttonStyle?: any,
  textStyle?:any,
  Img?: string,
  leftImg?: boolean,
  disabled?: boolean,
  onPress?: string,
  text: string,
};
export type InputProp={
  placeholder?:string;
  style?:any;
  onBlur?:any;
  onFocus?:any;
  secureTextEntry?:any;
  leftIcon?:any;
  rightIcon?:any;
  value?:any;
  onChange?:any;
  multiline?:any;
  numberOfLines?:any;
  onClick?:()=>void;
  disabled?:any;
}

