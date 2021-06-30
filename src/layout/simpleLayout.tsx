import React,{FC,ReactNode} from "react";
import { View } from "react-native";
import { LayoutProps } from "../../types";


const SimpleLayout:FC<LayoutProps>=({children})=>{
    return <View>
        {children}
    </View>;
}
export default SimpleLayout;