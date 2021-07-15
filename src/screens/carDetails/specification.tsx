import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomText from '../../component/customText';
import {
    engineHead,
    specificationDriveDetails,
    specificationDriveHead,
    specificationEngineDetails,
    specificationFuelDetails,
    specificationFuelHead,
    specificationMileageDetails,
    specificationMileageHead,
    specificationPowerDetails,
    specificationPowerhead,
    specificationRangeDetails,
    specificationRangeHead
} from '../../utils/constants/specification/specification';

const Specification = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.mainContaier}>
                    <View style={styles.infoView}>
                        <View style={{flexDirection:'column',justifyContent:'flex-start'}}>
                        <CustomText
                            text={engineHead}
                            textStyle={styles.headingText}
                            />
                        </View>
                        <CustomText
                            text={specificationEngineDetails}
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
                            text={specificationFuelHead}
                            textStyle={styles.headingText}
                            />
                        </View>
                        <CustomText
                            text={specificationFuelDetails}
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
                            text={specificationPowerhead}
                            textStyle={styles.headingText}
                            />
                        </View>
                        <CustomText
                            text={specificationPowerDetails}
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
                            text={specificationMileageHead}
                            textStyle={styles.headingText}
                            />
                        </View>
                        <CustomText
                            text={specificationMileageDetails}
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
                            text={specificationRangeHead}
                            textStyle={styles.headingText}
                            />
                        </View>
                        <CustomText
                            text={specificationRangeDetails}
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
                            text={specificationDriveHead}
                            textStyle={styles.headingText}
                            />
                        </View>
                        <CustomText
                            text={specificationDriveDetails}
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