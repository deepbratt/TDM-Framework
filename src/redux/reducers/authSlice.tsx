import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getToken } from "../../utils/general.utils";
// const tokenjwt=async()=>{
// let token=await AsyncStorage.getItem("jwt")
// return token;
// }
// const tokenAsyn=await AsyncStorage.getItem("jwt")
const initialState = {
  
  currentUser: []as Array<any>,
  // tokenjwt().then(response=>response),
  // token:tokenAsyn,
  user:{},
  // isLoggedIn: tokenAsyn!== null ? true : false,
  SelectedItem:[]as Array<any>,
  activeCompare: false,
  alreadyVerify:false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state,action) => {
      // state.isLoggedIn = true;
      state.user = action.payload.data.user;
      // state.token = action.payload.data.token;
      console.log("payload", action.payload.data.user);
    },
    logout: (state) => {
      state.user = {};
      // state.isLoggedIn = false;
      // state.token =""
      
    
    },
    compare: (state,{ payload }: PayloadAction) =>{ 
       const existingCartItem = state.SelectedItem.find(item => item.id === payload.id);
       (state.SelectedItem.length === 2 || existingCartItem !== undefined )
        ? 
        null 
        : 
        ( state.SelectedItem=[...state.SelectedItem,payload]),
         
         (state.SelectedItem.length === 2) ? state.activeCompare=true :   state.activeCompare=false
    },
    remove: (state,{ payload }: PayloadAction) =>{   
     state.SelectedItem=state.SelectedItem.filter((item) => item.id!== payload.id);    
    },
    accountSignUp: (state) => {
      state.alreadyVerify = true;
    },
    accountNotSignUp: (state) => {
      state.alreadyVerify = false;
    },
    userId: (state,action) => {
      state.currentUser=action.payload;
      console.log("user_redux",action.payload) ;
    },
  },
});

export const { login, logout,compare ,remove,accountSignUp,accountNotSignUp,userId} = authSlice.actions;

export default authSlice.reducer;
