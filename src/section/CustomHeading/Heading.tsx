import React,{FC} from 'react'
import {View,Text} from "react-native"
import { HeadSectionProp } from '../../../types';
import { sectionStyle } from './style'
 const HeadingSection:FC<HeadSectionProp> = ({children,Heading,SubHeading}) => {
    const {title,subTitle,titleView}=sectionStyle;
    return (
        <View style={{ justifyContent: "space-between"}}>
          <View style={titleView}>
            <Text style={title}>{Heading}</Text>
          { SubHeading && <Text style={subTitle}>{SubHeading}</Text>}
            </View>
            { children }
        </View>
    )
}
export default HeadingSection;
