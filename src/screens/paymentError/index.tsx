import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomText from '../../component/customText';
import CustomLinearGradient from '../../component/customLinearGradient';
import { styles } from './styles';
import {
    closeIcon,
    contactButton,
    detailErrorMessage,
    ErrorMessage,
    tryAgainButton
} from '../../utils/constants/paymentError/paymentError';
import { COLOR } from '../../Theme/Colors';

const PaymentError = () => {
    return (
        <LinearGradient
            colors={['#22343C', '#1F2E35']}
            style={styles.graidentView}>
            <View style={styles.mainContainer}>
                <TouchableOpacity>
                    <Image style={styles.icon}
                        source={closeIcon} />
                </TouchableOpacity>
                <CustomText
                    text={ErrorMessage}
                    textStyle={styles.paymentErrorText}
                />
                <CustomText
                    text={detailErrorMessage}
                    textStyle={styles.detailText}
                />
                <CustomLinearGradient
                    colors={[COLOR.CarminePink, COLOR.primary]}
                    GradientButtonStyle={styles.gradientStyle}
                    text={tryAgainButton}
                    textstyle={styles.gradientTextStyle}
                    onPress={() => console.log("Works!")}
                />
                <TouchableOpacity style={styles.TouchableStyle}>
                    <CustomText
                        text={contactButton}
                        textStyle={styles.supportText}
                    />
                </TouchableOpacity>
            </View>
        </LinearGradient>       
    )
}
export default PaymentError