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
  setData?: () => void;
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
  text?: string,
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
export type CustomCarouselProps = {
  layout?: string;
  layoutCardOffset?: string;
  autoplay?: boolean;
  loop?: boolean;
  enableMomentum?: boolean;
  enableSnap?: boolean;
  autoplayDelay?: number;
  sliderWidth?: number;
  activeAnimationType?: string;
  itemWidth?: number;
  inactiveSlideScale?: number;
  inactiveSlideOpacity?: number;
  renderItems: () => void;
  autoplayInterval?: number;
  contentContainerCustomStyle?: any;
  containerCustomStyle?: any;
  listItems: any
};

export type SmsButtonProps = {
  pressBtn?: () => void;
};

export type AvatarProps = {
  overlayContainerStyle: any;
  size: any;
  rounded: boolean;
  onPress: () => void;
  activeOpacity: any;
  source: any;
  imageProps: any;
};

export type BottomSheetProps = {
  visible: boolean;
  onBackButtonPress: () => void;
  onBackdropPress: () => void;
  children: any;
};

export type SearchBottomSheetProps = {
  visible: boolean;
  onBackButtonPress: () => void;
  onBackdropPress: () => void;
};

export type TopTabProps = {
  tabBarOtions: any;
  labelStyle: any;
  style: any;
  activeTintColor: any;
  indicatorStyle: any;
  name: string;
  component: any;
  name1: string;
  component1: any;
};

export type TextProps = {
  text: string;
  textStyle: any;
};

export type MapViewProps = {
  style: any;
  provider: any;
};

export type LinearGradientProps = {
  colors: any;
  GradientButtonStyle: any;
  textstyle: any;
  text: string;
  imgStyle: any;
  source: any;
  onPress: () => void;
  linkTo: any;
};

export type ForgotButtonProps = {
  containerStyle: any;
  imgStyle: any;
  source: any;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  textStyle1: any;
  textStyle2: any;
  textStyle3: any;
  textStyle4: any;
  textContainerStyle: any;
  linkTo: any;
};
export type DropDownSaim40Props = {
  color?:any;
  textcolor?:any;
  FirstState?: any;
  changeVisbility?:any;
  setData?: any;
  visible?: boolean;
  onRequestClose?:() => void ;
  onPress?:() => void ;
  location?:boolean;
  changeVisbilities?:() => void;
  setValues?: () => void;
  dummydata: any;
}
export type NewBottomSheetProps = {
  ref: any;
}
