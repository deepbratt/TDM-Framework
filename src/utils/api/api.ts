import axios from "axios";

const BASE_URL = "https://api.tezdealz.com/v1";
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
 export const config=  {
  headers: {
      Accept: "multipart/form-data",
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
    'Authorization':'Bearer '
    }};