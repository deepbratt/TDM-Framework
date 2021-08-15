import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import { axiosInstance } from "./api/api";
import { SomethingWrong } from "./constants/alertMsg";
export const isWeb = Platform.OS === "web";

// set the token and user from the session storage
export const setToken = async (item: any, token: string) => {
  await AsyncStorage.setItem(item, token);
};
// return the user data from the session storage
// export const getUser = () => {
//   const useStr = AsyncStorage.getItem("user");
//   if (useStr) return JSON.parse(useStr);
//   else return null;
// };
// return the token from the session storage
export const getToken = async () => {
  let token = await AsyncStorage.getItem("jwt");
  if (token) {
    let header = {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " + token,
    };

    try {
      let result = await axiosInstance.get("/Users/currentUser", {
        headers: header,
      });
      if (result.status === 401) {
        return false;
      } else {
        return true;
      }
    } catch (error) {
      return false;
    }
  } else {
    return false;
  }
};
// remove the token
export const userLogout = async () => {
  try {
    await AsyncStorage.removeItem("jwt");
    return true;
  } catch (exception) {
    return false;
  }
};
