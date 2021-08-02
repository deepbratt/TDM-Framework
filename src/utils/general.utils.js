import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
export const isWeb = Platform.OS === "web";


    // set the token and user from the session storage
    export const setUserSession = async(token, user) => {
    await AsyncStorage.setItem('token', token);
        AsyncStorage.setItem('user', JSON.stringify(user));
      }
    // return the user data from the session storage
       export const getUser =()=>{
           const useStr=AsyncStorage.getItem('user');
           if (useStr) 
           return JSON.parse(useStr);
           else 
           return null;
       }
       // return the token from the session storage
       export const getToken=()=>{
           return AsyncStorage.getItem('token') || null
       }
       // remove the token and user from the session storage
    export const removeUserSession = async() => {
        try {
            await  AsyncStorage.removeItem('token','user');
            return true;
        }
        catch(exception) {
            return false;
        }
    }
      
     
