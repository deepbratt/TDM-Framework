import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import { fieldForm, postForm } from "../../../types";
import { setToken } from "../general.utils";
import { axiosInstance, axiosInstanceForm } from "./api";

const BASE_URL = "https://api.tezdealz.com/v1";

const user = "/Users";

const USERS = {
  LOGIN: `${user}/login`,
  Email_SIGNUP: `${user}/signup-email`,
  Phone_SIGNUP: `${user}/signup-phone`,
  Email_LOGIN: `${user}/login-email`,
  Phone_LOGIN: `${user}/login-phone`,
  Email_VRIFY: `${user}/send-verification-email`,
  Phone_VRIFY: `${user}/send-verification-phone`,
  Fb_Login: `${user}/facebook-auth`,
  UPDATE_ME: `${user}/updateMe`,
  UPDATE_PASS: `${user}/updateMyPassword`,
  CURRENT_USER: `${user}/currentUser`,
};

export const userSignUpApi = async (data: fieldForm) => {
  try {
    let result = await axiosInstance.post(
      `${BASE_URL}${USERS.Email_SIGNUP}`,
      data
    );
    return result.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};
export const userSignUpwithPhone = async (data: fieldForm) => {
  try {
    let result = await axiosInstance.post(`${USERS.Phone_SIGNUP}`, data);
    return result.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};
export const userLoginwithEmail = async (data: fieldForm) => {
  try {
    let result = await axiosInstance.post(`${USERS.Email_LOGIN}`, data);
    setToken("jwt", result.data.token);
    return result.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};
export const userLoginwithPhone = async (data: fieldForm) => {
  try {
    let result = await axiosInstance.post(`${USERS.Phone_LOGIN}`, data);
    setToken("jwt", result.data.token);
    return result.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};
export const userVerifyEmail = async (data: fieldForm) => {
  try {
    let result = await axios.post(`${BASE_URL}${USERS.Email_VRIFY}`, data);
    return result.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};
export const userVerifyPhone = async (data: fieldForm) => {
  try {
    let result = await axios.post(`${BASE_URL}${USERS.Phone_VRIFY}`, data);
    return result.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};
export const FbLogin = async () => {
  try {
    let result = await axios.post(`${BASE_URL}${USERS.Fb_Login}`);
    return result.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};
const gettoken = async () => {
  let token = await AsyncStorage.getItem("jwt");
  return token;
};

export const UpdateMe = async (data: any) => {
  let token = await gettoken();
  let headers = {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
    Authorization: "Bearer " + token,
  };
  try {
    let result = await axios.patch(
      "https://api.tezdealz.com/v1/Users/updateMe",
      data,
      { headers: headers }
    );
    return result.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};
export const UpdateMyPassword = async (body: any) => {
  let token = await gettoken();
  let headers = {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
    Authorization: "Bearer " + token,
  };
  try {
    let result = await axios.patch(
      "https://api.tezdealz.com/v1​/Users​/updateMyPassword",
      body,
      { headers: headers }
    );
    return result.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

export const getcurrentUser = async () => {
  try {
    let result = await axios.get(`${BASE_URL}${USERS.CURRENT_USER}`);
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};
