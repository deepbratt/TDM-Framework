import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import store from "./src/redux/store";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./index";
import { COLOR } from "./src/Theme/Colors";
import { Route } from "react-router";
import { BackButton, NativeRouter } from "react-router-native";
import SignIn from "./src/screens/SignIn/SignIn";
import Splash from "./src/screens/Splash/index";

export default function App() {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return <Splash />;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <NativeRouter>
            <BackButton>
              <Route exact path="/" component={SignIn} />
            </BackButton>
          </NativeRouter>
          <StatusBar
            style="light"
            translucent={true}
            backgroundColor={COLOR.Black}
          />
        </SafeAreaProvider>
      </Provider>
    );
  }
}
