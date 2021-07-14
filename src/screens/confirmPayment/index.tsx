import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomText from '../../component/customText';
import CustomLinearGradient from '../../component/customLinearGradient';
import { styles } from './styles';

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
                    text="Payment Successful!"
                    textStyle={styles.paymentSuccessText}
                />
                <CustomText
                    text="Your order was placed successfully. We’re working hard to get it to you soon."
                    textStyle={styles.detailText}
                />
                <CustomLinearGradient
                    colors={['#F04148', '#C20000']}
                    GradientButtonStyle={styles.gradientStyle}
                    text="Chat With Seller"
                    textstyle={styles.gradientTextStyle}
                // onPress={}
                />
            </View>
        </LinearGradient>       
    )
}
export default ConfirmPayment