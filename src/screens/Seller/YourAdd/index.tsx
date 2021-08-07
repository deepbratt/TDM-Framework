import React, {FC, useEffect, useState } from 'react'
import { View,Text } from 'react-native';
import { ActivityIndicator } from 'react-native';
import CustomHeader from '../../../component/customHeader/CustomHeader';
import ProductBox from '../../../component/ProductBox';
import { openDrawer } from '../../../navigation';
import HeadingSection from '../../../section/CustomHeading/Heading';
import { COLOR } from '../../../Theme/Colors';
import { allCars } from '../../../utils/api';
import { YourAdsTitle } from '../../../utils/constants/HomeConstant';
import { addStyles } from './styles';

 const YourAds:FC = () => {
    const {loadingView} = addStyles;
    const [Productss, setProducts] = useState<any>([]);
    const [Loader, setLoader] = useState(false);
     useEffect(() => {
    fetchData()
    }, [])

    const fetchData = async () => {
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
            if (error.status === 401) return alert(error); 
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
     Productss.map((i:any)=>{
        return(
          <ProductBox 
          key={i._id} 
          Price={i.price} 
          Title={i.model}
          KMeter={i.milage}
           year={i.year}
        //    date={i.date}
           Location={i.location.address}
           src={typeof i.images === "string" ? i.images : null}
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