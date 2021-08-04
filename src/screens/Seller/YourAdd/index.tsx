import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { View,Text } from 'react-native';
import { ActivityIndicator } from 'react-native';
import CustomButton from '../../../component/CustomButton';
import CustomHeader from '../../../component/customHeader/CustomHeader';
import ProductBox from '../../../component/ProductBox';
import { openDrawer } from '../../../navigation';
import HeadingSection from '../../../section/CustomHeading/Heading';
import { COLOR } from '../../../Theme/Colors';
import { allCars } from '../../../utils/api';
import { Products } from '../../../utils/constants/CarsText';
import { YourAdsTitle } from '../../../utils/constants/HomeConstant';
import { addStyles } from './styles';

 const YourAds = () => {
const {loadingView,} = addStyles;
    const [Productss, setProducts] = useState([]);
    const [Loader, setLoader] = useState(false);
     useEffect(() => {
    fetchData()
}, [])

    const fetchData = async () => {
        console.log("fethcinggzx")
        setLoader(true)
        await allCars().then((result) => {
            console.log(result)
            if (result.status === "success") {
                setLoader(false),
            setProducts(result.data.result) 
            }
            else {
                setLoader(false),
                alert(result.message)
            }
        } 
        ).catch(error=>{
            if (error.status === 401) return alert("user and password incorrect"); 
           }) 
    }
    return (
        <View style={{flex:1}}>
        <CustomHeader
          headerStyle={{ backgroundColor:COLOR.Cultured }}
          color={COLOR.DarkCharcoal} isHome={true} title={YourAdsTitle}
          onPress={() => openDrawer()} />
 {Loader ? (
     <View style={loadingView}><Text></Text>
        <ActivityIndicator size="large" color={COLOR.primary}/>
     </View>
 ) :
    <HeadingSection >
 {
     Productss.map((i,index)=>{
        return(
          <ProductBox 
          key={index} 
          Price={i.price} 
          Title={i.model}
          KMeter={i.milage}
        //    year={i.year}
        //    date={i.date}
           Location={i.location.address}
           src={i.image.[0]}
        //    onPress={()=>addFav(i)}
          />
        );
      
    })
}
 </HeadingSection>
 }
          </View>
    )
}
export default YourAds;