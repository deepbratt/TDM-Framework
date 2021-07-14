import React, { useState, useCallback, useRef } from "react";
import { Text, View, SafeAreaView, Image } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Carousel from "react-native-snap-carousel";

interface ItemProps {
  title: string;
  text: string;
  src:any
}

interface CustomCarouselProps {}
interface RenderItemProps {
  item: ItemProps;
  index: number;
}

const exampleItems = [
  {
    title: "Item 1",
    text: "Text 1",
    src: require('../../../assets/images/car.jpg'),
  },
  {
    title: "Item 2",
    text: "Text 2",
      src: require('../../../assets/images/car1.jpeg'),


  },
  {
    title: "Item 3",
    text: "Text 3",
      src: require('../../../assets/images/car.jpg'),

    
  },
  
];

const CustomCarousel: React.SFC<CustomCarouselProps> = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [carouselItems, setCarouselItems] = useState<ItemProps[]>(exampleItems);
  const ref = useRef(null);

  const renderItem = useCallback(({ item, index }: RenderItemProps) => {
    return (
      <View style={{ backgroundColor: "floralwhite", borderRadius: 5, width: wp('68%'), marginLeft: 5, }}>
        <Image style={{ width: wp('68%'), height: 200, borderRadius: 8, alignSelf: 'center' }}
          source={item.src}
        />
        {/* <Text style={{ fontSize: 30,backgroundColor:'red' }}>{item.title}</Text>
        <Text>{item.text}</Text> */}
      </View>
    );
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E5E5E5", paddingTop: 50 }}>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", }}>
        <Carousel
          layout={"default"}
          ref={ref}
          data={carouselItems}
          sliderWidth={wp("70%")}
          itemWidth={wp('70%')}
          renderItem={renderItem}
          onSnapToItem={(index: number) => setActiveIndex(index)}
        />
      </View>
    </SafeAreaView>
  );
};

export default CustomCarousel;