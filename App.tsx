import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import store from "./redux/store";
import { Provider } from "react-redux";
import { Routes } from './routes';
import DrawerNavigator from './navigation/drawerNavigation/drawerNavigator';
  
export default function App() {
    return (
        <Provider store={store}>
         <Routes/>
            <StatusBar />
            {/* <DrawerNavigator/> */}
          </Provider>
        
           
          );
        }

