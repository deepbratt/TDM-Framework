import React, {  useCallback } from "react";

import { Image} from 'react-native';
import { Text, View } from 'react-native';
import CustomCarousel from "../../component/CustomTabs/carousel";
import { Items } from "../../utils/constants/HomeConstant";
import { Style } from "./style";




interface ItemProps {
    src: any;
    title: string;
    text: string;

  }
  interface RenderItemProps {
    item: ItemProps;
    index: number;
  }
export default function Hashback() {
const { container,images,titleText,detail,rate,rating}=Style;
  const renderItem =useCallback(({ item, index }: RenderItemProps) => {
    return (
      <View
        style={container}
      >
        <Image style={images}
          source={item.src} />
        <Text style={titleText}>{item.title}</Text>
        <Text style={detail}>{item.text}</Text>
        {/* <View style={{flexDirection:"row",alignItems:"center",marginVertical:2}}>
          <Image style={rate} fadeDuration={0} source={require('../../../assets/images/slider/stars.png')}/>
          <Text style={rating}>(3.8)</Text>
        </View> */}
      </View>
    );
  }, []);
  return (
   
      <CustomCarousel 
       layout="default"
       autoplay={true}
       loop={true}
       autoplayDelay={2000}
       listItems={Items}
       sliderWidth={ 532}
       itemWidth={177}
       inactiveSlideOpacity={1}
       inactiveSlideScale={1}
       renderItems={renderItem}      
      />
    
  )}


