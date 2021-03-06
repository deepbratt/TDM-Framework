import React from 'react'
import { View ,Text} from 'react-native';
import CustomHeader from '../../component/customHeader/CustomHeader';
import ProductBox from '../../component/ProductBox';
import { openDrawer } from '../../navigation';
import HeadingSection from '../../section/CustomHeading/Heading';
import { COLOR } from '../../Theme/Colors';
import { orderList } from '../../utils/constants/CarsText';

 const Orders = () => {
    return (
       <View>
          <CustomHeader headerStyle={{  backgroundColor:COLOR.Cultured}}
           color={COLOR.DarkCharcoal} isHome={true} title="Your Orders" 
          onPress={()=>openDrawer()} />
  <HeadingSection>
{
    orderList.map((i)=>{
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
           onPress={()=>console.log("press")}
          />

        );
    })
}
             </HeadingSection>

          
       </View> 
    )
}
export default Orders;
