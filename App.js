import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Routes from "./routes";
import persist from "./store";

const persistStore = persist();
export default function App() {
  return (
    <Provider store={persistStore.store}>
      <PersistGate persistor={persistStore.persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}
