import React,{FC,ReactNode} from "react";
import { View,Text } from "react-native";
import CustomHeader from "../component/customHeader";
import CustomFooter from "../component/customFooter";
import { LayoutProps } from "../../types";


const MainLayout:FC<LayoutProps>=({children})=>{
    return <View>
        <CustomHeader />
        {children}
        <CustomFooter />
    </View>;
}
export default MainLayout;