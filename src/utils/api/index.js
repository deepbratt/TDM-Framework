import axios from "axios";

const BASE_URL = "http://3.133.81.44/v1";
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "multipart/form-data",
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
  },
});
const user='/users';
const USERS = {
    LOGIN: `${user}/login`,
    SIGNUP: `${user}/sign-up`,
  };
