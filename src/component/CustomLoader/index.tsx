import React from 'react'
import { ActivityIndicator, View } from 'react-native';
import { globalStyle } from '../../Styles';
import { COLOR } from '../../Theme/Colors';

 const CustomLoader = () => {
    return (
        <View style={globalStyle.loadingView}>
        <ActivityIndicator size="large" color={COLOR.primary}/>
     </View>
    )
}
export default CustomLoader;