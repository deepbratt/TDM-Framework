import React,{FC,ReactNode} from "react";
import { ScrollView } from "react-native";
import CustomHeader from "../component/customHeader";
import CustomFooter from "../component/customFooter";
import { LayoutProps } from "../../types";
import CustomBottomTab from "../component/CustomBottomTab/customTab";


const MainLayout=({children,navigation})=>{
    return(
        <>
        <CustomHeader onPress={()=>navigation.openDrawer()} />
     <ScrollView>{children}</ScrollView>  
        <CustomBottomTab/>
 </> )
}
export default MainLayout;