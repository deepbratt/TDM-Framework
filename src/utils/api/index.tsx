import axios from "axios";
import { fieldForm } from "../../../types";

const BASE_URL = "http://ada93485b9c7f4d93b071069afef8073-bdc392983b881963.elb.us-east-2.amazonaws.com/v1";
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "multipart/form-data",
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
  },
});
const user='/Users';
const USERS = {
    LOGIN: `${user}/login`,
    Email_SIGNUP: `${user}/signup-email`,
    Phone_SIGNUP: `${user}/signup-phone`,
    Email_VRIFY: `${user}/send-verification-email`,
    Phone_VRIFY: `${user}/send-verification-phone`,
  };

  
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