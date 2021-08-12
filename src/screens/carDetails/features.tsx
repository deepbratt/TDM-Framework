import React, { useCallback } from 'react';
import { View, StyleSheet,Text, Image,TouchableOpacity } from 'react-native';
import CustomCarouselSaim40 from '../../component/customCarousel';
import CustomText from '../../component/customText';
import { AmountVector, FeatureItems, featureProductAmount, featureProductDistance, featureProductFuelType, featureProductLocation, featureproductStatus, PlaceIcon } from '../../utils/constants/carDetails/carDetails';
import {styles} from './styles'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
interface ItemProps {
    src: any;
    title: string;
    text: string;
  }
interface RenderItemProps {
    item: ItemProps;
    index: number;
}

   const Features = () => {
    const FeaturerenderItem = useCallback(({ item, index }: RenderItemProps) => {
        return (
            <View style={styles.CarouselFeaturemainView}>
                <Image style={styles.CarouselFeatureproductImage}
                    source={item.src}
                />
                <View style={styles.CarouselFeaturenameStatusContainer}>
                    <CustomText
                        text={item.title}
                        textStyle={styles.CarouselFeaturetitleText}
                    />
                    <View style={{flexDirection:'row'}}>
                        <View style={styles.CarouselFeaturestatusSubView}>
                        <CustomText
                            text={featureproductStatus}
                            textStyle={styles.CarouselFeaturestatusText}
                        />
                    </View>
                    <TouchableOpacity style={styles.CarouselFeatureshareTouchableStyle}>
                        <Image style={styles.CarouselFeaturefavouriteButton}
                            source={require('../../../assets/images/like.png')} />
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.CarouselFeaturepriceContainer}>
                    <Image style={styles.CarouselFeaturepriceIcon}
                        source={AmountVector}
                    />
                    <CustomText
                        text={featureProductAmount}
                        textStyle={styles.CarouselFeaturepriceText}
                    />
                </View>
                <View style={styles.CarouselFeatureproductInfoSubView}>
                    <View style={styles.CarouselFeatureinfoView}>
                        <Image style={styles.CarouselFeaturebuttonIcon}
                            source={PlaceIcon} />
                        <CustomText
                            text={featureProductLocation}
                            textStyle={styles.CarouselFeatureinfoText}
                        />
                    </View>
                    <View style={styles.CarouselFeatureinfoView}>
                        <Image style={styles.CarouselFeaturebuttonIcon}
                            source={require('../../../assets/images/road.png')} />
                        <CustomText
                            text={featureProductDistance}
                            textStyle={styles.CarouselFeatureinfoText}
                        />
                    </View>
                    <View style={styles.CarouselFeatureinfoView}>
                        <Image style={styles.CarouselFeaturebuttonIcon}
                            source={require('../../../assets/images/diesal.png')} />
                        <CustomText
                            text={featureProductFuelType}
                            textStyle={styles.CarouselFeatureinfoText}
                        />
                    </View>
                </View>
            </View>
            );
        }, []);
      
        return (
            <CustomCarouselSaim40
                    layout={"default"}
                    listItems={FeatureItems}
                    sliderWidth={wp("100%")}
                    itemWidth={wp('70%')}
                    renderItems={FeaturerenderItem}
                />
        )
    }
    export default Features;