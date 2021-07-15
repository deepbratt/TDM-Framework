import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Props } from 'react';
import store from "./src/redux/store";
import { Provider } from "react-redux";
import AuthRoute from "./route";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './src/utils/constants/resources/useCachedResources';
import SuccessFullReset from './src/screens/successFullReset';
import ResetPassword from './src/screens/resetPassword';
import BottomSheetComponent from './src/component/BottomSheet';
import CarDetails from './src/screens/carDetails';
import CustomTopBar from './src/component/customTopTab';
import TokenAmount from './src/screens/tokenAmount';
import ConfirmPayment from './src/screens/confirmPayment';
import PaymentError from './src/screens/paymentError';
import PayTokenAmount from './src/screens/payTokenAmount';
import Notification from './src/screens/notification';

export default function App() {
    const isLoadingComplete = useCachedResources();
    if (!isLoadingComplete) {
      return null;
    } else {
    return (
        <Provider store={store}>
      {/* <SafeAreaProvider>
    <AuthRoute />
    <StatusBar style="dark"/>
  </SafeAreaProvider> */}
        <CarDetails/>
        
          </Provider>
           
          );
        }
    }
