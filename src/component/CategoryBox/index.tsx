import React, {FC } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Link } from "react-router-native";
import { categoryProp } from "../../../types";
import { boxStyle } from "./style";

 const Category:FC<categoryProp> = ({viewStyle,ProductName,ProductImage,linkTo}) => {
     const {container,title,image}=boxStyle;
    return (
       <Link component={TouchableOpacity} underlayColor="none" to={linkTo} style={[container,{backgroundColor:viewStyle}]}>
           <Image
            fadeDuration={0}
            style={image}
            source={ProductImage}
          />
           <Text style={title}>
             {ProductName}
           </Text>
       </Link>
    )
}
export default Category;
