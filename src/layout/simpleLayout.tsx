import React, { FC } from "react";
import { ScrollView, View,Text } from "react-native";
import { LayoutProps } from "../../types";
import { styles } from "./style";
import { And, ByContinuingyou, PrivacyPolicy, TermsOfuse } from "../utils/constants/en";

const SimpleLayout: FC<LayoutProps> = ({ children, header, text1, text2, }) => {
    const { container, top, head, detail, bottom, underline } = styles;
    return (
        <ScrollView style={container}>
            <View style={top}>
                <Text style={head}>
                    {header}
                    </Text>
                <Text style={detail}>{text1}</Text>
                <Text style={detail}> {text2}</Text>
            </View>
            {children}
            <View style={bottom}>
                <Text style={detail}>{ByContinuingyou}</Text>
                <Text><Text style={underline}>{TermsOfuse}</Text> <Text style={detail}>{And} </Text><Text style={underline}>{PrivacyPolicy}</Text> </Text>
            </View>
        </ScrollView>)
}
export default SimpleLayout;