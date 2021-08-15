import React from 'react'
import { ActivityIndicator, View } from 'react-native';
import { globalStyle } from '../../Styles';
import { COLOR } from '../../Theme/Colors';

 const CustomLoader = () => {
    return (
        <View >
        <View style={globalStyle.loadingView}>
        <ActivityIndicator size={50} color={COLOR.primary}/>
     </View>
     </View>
    )
}
export default CustomLoader;