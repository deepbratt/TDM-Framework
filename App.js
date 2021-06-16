import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';
import { Provider as PaperProvider } from "react-native-paper";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Routes from "./routes";
import persist from "./store";
import SignIns from './screens/SignIn';
import { SignIn, SignUpLog } from './screens';

const persistStore = persist();
 //  for initalize custom font
const customFonts = {
  'IBMPlexSans-ExtraLight': require('./assets/fonts/IBMPlexSans-ExtraLight.ttf'), //200
  'IBMPlexSans-Light': require('./assets/fonts/IBMPlexSans-Light.ttf'), //300
  'IBMPlexSans-Regular': require('./assets/fonts/IBMPlexSans-Regular.ttf'), //400
  'IBMPlexSans-Medium': require('./assets/fonts/IBMPlexSans-Medium.ttf'),//500
  'IBMPlexSans-SemiBold':require('./assets/fonts/IBMPlexSans-SemiBold.ttf'), //600
  'IBMPlexSans-Bold': require('./assets/fonts/IBMPlexSans-Bold.ttf'), //700

};

export default function App() {

 
const [isLoaded] = useFonts(customFonts);
if (!isLoaded) {
    return <AppLoading />;
}
  else{
    return (
      <Provider store={persistStore.store}>
      <PersistGate persistor={persistStore.persistor}>
   <Routes/>
      </PersistGate>
    </Provider>
    
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
