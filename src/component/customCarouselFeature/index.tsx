import React, { useState, useCallback, useRef } from "react";
import { Text, View, SafeAreaView, Image, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styles } from './styles';
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
      <View style={styles.mainView}>
        <Image style={styles.productImage}
          source={item.src}
            />
        <View style={styles.nameStatusContainer}>
          <CustomText
            text={item.title}
            textStyle={styles.titleText}
          />
          <View style={styles.statusSubView}>
            <CustomText
              text="Used"
              textStyle={styles.statusText}
            />
          </View>
        </View>
        <View style={styles.priceContainer}>
          <Image style={styles.priceIcon}
            source={require('../../../assets/images/Vector.png')}
          />
          <CustomText
            text="$1,50,000 "
            textStyle={styles.priceText}
          />
        </View>
        <View style={styles.productInfoSubView}>
          <View style={styles.infoView}>
            <Image style={styles.buttonIcon}
              source={require('../../../assets/images/place.png')} />
            <CustomText
              text={"Islamabad"}
              textStyle={styles.infoText}
            />
          </View>
          <View style={styles.infoView}>
            <Image style={styles.buttonIcon}
              source={require('../../../assets/images/road.png')} />
            <CustomText
              text={"1200 KM"}
              textStyle={styles.infoText}
            />
          </View>
          <View style={styles.infoView}>
            <Image style={styles.buttonIcon}
              source={require('../../../assets/images/diesal.png')} />
            <CustomText
              text={"Diesel"}
              textStyle={styles.infoText}
            />
          </View>
        </View>
      </View>
    );
  }, []);

  return (
      <SafeAreaView style={styles.safeAreaContainer}>
          <CustomText
              text="Featured Products"
              textStyle={styles.featureHeadingText}
          />
      <View style={styles.carouselView}>
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

export default CustomCarouselFeature;