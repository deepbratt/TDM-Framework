import { MaterialIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import {View, Image, TouchableOpacity} from "react-native"
import { TextInput } from 'react-native-paper'
import { connect, useDispatch } from 'react-redux'
import CustomButton from '../../component/CustomButton'
import CustomHeader from '../../component/customHeader/CustomHeader'
import CustomInput from '../../component/CustomInput/CustomInput'
import ProductBox from '../../component/ProductBox'
import { openDrawer } from '../../navigation'
import { compare ,remove} from '../../redux/reducers/authSlice'
import HeadingSection from '../../section/CustomHeading/Heading'
import { globalStyle } from '../../Styles'
import { COLOR } from '../../Theme/Colors'
import { Products } from '../../utils/constants/CarsText'
import { compareStyle } from './style'
 const SearchCompare = ({SelectedItem,activeCompare}) => {
   const {crossIcon,imageIcon,compareButton,compareText,chip,flexHeight}=compareStyle;
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = (query: any) => {
      setSearchQuery(query);
    console.log("serach",searchQuery)
    
    }
    const Submit=()=>{
      console.log("submit",searchQuery)
    }
    const dispatch = useDispatch();
    const addToCompare = (item: any) => {
      dispatch(compare(item))
    };
    const removeFromCompare = (item) => {
      dispatch(remove(item))
    };








    return (
        <View>
        <CustomHeader
          headerStyle={{ backgroundColor: COLOR.primary }}
          color={COLOR.White} isHome={true} location
          onPress={()=>openDrawer()} />
         <View style={globalStyle.container}>
           <View style={globalStyle.inputView}>
          <CustomInput
            placeholder="Search"
            style={globalStyle.searchStyle}
            value={searchQuery}
            onChange={onChangeSearch}
            leftIcon={
              <TextInput.Icon
                size={18}
                name={require('../../../assets/images/homepage/search.png')}
              />
            }
            rightIcon={
              <TextInput.Icon
              onPress={Submit}
                size={18}
                name={require('../../../assets/images/homepage/filter.png')}
              />
            }
          />
        </View>
        
        <HeadingSection Heading="Filter Items" SubHeading={`Select Items to be Compare: `}>
   {
     SelectedItem.length>0 && 
           <View style={flexHeight}>
        {  SelectedItem.map((i)=>{
            return(
             <TouchableOpacity onPress={()=>removeFromCompare(i)}  key={i.id} style={chip}>
              <Image style={imageIcon} source={i.src} />
              <MaterialIcons name="cancel" size={20} color="black" style={crossIcon} />
               </TouchableOpacity>
               )}) 
        }
            {    activeCompare === true && 
                    <CustomButton text="Compare" linkTo="/compareProduct"
                       buttonStyle={compareButton} 
                         textStyle={compareText}/>

                    }
                    {/* {
                       SelectedItem.length === 2 ? alert("only two items can be compare"):null
                    } */}
           </View>
    }

        {
    Products.filter(
      (val)=>{
        if(searchQuery === '') {
          return val;
        } else if (val.Title.toLowerCase().includes(searchQuery.toLowerCase())){
        return val
        }
      }
    ).map((i)=>{
        return(
          <ProductBox 
          key={i.id} 
          Price={i.Price} 
          Title={i.Title}
          KMeter={i.KMeter}
           year={i.year}
           Location={i.location}
           src={i.src}
           onSelect={()=>addToCompare(i)}
          />
        );
    })
    
}
        </HeadingSection>
      </View> 
      </View> 
    )
}
const mapStateToProps = (state) => ({
  SelectedItem: state.rootReducer.auth.SelectedItem,
  activeCompare:state.rootReducer.auth.activeCompare,
});
export default (connect)(mapStateToProps)(SearchCompare);