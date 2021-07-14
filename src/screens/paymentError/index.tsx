import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomText from '../../component/customText';
import CustomLinearGradient from '../../component/customLinearGradient';
import { styles } from './styles';

const PaymentError = () => {
    return (
        <LinearGradient
            colors={['#22343C', '#1F2E35']}
            style={{ flex: 1, justifyContent: 'center' }}>
            <View style={styles.mainContainer}>
                <TouchableOpacity>
                    <Image style={styles.icon}
                        source={require('../../../assets/images/close.png')} />
                </TouchableOpacity>
                <CustomText
                    text="Payment Error!"
                    textStyle={styles.paymentErrorText}
                />
                <CustomText
                    text="Something went wrong with the payment. Try again or contact support."
                    textStyle={styles.detailText}
                />
                <CustomLinearGradient
                    colors={['#F04148', '#C20000']}
                    GradientButtonStyle={styles.gradientStyle}
                    text="Try Again"
                    textstyle={styles.gradientTextStyle}
                // onPress={}
                />
                <TouchableOpacity style={styles.TouchableStyle}>
                    <CustomText
                        text="Contact Support"
                        textStyle={styles.supportText}
                    />
                </TouchableOpacity>
            </View>
        </LinearGradient>       
    )
}
export default PaymentError