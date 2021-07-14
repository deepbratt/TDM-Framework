import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomText from '../../component/customText';

const Specification = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.mainContaier}>
                    <View style={styles.infoView}>
                        <View style={{flexDirection:'column',justifyContent:'flex-start'}}>
                        <CustomText
                            text="Engine"
                            textStyle={styles.headingText}
                            />
                        </View>
                        <CustomText
                            text="2998 cc, 6 Cylinders Inline"
                            textStyle={styles.subText}
                        />
                    </View>
                    <View style={styles.borderView}>
                    </View>
                </View>

                <View style={styles.mainContaier}>
                    <View style={styles.infoView}>
                        <View style={{flexDirection:'column',justifyContent:'flex-start'}}>
                        <CustomText
                            text="Fuel Type"
                            textStyle={styles.headingText}
                            />
                        </View>
                        <CustomText
                            text="Petrol"
                            textStyle={styles.subText}
                        />
                    </View>
                    <View style={styles.borderView}>
                    </View>
                </View>

                <View style={styles.mainContaier}>
                    <View style={styles.infoView}>
                        <View style={{flexDirection:'column',justifyContent:'flex-start'}}>
                        <CustomText
                            text="MaxPower (bhp@rpm)"
                            textStyle={styles.headingText}
                            />
                        </View>
                        <CustomText
                            text="375 bhp @ 5000 rpm"
                            textStyle={styles.subText}
                        />
                    </View>
                    <View style={styles.borderView}>
                    </View>
                </View>

                <View style={styles.mainContaier}>
                    <View style={styles.infoView}>
                        <View style={{flexDirection:'column',justifyContent:'flex-start'}}>
                        <CustomText
                            text="Mileage (RAI) (kmpl)"
                            textStyle={styles.headingText}
                            />
                        </View>
                        <CustomText
                            text="11.29"
                            textStyle={styles.subText}
                        />
                    </View>
                    <View style={styles.borderView}>
                    </View>
                </View>

                <View style={styles.mainContaier}>
                    <View style={styles.infoView}>
                        <View style={{flexDirection:'column',justifyContent:'flex-start'}}>
                        <CustomText
                            text="Driving Range (Km)"
                            textStyle={styles.headingText}
                            />
                        </View>
                        <CustomText
                            text="587.08"
                            textStyle={styles.subText}
                        />
                    </View>
                    <View style={styles.borderView}>
                    </View>
                </View>

                <View style={styles.mainContaier}>
                    <View style={styles.infoView}>
                        <View style={{flexDirection:'column',justifyContent:'flex-start'}}>
                        <CustomText
                            text="Drivetrain"
                            textStyle={styles.headingText}
                            />
                        </View>
                        <CustomText
                            text="RWD"
                            textStyle={styles.subText}
                        />
                    </View>
                    <View style={styles.borderView}>
                    </View>
                </View>
                
                
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: '#E5E5E5',
        marginBottom:wp('3%')
    },
    mainContaier: {
        width: wp('95%'),
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    infoView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    headingText: {
        fontSize: 14,
        width:88,
        fontWeight: '400',
        color: '#212121',
        marginTop: hp('2%'),
    },
    subText: {
        fontSize: 14,
        fontWeight: '400',
        width:193,
        color: '#979797',
        paddingTop: hp('2%'),
        alignSelf:'center',
    },
    borderView: {
        width: wp('100%'),
        borderColor: '#F3F3F3',
        borderWidth: 0.8,
        marginTop: hp('1%')
    }
})
export default Specification;