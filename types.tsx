
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
  children?:React.ReactNode 
};

export type HeaderProps = {
  Headtitle:string,
  pressBtn?:() => void  ;
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
  onPress: () => void;
}

