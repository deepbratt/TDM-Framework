import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoggedIn: true,
  SelectedItem:[]as Array<any>,
  activeCompare: false,
  alreadyVerify:false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
    compare: (state,{ payload }: PayloadAction) =>{ 
       const existingCartItem = state.SelectedItem.find(item => item.id === payload.id);
       (state.SelectedItem.length === 2 || existingCartItem !== undefined )
        ? 
        null 
        : 
        ( state.SelectedItem=[...state.SelectedItem,payload]),
         
         (state.SelectedItem.length === 2) ? state.activeCompare=true :   state.activeCompare=false
        //  console.log("existingiTEM=",existingCartItem,"selArray=",state.SelectedItem) ;
    },
    remove: (state,{ payload }: PayloadAction) =>{  
      // console.log("id",payload.id) ;  
     state.SelectedItem=state.SelectedItem.filter((item) => item.id!== payload.id);     
      console.log("remove",payload.id) ;
    },
    accountSignUp: (state) => {
      state.alreadyVerify = true;
    },
    accountNotSignUp: (state) => {
      state.alreadyVerify = false;
    },
  },
});

export const { login, logout,compare ,remove,accountSignUp,accountNotSignUp} = authSlice.actions;

export default authSlice.reducer;
