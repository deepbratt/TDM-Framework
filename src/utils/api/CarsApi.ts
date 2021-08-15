import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { postForm } from "../../../types";
import { SomethingWrong } from "../constants/alertMsg";
import { axiosInstance, axiosInstanceForm } from "./api";
const BASE_URL = "https://api.tezdealz.com/v1";
const ads = "/ads";
const AND = "&_id=";
const LIMIT = "&limit=";
const PAGE = "?page=";

const CARS = {
  all_Cars: `${ads}/cars/`,
  ALL_Fav: `${ads}/cars/favourites/`,
  ADD_Fav: `${ads}/cars/add-to-fav/`,
  REMOVE_Fav: `${ads}/cars/remove-from-fav/`,
  my_Cars: `${ads}/cars/myCars`,
  COMPARE_Cars: `${ads}/Cars?_id=`,
};
export const allCars = async (pno?: number, limit?: number) => {
  try {
    let result = await axiosInstance.get(
      `${CARS.all_Cars}${PAGE}${pno}${LIMIT}${limit}`
    );
    return result.data;
  } catch (error) {
    if (error.response) {
      return error.response;
    }
    return error.response.data;
  }
};
const gettoken = async () => {
  let token = await AsyncStorage.getItem("jwt");
  return token;
};

export const createCars = async (data: any) => {
  let token = await gettoken();
  let headers = {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
    Authorization: "Bearer " + token,
  };
  try {
    let result = await axiosInstanceForm.post(`${CARS.all_Cars}`, data, {
      headers: headers,
    });
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};
export const carDetailsById = async (id: any) => {
  try {
    let result = await axiosInstance.get(`${CARS.all_Cars}${id}`);
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};
export const allFavourites = async () => {
    let jwtToken=await AsyncStorage.getItem("jwt")
    let  headers={
     Accept: 'application/json',
   'Content-Type': 'application/json',
   "Access-Control-Allow-Origin": "*",
   'Authorization':'Bearer '+ jwtToken
   }
     console.log(jwtToken)
  try {
    let result = await axios.get(`https://api.tezdealz.com/v1/ads/cars/favourites/`,{headers:headers});
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};
export const addToFav = async (id: any) => {
    let jwtToken=await AsyncStorage.getItem("jwt")
    let  headers={
     Accept: 'application/json',
   'Content-Type': 'application/json',
   "Access-Control-Allow-Origin": "*",
   'Authorization':'Bearer '+ jwtToken
   }
     console.log(jwtToken)
  try {
    let result = await axios.patch(`https://api.tezdealz.com/v1/ads/cars/add-to-fav/${id}`,{headers:headers});
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};
export const removeFromFav = async (id: any) => {
  let jwtToken=await AsyncStorage.getItem("jwt")
    let  headers={
     Accept: 'application/json',
   'Content-Type': 'application/json',
   "Access-Control-Allow-Origin": "*",
   'Authorization':'Bearer '+ jwtToken
   }
     console.log(jwtToken)
  try {
    let result = await axios.patch(`https://api.tezdealz.com/v1/ads/cars/remove-from-fav/${id}`,{headers:headers});
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};

export const myCarsApi = async () => {
  let jwtToken = await AsyncStorage.getItem("jwt");
  let header = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: "Bearer " + jwtToken,
  };
  console.log(jwtToken);
  try {
    let result = await axiosInstance.get("/ads/cars/myCars", {
      headers: header,
    });

    return result.data;
  } catch (error) {
    return error.response.data;
  }
};
export const carCompare = async (id1: number, id2: number) => {
  try {
    let result = await axiosInstance.get(
      `${CARS.COMPARE_Cars}${id1}${AND}${id2}`
    );
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};
