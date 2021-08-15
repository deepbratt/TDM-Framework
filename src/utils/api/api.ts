import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const BASE_URL = "https://api.tezdealz.com/v1";
const gettoken=async()=>{
  let token= await AsyncStorage.getItem('jwt')
 return token;
 }
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
  'Content-Type': 'application/json',
  "Access-Control-Allow-Origin": "*",
  'Authorization':'Bearer '+  gettoken()
  }
});
export const axiosInstances = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
  'Content-Type': 'application/json',
  "Access-Control-Allow-Origin": "*",
  'Authorization':'Bearer '+  gettoken()
  }
});

    export const axiosInstanceForm = axios.create({
      baseURL: BASE_URL,
      headers: {
        Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      "Access-Control-Allow-Origin": "*",
      'Authorization':'Bearer '+  gettoken()
      }});
    
   