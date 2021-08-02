import React,{useCallback} from 'react';
import { View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import CustomText from '../../component/customText';
import CustomMapView from '../../component/customMapView';
import CustomTopBar from '../../component/customTopTab';
import CustomCarouselSaim40 from '../../component/customCarousel';
import CustomAvatar from '../../component/Avatar';
import { styles } from './styles';
import CustomHeader from '../../component/customHeader/CustomHeader';
import {
    PlaceIcon,
    AmountVector,
    carPrice,
    company,
    DescriptionHead, 
    descriptionT, 
    distance,
    fuel,
    locationText,
    make,
    modelHeading,
    modelName,
    productLocation,
    productStatus,
    sellerText,
    subModel,
    userName,
    year,
    yearHeading,
    Items,
    FeatureItems,
    featureproductStatus,
    featureProductAmount,
    featureProductLocation,
    featureProductDistance,
    featureProductFuelType,
} from '../../utils/constants/addDetails/addDetails';
import { COLOR } from '../../Theme/Colors';

interface ItemProps {
    src: any;
    title: string;
    text: string;
  }
  interface RenderItemProps {
    item: ItemProps;
    index: number;
}
  
const AddDetails = () => {
    const ImagerenderItem = useCallback(({ item, index }: RenderItemProps) => {
    return (
      <View style={styles.imageRandomItemView}>
        <Image style={styles.RandomItemImage}
          source={item.src}
        />
      </View>
    );
    }, []);

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
        // <SafeAreaView style={styles.container}>
        //     <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
            <CustomHeader
                headerStyle={{ backgroundColor: COLOR.Cultured }}
                title="Add Details"
                color={COLOR.DarkCharcoal}
            />
                <View style={styles.imageCarouselView}>
                    <CustomCarouselSaim40
                        layout={"default"}
                        listItems={Items}
                        sliderWidth={wp("100%")}
                        itemWidth={wp('70%')}
                        renderItems={ImagerenderItem}
                    />
                </View>
                <View style={styles.amountMainContainer}>
                    <CustomText
                        text={carPrice}
                        textStyle={styles.amountText}
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.shareTouchableStyle}>
                            <Image style={styles.buttonIcon}
                                source={require('../../../assets/images/share.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.shareTouchableStyle}>
                            <Image style={styles.buttonIcon}
                                source={require('../../../assets/images/like.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.brandTextView}>
                    <CustomText
                        text={modelName}
                        textStyle={styles.brandNameText}
                    />
                    <View style={styles.brandStatusView}>
                        <CustomText
                            text={productStatus}
                            textStyle={styles.brandStatusText}
                        />
                    </View>
                </View>
                <View style={styles.productInfoMainView}>
                    <View style={styles.productInfoSubView}>
                        <View style={styles.infoView}>
                            <Image style={styles.buttonIcon}
                                source={PlaceIcon} />
                            <CustomText
                                text={productLocation}
                                textStyle={styles.infoText}
                            />
                        </View>
                        <View style={styles.infoView}>
                            <Image style={styles.buttonIcon}
                                source={require('../../../assets/images/road.png')} />
                            <CustomText
                                text={distance}
                                textStyle={styles.infoText}
                            />
                        </View>
                        <View style={styles.infoView}>
                            <Image style={styles.buttonIcon}
                                source={require('../../../assets/images/diesal.png')} />
                            <CustomText
                                text={fuel}
                                textStyle={styles.infoText}
                            />
                        </View>
                    </View>
                    <View style={styles.productInfoSubView}>
                        <View style={styles.infoView}>
                            <CustomText
                                text={company}
                                textStyle={styles.infoText}
                            />
                            <CustomText
                                text={make}
                               textStyle={styles.infoHeading}
                            />
                        </View>
                        <View style={styles.infoView}>
                            <CustomText
                                text= {subModel}
                                textStyle={styles.infoText}
                            />
                            <CustomText
                                text={modelHeading}
                                textStyle={styles.infoHeading}
                            />
                        </View>
                        <View style={styles.infoView}>
                            <CustomText
                                text={year}
                                textStyle={styles.infoText}
                            />
                            <CustomText
                                text={yearHeading}
                                textStyle={styles.infoHeading}
                            />
                        </View>
                    </View>
                </View>
                <CustomText
                    text={DescriptionHead}
                    textStyle={styles.descriptionHeading}
                />
                <CustomText
                    text={descriptionT}
                    textStyle={styles.descriptionText}
                />
                <View style={styles.profileBorderView}>
                    <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
                        <CustomText
                            text={sellerText}
                            textStyle={styles.profileHeading}
                        />
                        <View style={styles.profileMainView}>
                            <View style={styles.avatarView}>
                                <CustomAvatar
                                    overlayContainerStyle={{ backgroundColor: 'gray' }}
                                    size={hp('7%')}
                                    rounded
                                    onPress={() => console.log("Works!")}
                                    activeOpacity={0.8}
                                    source={require('../../../assets/images/Base.png')}
                                    imageProps={{resizeMode:'contain',margin:15}}
                                />
                            </View>
                            <CustomText
                                text={userName}
                                textStyle={styles.userNameText}
                            />
                            <Image style={styles.buttonIcon}
                                source={require('../../../assets/images/check.png')} />
                        </View>
                    </View>
                </View>
                <CustomText
                    text={locationText}
                    textStyle={styles.AddPostedText}
                />
                <CustomMapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.mapStyle}
                />
            <View style={styles.borderView}></View>
            <View style={{height:hp('48%')}}>
                <CustomTopBar/>
            </View>
                <CustomText
                    text="Feature Product"
                    textStyle={styles.FeatureProductText}
                />
                <CustomCarouselSaim40
                    layout={"default"}
                    listItems={FeatureItems}
                    sliderWidth={wp("100%")}
                    itemWidth={wp('70%')}
                    renderItems={FeaturerenderItem}
                />
            {/* </ScrollView>
        </SafeAreaView> */}
            </View>
    )
}

export default AddDetails;