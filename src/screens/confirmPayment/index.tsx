import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomText from '../../component/customText';
import CustomLinearGradient from '../../component/customLinearGradient';
import { styles } from './styles';
import {
    buttonText,
    donePayment,
    orderMessage
} from '../../utils/constants/confirmPayment/confirmPayment';

const ConfirmPayment = () => {
    return (
        <LinearGradient
            colors={['#22343C', '#1F2E35']}
            style={{ flex: 1, justifyContent: 'center' }}>
            <View style={styles.mainContainer}>
                <TouchableOpacity>
                    <Image style={styles.icon}
                        source={require('../../../assets/images/Back_Button.png')} />
                </TouchableOpacity>
                <Image
                    style={styles.image}
                    source={require('../../../assets/images/Thumb.png')}
                />
                <CustomText
                    text={donePayment}
                    textStyle={styles.paymentSuccessText}
                />
                <CustomText
                    text={orderMessage}
                    textStyle={styles.detailText}
                />
                <CustomLinearGradient
                    colors={['#F04148', '#C20000']}
                    GradientButtonStyle={styles.gradientStyle}
                    text={buttonText}
                    textstyle={styles.gradientTextStyle}
                    onPress={() => console.log("Works!")}
                />
            </View>
        </LinearGradient>       
    )
}
export default ConfirmPayment