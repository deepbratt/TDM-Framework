import React from 'react';
import { View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import CustomText from '../../component/customText';
import CustomMapView from '../../component/customMapView';
import CustomTopBar from '../../component/customTopTab';
import Specification from './specification';
import Features from './features';
import CustomCarousel from '../../component/customCarousel';
import CustomAvatar from '../../component/Avatar';
import {styles} from './styles'
import CustomCarouselFeature from '../../component/customCarouselFeature';
import {
    carPrice,
    company,
    compareText,
    DescriptionHead, 
    descriptionT, 
    distance,
    fuel,
    locationText,
    make,
    modelHeading,
    modelName,
    payAmount,
    productLocation,
    productStatus,
    sellerText,
    shortListText,
    subModel,
    userName,
    year,
    yearHeading
} from '../../utils/constants/carDetails/carDetails';

const CarDetails = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View>
                    <CustomCarousel/>
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
                                source={require('../../../assets/images/place.png')} />
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
                <View style={styles.dealMainContainer}>
                    <View style={styles.dealView}>
                        <CustomText
                            text={payAmount}
                            textStyle={styles.dealText}
                        />
                    </View>
                    <View style={styles.comparisonButtonMainView}>
                        <TouchableOpacity style={styles.comparisonTouchable}>
                            <Image style={styles.buttonIcon}
                                source={require('../../../assets/images/layer.png')} />
                            <CustomText
                                text={compareText}
                                textStyle={styles.comparisonButtonText}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.comparisonTouchable}>
                            <Image style={styles.buttonIcon}
                                source={require('../../../assets/images/safety-car.png')} />
                            <CustomText
                                text={shortListText}
                                textStyle={styles.comparisonButtonText}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
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
                <View style={styles.borderView}>
                    <CustomTopBar
                        labelStyle={styles.TopBarLabelStyle}
                        style={{ backgroundColor: '#FFFFFF' }}
                        activeTintColor="#62ADF4"
                        indicatorStyle={styles.TopBarIndicatorStyle}
                        name="Specification"
                        component={Specification}
                        name1="Features"
                        component1={Features}
                    />
                </View>
                <CustomCarouselFeature/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CarDetails;