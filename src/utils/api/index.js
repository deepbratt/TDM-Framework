import React, { useState } from 'react';
import axios from "axios";
import * as Google from 'expo-google-app-auth';
import { protectedroute } from "../constants/path";


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
// export const handleGoogleSignin = () => {
//   // setGoogleSubmitting=(true)
//   const config = {
//     iosClientId: '817126191598-cgd05ql102q5em1sg5e018qhpmudvadr.apps.googleusercontent.com',
//     androidClientId: '817126191598-t36n0nvg3saru2r64jpnc3ihd543hkn8.apps.googleusercontent.com',
//     scopes:['profile','email']
//   };
//   Google
//     .logInAsync(config)
//     .then((result) => {
//       const { type, user } = result;
//       console.log(result);
//       if (type == 'success') {
//         const { email, name, photoUrl } = user;
//         handleMessage('Google Signin Successfully', 'SUCCESS')
//         setTimeout(() => protectedroute, { email, name, photoUrl }, 1000);
//       } else {
//         handleMessage('Google Signin was cancelled');
//       }
//       // setGoogleSubmitting=(false)
//     })
//     .catch(error => {
//       console.log(error);
//       handleMessage('An Error occurred. check your network and try again');
//       // setGoogleSubmitting(false);
//     })
// }