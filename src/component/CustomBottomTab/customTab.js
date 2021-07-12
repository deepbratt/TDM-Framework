import React from 'react'
import {View,Text,Button, TouchableOpacity} from "react-native"
import { Link } from 'react-router-native'
 const CustomBottomTab = () => {

    return (
       <View style={{ width: "100%",
       height: 70,backgroundColor:"#e8e8e8",flexDirection:"row", alignItems: "center",
      justifyContent: "space-around"}}>
      <Link to="/" component={TouchableOpacity} underlayColor="none" >
      <View style={{ width: 60,
      height: 30,
      alignItems: "center",
      justifyContent: "center",}}><Text> Tab One</Text></View>
      </Link>
      <Link  to="/one" component={TouchableOpacity} underlayColor="none" >
<View style={{ width: 60,
      height: 60,
      alignItems: "center",
      justifyContent: "center",}}><Text>Tab Two</Text></View>
       </Link>
       </View>
    )
}
export default CustomBottomTab;
