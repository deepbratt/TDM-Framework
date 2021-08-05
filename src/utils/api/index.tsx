import axios from "axios";
import { fieldForm } from "../../../types";

const BASE_URL = "http://api.tezdealz.com/v1";
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "multipart/form-data",
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
  },
});
const user='/Users';
const ads='/ads';

const USERS = {
    LOGIN: `${user}/login`,
    Email_SIGNUP: `${user}/signup-email`,
    Phone_SIGNUP: `${user}/signup-phone`,
    Email_LOGIN: `${user}/login-email`,
    Phone_LOGIN: `${user}/login-phone`,
    Email_VRIFY: `${user}/send-verification-email`,
    Phone_VRIFY: `${user}/send-verification-phone`,
    Fb_Login:`${user}/facebook-auth`,
   

  };
const CARS={
  all_Cars: `${ads}/cars/`,
}
  
  export const userSignUpApi = async(data:fieldForm)=>{
    try {
    let result = await axios.post(`${BASE_URL}${USERS.Email_SIGNUP}`,data);
    return result.data;
    }
    catch(error){
        if (error.response === undefined) {
            return { status: 403, message: "Something Went Wrong!" };
          }
          return error.response.data;
         }
       };
    export const userSignUpwithPhone = async(data:fieldForm)=>{
        try {
        let result = await axios.post(`${BASE_URL}${USERS.Phone_SIGNUP}`,data);
        return result.data;
        }
        catch(error){
            if (error.response === undefined) {
                return { status: 403, message: "Something Went Wrong!" };
              }
              return error.response.data;
            }
          };
       export const userLoginwithEmail = async(data:fieldForm)=>{
            try {
            let result = await axios.post(`${BASE_URL}${USERS.Email_LOGIN}`,data);
            return result.data;
            }
            catch(error){
                if (error.response === undefined) {
                    return { status: 403, message: "Something Went Wrong!" };
                  }
                  return error.response.data;
                 }
               };
        export const userLoginwithPhone = async(data:fieldForm)=>{
                try {
                let result = await axios.post(`${BASE_URL}${USERS.Phone_LOGIN}`,data);
                return result.data;
                }
                catch(error){
                    if (error.response === undefined) {
                        return { status: 403, message: "Something Went Wrong!" };
                      }
                      return error.response.data;
                    }
                  };
    export const userVerifyEmail = async(data:fieldForm)=>{
        try {
        let result = await axios.post(`${BASE_URL}${USERS.Email_VRIFY}`,data);
        return result.data;
        }
        catch(error){
            if (error.response === undefined) {
                return { status: 403, message: "Something Went Wrong!" };
              }
              return error.response.data;
            }
          };
      export const userVerifyPhone = async(data:fieldForm)=>{
            try {
            let result = await axios.post(`${BASE_URL}${USERS.Phone_VRIFY}`,data);
            return result.data;
            }
            catch(error){
                if (error.response === undefined) {
                    return { status: 403, message: "Something Went Wrong!" };
                  }
                  return error.response.data;
                }
              };
          export const FbLogin = async()=>{
                try {
                let result = await axios.post(`${BASE_URL}${USERS.Fb_Login}`);
                return result.data;
              }
              catch(error){
                  if (error.response === undefined) {
                      return { status: 403, message: "Something Went Wrong!" };
                    }
                    return error.response.data;
                  }
                };
           export const allCars = async()=>{
                try {
                let result = await axios.get(`${BASE_URL}${CARS.all_Cars}`);
                return result.data;
                }
                catch(error){
                    if (error.response === undefined) {
                        return { status: 403, message: "Something Went Wrong!" };
                      }
                      return error.response.data;
                    }
                  };