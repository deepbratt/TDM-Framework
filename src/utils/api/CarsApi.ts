import axios, { AxiosRequestConfig } from "axios";
import { postForm } from "../../../types";
import { SomethingWrong } from "../constants/alertMsg";
import { axiosInstance, config } from "./api";

const ads='/ads';
const AND='&_id='
const LIMIT='&limit='
const PAGE='?page='

const CARS={
    all_Cars: `${ads}/cars/`,
    ALL_Fav:`${ads}/cars/favourites/`,
    ADD_Fav: `${ads}/cars/add-to-fav/`,
    REMOVE_Fav: `${ads}/cars/remove-from-fav/`,
    my_Cars: `${ads}/cars/myCars`,
  COMPARE_Cars: `${ads}/Cars?_id=`,
    all_CarsHome: `${ads}/cars?limit=10&page=`,
  bodyType: `${ads}/cars?bodyType=`,
  carsByPrice: `${ads}/cars?price`,
  allfilter:`${ads}/cars?limit=10`

}
  export const allCars = async(pno?:number,limit?:number)=>{
    try {
    let result = await axiosInstance.get(`${CARS.all_Cars}${PAGE}${pno}${LIMIT}${limit}`);
    return result.data;
    }
    catch(error){
        if (error.response === undefined) {
            return { status: 403, message: SomethingWrong };
          }
          return error.response.data;
        }
      };
      export const createCars = async(data:FormData)=>{
        try {
        let result = await axiosInstance.post(`${CARS.all_Cars}`,data,config);
        return result.data;
        }
        catch(error){
            if (error.response === undefined) {
                return { status: 403, message: SomethingWrong };
              }
              return error.response.data;
            }
          };
          export const carDetailsById= async(id:any)=>{
            try {
                let result = await axiosInstance.get(`${CARS.all_Cars}${id}`);
                return result.data;
                }
                catch(error){
                    if (error.response === undefined) {
                        return { status: 403, message: SomethingWrong };
                      }
                      return error.response.data;
                    }
                  };
                  export const allFavourites= async()=>{
                    try {
                        let result = await axiosInstance.get(`${CARS.ALL_Fav}`);
                        return result.data;
                        }
                        catch(error){
                            if (error.response === undefined) {
                                return { status: 403, message: SomethingWrong };
                              }
                              return error.response.data;
                            }
                          };
                  export const addToFav= async(id:any)=>{
                    try {
                        let result = await axiosInstance.patch(`${CARS.ADD_Fav}${id}`);
                        return result.data;
                        }
                        catch(error){
                            if (error.response === undefined) {
                                return { status: 403, message: SomethingWrong };
                              }
                              return error.response.data;
                            }
                          };
                          export const removeFromFav= async(id:any)=>{
                            try {
                                let result = await axiosInstance.patch(`${CARS.REMOVE_Fav}${id}`);
                                return result.data;
                                }
                                catch(error){
                                    if (error.response === undefined) {
                                        return { status: 403, message: SomethingWrong };
                                      }
                                      return error.response.data;
                                    }
                                  };
                            export const myCarsApi= async()=>{
                               try {
                                  let result = await axiosInstance.get(`${CARS.my_Cars}`);
                                    return result.data;
                                        }
                                     catch(error){
                                          if (error.response === undefined) {
                                             return { status: 403, message: SomethingWrong };
                                           }
                                          return error.response.data;
                                         }
                                       };
                                export const carCompare= async(id1: number,id2: number)=>{
                                  try {
                                     let result = await axiosInstance.get(`${CARS.COMPARE_Cars}${id1}${AND}${id2}`);
                                         return result.data;
                                                 }
                                            catch(error){
                                                if (error.response === undefined) {
                                                    return { status: 403, message: SomethingWrong };
                                                  }
                                                return error.response.data;
                                              }
};

export const Carfilter = async (queryparams: any) => {
  try {
    let result = await axiosInstance.get(`${CARS.allfilter}${queryparams}`);
    return result.data;
  } catch (error) {
    if (error.response === undefined) {
      return { status: 403, message: SomethingWrong };
    }
    return error.response.data;
  }
};
                                            
export const allCarsByBody = async (queryparams: string) => {
  try {
    let result = await axiosInstance.get(`${CARS.all_CarsHome}${queryparams}`);
    return result.data;
  } catch (error) {
    if (error.response === undefined) {
      return { status: 403, message: SomethingWrong };
    }
    return error.response.data;
  }
};
export const allCarsByPrice = async (queryparams: string) => {
  try {
    let result = await axiosInstance.get(`${CARS.all_CarsHome}${queryparams}`);
    return result.data;
  } catch (error) {
    if (error.response === undefined) {
      return { status: 403, message: SomethingWrong };
    }
    return error.response.data;
  }
};
                                            
                                            export const carUpdate= async(id:number,body: postForm)=>{
                                              try {
                                                  let result = await axiosInstance.patch(`${CARS.all_Cars}${id}`,body);
                                                  return result.data;
                                                  }
                                                  catch(error){
                                                      if (error.response === undefined) {
                                                          return { status: 403, message: SomethingWrong };
                                                        }
                                                        return error.response.data;
                                                      }
                                                    };
                                                    export const carDelete= async(id:any)=>{
                                                      try {
                                                          let result = await axiosInstance.delete(`${CARS.all_Cars}${id}`);
                                                          return result.data;
                                                          }
                                                          catch(error){
                                                              if (error.response === undefined) {
                                                                  return { status: 403, message: SomethingWrong };
                                                                }
                                                                return error.response.data;
                                                              }
};
                                                            
                                           
                                  
                                  
