import React,{useState} from 'react';
import { View, Image,TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';
import CustomForgotButton from '../../component/customForgotButton';
import CustomText from '../../component/customText';
import {
    emailText,
    forgotDetail,
    forgotText,
    number,
    staric,
    viaEmail,
    viaSms,
    BackIcon,
    PhoneIcon,
    EmailIcon
} from '../../utils/constants/resetPassword/resetPassword';

const ResetPassword = () => {
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity>
                <Image style={styles.img}
                    source={BackIcon} />
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <CustomText textStyle={styles.text}
                    text={forgotText}>
                </CustomText>
            </View>
            <View style={styles.textContainer1}>
                <CustomText textStyle={styles.text1}
                    text={forgotDetail}>
                </CustomText>
            </View>
            <View style={{marginBottom:130}}>
            <CustomForgotButton containerStyle={styles.buttonContainerStyle}
                imgStyle={styles.imageStyle}
                source={PhoneIcon}
                text1={viaSms}
                textStyle1={styles.textStyleOne}
                textContainerStyle={{ flexDirection: 'row', justifyContent: 'center' }}
                text2={staric}
                textStyle2={styles.textStyleTwo}
                text3={staric}
                textStyle3={styles.textStyleTwo}
                text4={number}
                textStyle4={styles.textStyleThree}
            >
            </CustomForgotButton>
            <CustomForgotButton containerStyle={styles.buttonContainerStyle1}
                imgStyle={styles.imageStyle1}
                source={EmailIcon}
                text1={viaEmail}
                textStyle1={styles.textStyleOne}
                textContainerStyle={{ flexDirection: 'row', justifyContent: 'center' }}
                text2={staric}
                textStyle2={styles.textStyleTwo}
                text3={staric}
                textStyle3={styles.textStyleTwo}
                text4={emailText}
                textStyle4={styles.textStyleThree}
            >
            </CustomForgotButton>
            </View>
        </View>
    )
}
export default ResetPassword;
