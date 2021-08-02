import React,{FC} from 'react'
import { TextInput } from 'react-native-paper';
import {SearchProp } from '../../../types';
import { globalStyle } from '../../Styles';

 const CustomSearch:FC<SearchProp> = ({
    value,
    onChange,
    onPress,
    onClick
}) => {

    return (
      <TextInput
      placeholder="Search"
      style={globalStyle.searchStyle}
      value={value}
      onClick={onClick}
      onChangeText={onChange}
      theme={{ colors: { primary: "transparent" } }}
      underlineColor={"transparent"}
      left={
        <TextInput.Icon
          size={18}
          name={require('../../../assets/images/homepage/search.png')}
        />
      }
      right={
        <TextInput.Icon
          size={18}
          name={require('../../../assets/images/homepage/filter.png')}
          onPress={onPress}
          
        />
      }
    />
    )
}

export default CustomSearch;