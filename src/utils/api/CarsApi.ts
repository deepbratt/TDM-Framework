import axios from "axios";
import { postForm } from "../../../types";
import { SomethingWrong } from "../constants/alertMsg";
import { axiosInstance, config } from "./api";

const ads='/ads';
const CARS={
    all_Cars: `${ads}/cars/`,
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