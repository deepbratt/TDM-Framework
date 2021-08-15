import React,{FC,ReactNode} from "react";
import { ScrollView } from "react-native";
import CustomHeader from "../component/customHeader/CustomHeader";

import CustomBottomTab from "../component/CustomBottomTab/index";

interface layout{
    children:any,navigation:any;
}
const MainLayout:FC<layout>=({children,navigation})=>{
    return(
        <>
     <ScrollView contentContainerStyle={{flexGrow: 1}}>{children}</ScrollView>  
        <CustomBottomTab/>
 </> )
}
export default MainLayout;