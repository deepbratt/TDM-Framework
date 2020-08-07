import { AsyncStorage } from "react-native";
import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
const middleware = thunk;
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(
    persistedReducer,
    compose(applyMiddleware(middleware, logger))
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
