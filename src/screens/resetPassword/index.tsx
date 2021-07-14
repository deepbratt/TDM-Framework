import React,{useState} from 'react';
import { View, Image,TouchableOpacity } from 'react-native';
import { styles } from './styles';
import CustomForgotButton from '../../component/customForgotButton';
import CustomText from '../../component/customText';
import { BottomSheet } from 'react-native-btr';
import CustomOTP from '../../component/customOTP';
import BottomSheetComponent from '../../component/BottomSheet';

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
                    text={"Forgot Your Password"}>
                </CustomText>
            </View>
            <View style={styles.textContainer1}>
                <CustomText textStyle={styles.text1}
                    text={"Select which contact details should use to reset your password "}>
                </CustomText>
            </View>
            <CustomForgotButton containerStyle={styles.buttonContainerStyle}
                onPress={toggleBottomNavigationView}
                imgStyle={styles.imageStyle}
                source={require('../../../assets/images/a.png')}
                text1={"Via SMS"}
                textStyle1={styles.textStyleOne}
                textContainerStyle={{ flexDirection: 'row', justifyContent: 'center' }}
                text2={"****"}
                textStyle2={styles.textStyleTwo}
                text3={"****"}
                textStyle3={styles.textStyleTwo}
                text4={"0345"}
                textStyle4={styles.textStyleThree}
            >
            </CustomForgotButton>
            <CustomForgotButton containerStyle={styles.buttonContainerStyle1}
                onPress={toggleBottomNavigationView}
                imgStyle={styles.imageStyle1}
                source={require('../../../assets/images/email.png')}
                text1={"Via Email"}
                textStyle1={styles.textStyleOne}
                textContainerStyle={{ flexDirection: 'row', justifyContent: 'center' }}
                text2={"****"}
                textStyle2={styles.textStyleTwo}
                text3={"**al"}
                textStyle3={styles.textStyleTwo}
                text4={"@gmail.com"}
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
