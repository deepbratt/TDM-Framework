import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomText from '../../component/customText';
import CustomLinearGradient from '../../component/customLinearGradient';
import { styles } from './styles';
import {
    PlaceIcon,
    AmountVector,
    BackIcon,
    BoxIcon,
    discountText,
    paiedLocation,
    payChatButton,
    payNowButton, 
    payPriceText
} from '../../utils/constants/payTokenAmount/PayTokenAmount';
import { COLOR } from '../../Theme/Colors';

const PayTokenAmount = () => {
    return (
        <LinearGradient
            colors={['#22343C', '#1F2E35']}
            style={styles.graidentView}>
            <View style={styles.mainContainer}>
                <TouchableOpacity>
                    <Image style={styles.icon}
                        source={BackIcon} />
                </TouchableOpacity>
                <CustomText
                    text={discountText}
                    textStyle={styles.headingText}
                />
                <Image style={styles.image}
                    source={BoxIcon} />
                <View style={styles.detailBox}>
                    <View style={styles.detailView}>
                        <Image style={styles.buttonIcon}
                            source={AmountVector}
                        />
                        <CustomText
                            text={payPriceText}
                            textStyle={styles.amountText}
                        />
                    </View>
                    <View style={styles.detailView}>
                        <Image style={styles.buttonIcon}
                            source={PlaceIcon}
                        />
                        <CustomText
                            text={paiedLocation}
                            textStyle={styles.locationText}
                        />
                    </View>
                </View>
                <CustomLinearGradient
                    colors={[COLOR.CarminePink, COLOR.primary]}
                    GradientButtonStyle={styles.gradientStyle}
                    text={payNowButton}
                    textstyle={styles.gradientTextStyle}
                    onPress={() => console.log("Works!")}
                />
                <CustomLinearGradient
                    colors={[COLOR.CarminePink, COLOR.primary]}
                    GradientButtonStyle={styles.gradientStyle1}
                    text={payChatButton}
                    textstyle={styles.gradientTextStyle}
                    onPress={() => console.log("Works!")}
                />
            </View>
        </LinearGradient>
    )
}
export default PayTokenAmount;