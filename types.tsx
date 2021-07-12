
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
export type customGradientButtonProps = {
  // GradientButton?: any;
}

