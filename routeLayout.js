import React from 'react'
import AfterLogin from './Component/Layout/AfterLoginLayout'
import { NativeRouter, Route,Link } from "react-router-native";
import { Home, Page } from './screens';
import { View } from 'react-native';
export const Rout = ({navigation}) => {
    const route=[
        {
            id:1,
            title:"Home",
            path:"/",
            component:Home,
        },
        {
            id:2,
            title:"Page",
            path:"/page",
            component:Page,
        },
    ]
  return(
    <AfterLogin  navigation={navigation} >

       {
           route.map((i)=>{
               return(
                <Route key={i.id} path={i.path} exact component={i.component} />
            
               )
           })
       }
       </AfterLogin>  
     )       //    <Route path="/" exact component={Home} />
            //    <Route path="/page" exact component={Page} />
     
  
}
