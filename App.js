import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from "react-native-paper";
import { SignIn } from './Screens/SignIn';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Splash } from './Screens/SignIn/splash';
export default function App() {

  //  for initalize custom font
  let [fontsLoaded] = useFonts({
    'IBMPlexSans-Regular': require('./assets/fonts/IBMPlexSans-Regular.ttf'),
    'IBMPlexSans-Thin': require('./assets/fonts/IBMPlexSans-Thin.ttf'),
    'IBMPlexSans-Bold': require('./assets/fonts/IBMPlexSans-Bold.ttf'),
    'IBMPlexSans-Light': require('./assets/fonts/IBMPlexSans-Light.ttf'),
    'IBMPlexSans-Medium': require('./assets/fonts/IBMPlexSans-Medium.ttf'),
    
  });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  else {
    return (
    <PaperProvider >
    <View style={styles.container}>
  <Splash/>
     {/* <SignIn/> */}
      <StatusBar style="auto" />
    </View>
    </PaperProvider>
    
  );
} 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
