import React, { useState, useCallback, useRef } from "react";
import { Text, View, SafeAreaView, Image, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Carousel from "react-native-snap-carousel";
import CustomText from "../customText";

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
    title: "Toyota Yaris iA",
    text: "Text 1",
    src: require('../../../assets/images/car.jpg'),
  },
  {
    title: "Toyota Yaris iA",
    text: "Text 2",
      src: require('../../../assets/images/car1.jpeg'),


  },
  {
    title: "Toyota Yaris iA",
    text: "Text 3",
      src: require('../../../assets/images/car.jpg'),

    
  },
  
];

const CustomCarouselFeature: React.SFC<CustomCarouselProps> = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [carouselItems, setCarouselItems] = useState<ItemProps[]>(exampleItems);
  const ref = useRef(null);

  const renderItem = useCallback(({ item, index }: RenderItemProps) => {
    return (
      <View style={{ backgroundColor: "floralwhite", borderRadius: 5, width: wp('68%'), marginLeft: 5, }}>
        <Image style={{ width: wp('68%'), height: 200, borderRadius: 8, alignSelf: 'center' }}
          source={item.src}
            />
            <View style={{ width: wp('68%'), alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between',padding:wp('2%') }}>
                <CustomText
                    text={item.title}
                    textStyle={{fontSize:14,fontWeight:'700',color:'#212121'}}
                />
                <View style={{width: wp('10%'),backgroundColor: '#5AC8FA',borderRadius: 6}}>
                        <CustomText
                            text="Used"
                            textStyle={{fontSize: 12,fontWeight: '500',color: '#FFFFFF',textAlign: 'center'}}
                        />
                    </View>

            </View>
        <Text>{item.text}</Text>
      </View>
    );
  }, []);

  return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#E5E5E5", paddingTop: hp('3%') }}>
          <CustomText
              text="Featured Products"
              textStyle={{width:wp('95%'),alignSelf:'center',fontSize:18,fontWeight:'500',color:'#212121'}}
          />
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center",marginTop:hp('3%') }}>
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
const sytles = StyleSheet.create({
    brandStatusView: {
        
    },
})

export default CustomCarouselFeature;