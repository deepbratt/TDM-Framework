import { ViewProps } from "react-native";

export type RootStackParamList = {
  Root: undefined;
  top:any;
  NotFound: undefined;
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
  color?:any;
  textcolor?:any;
  setData?:() => void ;
  onRequestClose?:() => void ;
  onPress?:() => void ;
  location?:boolean;
  changeVisbilities?:() => void;
  setValues?:() => void ;
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
  colorIcon?:string
  size?:number
};
export type InputProp={
  placeholder?:string;
  style?:any;
  onBlur?:any;
  onFocus?:any;
  secureTextEntry?:boolean;
  leftIcon?:any;
  rightIcon?:any;
  value?:any;
  name?:string;
  onChange?:any;
  multiline?:any;
  numberOfLines?:any;
  onClick?:()=>void;
  disabled?:any;
  theme?:any;
  error?:boolean;
  onEndEditing?:any
};
export type genralProps={
  headerName?:string;
  Imgsrc?:any;
  view?:string;
  initialValues?:any;
  validationSchema?:any;
  onSubmit?:any;
  fields?:any;
  handleShow?:any;
  ButtonText?:string;

};
export type SearchProp={
  value?:any;
  onChange?:any;
  onPress?:()=>void;
  onClick?:()=>void;
};
export type fieldForm = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  code?: string;
  password?: string;
  confirmPassword?: string;
};
export type categoryProp={
  viewStyle?:any;
  ProductName?:string;
  ProductImage?:any;
  linkTo?:string;
  divStyle?:any

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
export type TextProps = {
  text: string;
  textStyle: any;
};

export type MapViewProps = {
  style: any;
  provider: any;
};

export type LinearGradientProps = {
  colors?: any;
  GradientButtonStyle?: any;
  textstyle?: any;
  text?: string;
  imgStyle?: any;
  source?: any;
  onPress?: any;
  linkTo?: any;
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
export type HeadSectionProp={
  children?:React.ReactNode;
  Heading?:string;
  SubHeading?:string;
};
export type PBoxProps={
  src?:any;
  Price?:string;
  Title?:string;
  year?:string;
  KMeter:string;
  onPress?:()=>void;
  onSelect?:()=>void;
  status:string;
  date?:string;
  Location?:string;
  color?:string
}
export type InboxBoxProps={
  src?:any;
  User?:string;
  Msg?:string;
  onPress:()=>void;
  status?:any;
  time?:string;
  count?:string;
  color?:string;
  Time?:string;
  attach?:string;
  seen?:boolean;
  Incoming?:boolean;
  Audio?:string;
}

export type CustomModalProps = {
  isVisible: any;
  onBackButtonPress: () => void;
  children: any;
}

export type CustomMessageProps = {
  isBack?: any;
  onPress?: () => void;
  src?: any;
  bName?: string;
  tokenamount?: any;
  amount?: string;
  location?: string;
  confirmpayment?: any;
  Title?: string;
  subTitle?: string;
  paymenterror?: any;
  othermessage?: any;
  paytokenamount?: any;
  singlebutton?: any;
  doublebutton?: any;
  ButtonText?: any;
  ButtonText1?: any;
};

export type SeacrhForm = {
  sortBy?: string;
  brand?: string;
  body?: string;
  yearFrom?: string;
  yearTo?: string;
  kilometerFrom?: string;
  kilometerTo?: string;
};