import React, { createRef, FC,useState } from "react";
import {
  Button,
  View, 
} from "react-native";
import { TextInput } from "react-native-paper";
import CustomHeader from '../../component/customHeader/CustomHeader';
import CustomInput from "../../component/CustomInput/CustomInput";
import { globalStyle } from "../../Styles";
import HeadingSection from "../../section/CustomHeading/Heading";
import { DreamCar, Products, Results } from "../../utils/constants/CarsText";
import ProductBox from "../../component/ProductBox";
import { BackButton } from "react-router-native";
import { COLOR } from "../../Theme/Colors";
import Toast from 'react-native-simple-toast';
 const FindCar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [favorites, setfavorites] = useState([] as Array<number>);

  const addFav=(props:any)=>{
    console.log(props,"sklome")
    let array=favorites;
    let addArray=true;
    console.log(addArray,"me")
    array.map((item,key)=>{
      if(item === props.id) {
        array.splice(key,1);
        addArray=false;
      }
    });
    console.log(addArray,"arrayStatus")
    if(addArray){
      array.push(props.id);
      Toast.show('Item has been added');

    }
    else{
      Toast.show('Item has been removed');
    }
    setfavorites([...array]);
   
    // from  here we will send items to favorites through api
  }
  const Toasts = createRef();
    const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
    return (
        <View>
        <CustomHeader
          headerStyle={{ backgroundColor: COLOR.primary }}
          color={COLOR.White} isHome={false} location
          onPress={()=><BackButton/>} />
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
                size={18}
                name={require('../../../assets/images/homepage/filter.png')}
              />
            }
          />
        </View>
       <HeadingSection Heading={DreamCar} SubHeading={Results}>
{
    Products.map((i)=>{
        return(
          <ProductBox 
          key={i.id} 
          Price={i.Price} 
          Title={i.Title}
          KMeter={i.KMeter}
           year={i.year}
           date={i.date}
           Location={i.location}
           src={i.src}
           status={i.status}
           onPress={()=>addFav(i)}
           color={favorites.includes(i.id) ?  COLOR.primary : COLOR.secondary}
          />

        );
    })
}


             </HeadingSection>
           
            
           </View>

          </View>
    )
}
export default FindCar;

function jsonValue(arg0: string, jsonValue: any) {
  throw new Error("Function not implemented.");
}
