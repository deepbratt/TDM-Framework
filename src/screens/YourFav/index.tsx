import React, { useState } from 'react'
import { View,Text } from 'react-native';
import { TextInput } from "react-native-paper";
import CustomHeader from '../../component/customHeader/CustomHeader';
import CustomInput from '../../component/CustomInput/CustomInput';
import CustomSearch from '../../component/CustomSearch';
import { openDrawer } from '../../navigation';
import { globalStyle } from '../../Styles';
import { COLOR } from '../../Theme/Colors';

 const YourFav = () => {
      const [favorites, setfavorites] = useState([] as Array<number>);

    return (
       <View>
         <CustomHeader
           headerStyle={{  backgroundColor:COLOR.Cultured}}
           color={COLOR.DarkCharcoal} isHome={true} title="Your Favorites" 
          onPress={()=>openDrawer()} />
           <View style={globalStyle.container}>
        <View style={globalStyle.inputView}>
        <CustomSearch    
        // value={searchQuery}
        //     onChange={onChangeSearch}
            />
        </View>
          <Text>Favourites</Text>
          </View>
       </View>
    )
}
export default YourFav;
