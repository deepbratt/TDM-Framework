import React, { useState } from 'react'
import { View,Text, TouchableOpacity } from 'react-native'
import Category from '../../../component/CategoryBox'
import CustomHeader from '../../../component/customHeader/CustomHeader'
import { openDrawer } from '../../../navigation'
import { globalStyle } from '../../../Styles'
import { COLOR } from '../../../Theme/Colors'
import {  Choosewhat, sellList } from '../../../utils/constants/HomeConstant'
import { postAdStyle } from './style'
 const PostAd = () => {
 const {boxstyle,Flex,title}=postAdStyle;

    return (
        <View style={{flex:1}}>
        <CustomHeader
          headerStyle={{ backgroundColor:COLOR.primary }}
          color={COLOR.White} isHome={true} location
          onPress={() => openDrawer()} />
        <View style={globalStyle.container}>
            <Text style={title}>
          {Choosewhat}
            </Text>
            <View  style={Flex}>
        {
              sellList.map((i) => {
                return (
                    <TouchableOpacity key={i.id} style={{marginVertical:15}}>
                  <Category linkTo={i.onPress}
                    ProductImage={i.ProductImage}
                    ProductName={i.ProductName}
                    viewStyle={i.viewStyle}
                    divStyle={boxstyle}
                    />
                    </TouchableOpacity>
                )
              })
            }
            </View>
     </View>
        </View>
    )
}
export default PostAd;