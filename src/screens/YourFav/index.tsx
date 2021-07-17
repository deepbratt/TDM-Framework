import React, { useState } from 'react'
import { View,Text } from 'react-native';
import { TextInput } from "react-native-paper";
import CustomHeader from '../../component/customHeader/CustomHeader';
import CustomInput from '../../component/CustomInput/CustomInput';
import { openDrawer } from '../../navigation';
import { globalStyle } from '../../Styles';

 const YourFav = () => {
      const [favorites, setfavorites] = useState([] as Array<number>);

    return (
       <View>
         <CustomHeader
           headerStyle={{  backgroundColor:"#F8F8F8"}}
           color="#313131" isHome={true} title="Your Favorites" 
          onPress={()=>openDrawer()} />
           <View style={globalStyle.container}>
        <View style={globalStyle.inputView}>
          <CustomInput
            placeholder="Search"
            style={globalStyle.searchStyle}
            // value={searchQuery}
            // onChange={onChangeSearch}
            leftIcon={
              <TextInput.Icon
                size={18}
                name={require('../../../assets/images/homepage/search.png')}
              />
            }
            rightIcon={
              <TextInput.Icon
                size={18}
                name={require('../../../assets/images/homepage/filter.png')}
              />
            }
          />
        </View>
          <Text>Favourites</Text>
          </View>
       </View>
    )
}
export default YourFav;
