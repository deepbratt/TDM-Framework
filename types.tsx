import { ViewProps } from "react-native";

export type RootStackParamList = {
  Root: undefined;
  top:any;
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
  title?:string;
  onPress ?:() => void  ;
  location?:boolean;
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
  onPress?: ()=>void,
  linkTo?: string,
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
  name?:string;
  onChange?:any;
  multiline?:any;
  numberOfLines?:any;
  onClick?:()=>void;
  disabled?:any;
  theme?:any
};
export type categoryProp={
  viewStyle?:any;
  ProductName?:string;
  ProductImage?:any;
  linkTo?:string;

}
export type tabProps={
  initialRouteName?:string;
  indicatorColor?:string;
  activeTintColor?:string;
    inactiveTintColor?:string;
    labelStyle?:any;
    tabStyle?:any;  
    children?:React.ReactNode;
    style:any
}
export type CustomCarouselProps={ 
  layout?:string;
  layoutCardOffset?:string;
  autoplay?:boolean;
  loop?:boolean;
  enableMomentum?:boolean;
  enableSnap?:boolean;
  autoplayDelay?:number;
  sliderWidth?:number;
  activeAnimationType?:string;
  itemWidth?:number;
  inactiveSlideScale?:number;
  inactiveSlideOpacity?:number;
  renderItems:()=>void;
  autoplayInterval?:number;
contentContainerCustomStyle?:any;
containerCustomStyle?:any;
listItems:any

}
