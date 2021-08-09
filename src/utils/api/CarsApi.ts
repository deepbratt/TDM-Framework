import axios from "axios";
import { postForm } from "../../../types";
import { SomethingWrong } from "../constants/alertMsg";
import { axiosInstance, config } from "./api";

const ads='/ads';
const CARS={
    all_Cars: `${ads}/cars/`,
    ALL_Fav:`${ads}/cars/favourites/`,
    ADD_Fav: `${ads}/cars/add-to-fav/`,
    REMOVE_Fav: `${ads}/cars/remove-from-fav/`
}
  export const allCars = async()=>{
    try {
    let result = await axiosInstance.get(`${CARS.all_Cars}`);
    return result.data;
    }
    catch(error){
        if (error.response === undefined) {
            return { status: 403, message: SomethingWrong };
          }
          return error.response.data;
        }
      };
      export const createCars = async(data:postForm)=>{
        try {
        let result = await axiosInstance.post(`${CARS.all_Cars}`,data);
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