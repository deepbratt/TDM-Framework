import React,{useState} from 'react';
import { View, Image,TouchableOpacity } from 'react-native';
import { styles } from './styles';
import CustomForgotButton from '../../component/customForgotButton';
import CustomText from '../../component/customText';
import BottomSheetComponent from '../../component/BottomSheet';
import {
    emailText,
    forgotDetail,
    forgotText,
    number,
    staric,
    viaEmail,
    viaSms
} from '../../utils/constants/resetPassword/resetPassword';

const ResetPassword = () => {
    const [visible, setVisible] = useState(false);
  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity>
                <Image style={styles.img}
                    source={require('../../../assets/images/Back_Button.png')} />
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
            <CustomForgotButton containerStyle={styles.buttonContainerStyle}
                onPress={toggleBottomNavigationView}
                imgStyle={styles.imageStyle}
                source={require('../../../assets/images/a.png')}
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
                onPress={toggleBottomNavigationView}
                imgStyle={styles.imageStyle1}
                source={require('../../../assets/images/email.png')}
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
            <BottomSheetComponent
                visible={visible}
                onBackButtonPress={toggleBottomNavigationView}
                onBackdropPress={toggleBottomNavigationView}
            >
            </BottomSheetComponent>
        </View>
    )
}
export default ResetPassword;
