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

const CarDetails = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View>
                    <CustomCarousel/>
                </View>
                <View style={styles.amountMainContainer}>
                    <CustomText
                        text='Rs. 50 lakh'
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
                        text='Toyota Yaris iA'
                        textStyle={styles.brandNameText}
                    />
                    <View style={styles.brandStatusView}>
                        <CustomText
                            text="Used"
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
                                text="Islamabad"
                                textStyle={styles.infoText}
                            />
                        </View>
                        <View style={styles.infoView}>
                            <Image style={styles.buttonIcon}
                                source={require('../../../assets/images/road.png')} />
                            <CustomText
                                text="47392 KM"
                                textStyle={styles.infoText}
                            />
                        </View>
                        <View style={styles.infoView}>
                            <Image style={styles.buttonIcon}
                                source={require('../../../assets/images/diesal.png')} />
                            <CustomText
                                text="Diesel"
                                textStyle={styles.infoText}
                            />
                        </View>
                    </View>
                    <View style={styles.productInfoSubView}>
                        <View style={styles.infoView}>
                            <CustomText
                                text="Toyota"
                                textStyle={styles.infoText}
                            />
                            <CustomText
                                text="Make"
                               textStyle={styles.infoHeading}
                            />
                        </View>
                        <View style={styles.infoView}>
                            <CustomText
                                text="Yaris iA"
                                textStyle={styles.infoText}
                            />
                            <CustomText
                                text="Model"
                                textStyle={styles.infoHeading}
                            />
                        </View>
                        <View style={styles.infoView}>
                            <CustomText
                                text="2018"
                                textStyle={styles.infoText}
                            />
                            <CustomText
                                text="Year"
                                textStyle={styles.infoHeading}
                            />
                        </View>
                    </View>
                </View>
                <CustomText
                    text="Description:"
                    textStyle={styles.descriptionHeading}
                />
                <CustomText
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    textStyle={styles.descriptionText}
                />
                <View style={styles.dealMainContainer}>
                    <View style={styles.dealView}>
                        <CustomText
                            text="Pay 2 lac Best Match Amount"
                            textStyle={styles.dealText}
                        />
                    </View>
                    <View style={styles.comparisonButtonMainView}>
                        <TouchableOpacity style={styles.comparisonTouchable}>
                            <Image style={styles.buttonIcon}
                                source={require('../../../assets/images/layer.png')} />
                            <CustomText
                                text="Compare"
                                textStyle={styles.comparisonButtonText}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.comparisonTouchable}>
                            <Image style={styles.buttonIcon}
                                source={require('../../../assets/images/safety-car.png')} />
                            <CustomText
                                text="Shortlist"
                                textStyle={styles.comparisonButtonText}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.profileBorderView}>
                    <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
                        <CustomText
                            text="Seller: Indivisual Seller"
                            textStyle={styles.profileHeading}
                        />
                        <View style={styles.profileMainView}>
                            <View style={styles.avatarView}>
                                <CustomAvatar
                                    overlayContainerStyle={{ backgroundColor: 'gray' }}
                                    size={hp('7%')}
                                    rounded
                                    title="PIC"
                                    onPress={() => console.log("Works!")}
                                    activeOpacity={0.8}
                                />
                            </View>
                            <CustomText
                                text="Alice Smith"
                                textStyle={styles.userNameText}
                            />
                            <Image style={styles.buttonIcon}
                                source={require('../../../assets/images/check.png')} />
                        </View>
                    </View>
                </View>
                <CustomText
                    text="Ad Posted At"
                    textStyle={{width:wp('95%'),alignSelf:'center',fontSize:14,fontWeight:'700'}}
                />
                <CustomMapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.mapStyle}
                />
                <View style={styles.borderView}>
                    <CustomTopBar
                        labelStyle={{ fontSize: 12, fontWeight: '500', textTransform: 'none', color: '#313131' }}
                        style={{ backgroundColor: '#FFFFFF' }}
                        activeTintColor="#62ADF4"
                        indicatorStyle={{ height: 3, alignSelf: 'center', }}
                        name="Specification"
                        component={Specification}
                        name1="Features"
                        component1={Features}
                        tabBarOptions={{}}
                    />
                </View>
                
            </ScrollView>
        </SafeAreaView>
    )
}

export default CarDetails;