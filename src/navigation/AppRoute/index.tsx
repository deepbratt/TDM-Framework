import React from 'react'
import { BackButton, Route } from 'react-router-native'
import route from '../../../route'
import MainLayout from '../../layout/MainLayout'
import { protectedroute } from '../../utils/constants/path'
import PrivateRoute from '../../Route/privateRoute'


interface Nav{
  navigation:any;

}
export const AppRoute:React.FC<Nav> = ({ navigation}) => {
  return (
    <MainLayout navigation={navigation}>
      {
      protectedroute.map((route) => {
          return(
            <BackButton>
          <PrivateRoute
            exact={true} 
            path={route.path}
           key={route.id} 
           component={route.component} 
           />
           </BackButton>)

        })
      }


    </MainLayout>
  )
}
