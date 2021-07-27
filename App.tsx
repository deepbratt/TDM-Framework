import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Props } from 'react';
import store from "./src/redux/store";
import { Provider } from "react-redux";
import AuthRoute from "./route";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './src/utils/constants/resources/useCachedResources';
import VerificationNumber from './src/screens/verificationNumber';
import Search from './src/screens/search';
import TokenAmount from './src/screens/tokenAmount';
import SuccessFullReset from './src/screens/successFullReset';
import ResetPassword from './src/screens/resetPassword';
import RequestAccept from './src/screens/requestAccept';
import PayTokenAmount from './src/screens/payTokenAmount';
import PaymentError from './src/screens/paymentError';
import Notification from './src/screens/notification';
import ConfirmPayment from './src/screens/confirmPayment';
import CarDetails from './src/screens/carDetails';
import AddDetails from './src/screens/addDetails';
import Example from './src/screens/search';
import PostDetails from './src/screens/postDetails';

export default function App() {

    const isLoadingComplete = useCachedResources();
    if (!isLoadingComplete) {
      return null;
    } else {
    return (
        <Provider store={store}>
      {/* <SafeAreaProvider>
      <AuthRoute/>
    <StatusBar style="light" translucent={true} backgroundColor={'black'}/>
  </SafeAreaProvider> */}
        <AddDetails/>
          </Provider>
           
          );
        }
    }
