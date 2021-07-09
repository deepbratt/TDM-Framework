import React from 'react'
import { Route } from 'react-router-native'
import MainLayout from '../../layout/MainLayout'
import TabOneScreen from '../../screens/TabOneScreen'
import TabTwoScreen from '../../screens/TabTwoScreen'

export const AppRoute = ({navigation}) => {
    return (
      <MainLayout navigation={navigation}>
          <Route path="/" exact component={TabOneScreen}/>
          <Route path="/two"  component={TabTwoScreen}/>

      </MainLayout>
    )
}
