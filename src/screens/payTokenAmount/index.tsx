import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomText from '../../component/customText';
import CustomLinearGradient from '../../component/customLinearGradient';
import { styles } from './styles';
import {
    discountText,
    paiedLocation,
    payChatButton,
    payNowButton, 
    payPriceText
} from '../../utils/constants/payTokenAmount/PayTokenAmount';

const PayTokenAmount = () => {
    return (
        <LinearGradient
            colors={['#22343C', '#1F2E35']}
            style={{ flex: 1, justifyContent: 'center' }}>
            <View style={styles.mainContainer}>
                <TouchableOpacity>
                    <Image style={styles.icon}
                        source={require('../../../assets/images/Back_Button.png')} />
                </TouchableOpacity>
                <CustomText
                    text={discountText}
                    textStyle={styles.headingText}
                />
                <Image style={styles.image}
                    source={require('../../../assets/images/Box.png')} />
                <View style={styles.detailBox}>
                    <View style={styles.detailView}>
                        <Image style={styles.buttonIcon}
                            source={require('../../../assets/images/Vector.png')}
                        />
                        <CustomText
                            text={payPriceText}
                            textStyle={styles.amountText}
                        />
                    </View>
                    <View style={styles.detailView}>
                        <Image style={styles.buttonIcon}
                            source={require('../../../assets/images/place.png')}
                        />
                        <CustomText
                            text={paiedLocation}
                            textStyle={styles.locationText}
                        />
                    </View>
                </View>
                <CustomLinearGradient
                    colors={['#F04148', '#C20000']}
                    GradientButtonStyle={styles.gradientStyle}
                    text={payNowButton}
                    textstyle={styles.gradientTextStyle}
                    onPress={() => console.log("Works!")}
                />
                <CustomLinearGradient
                    colors={['#F04148', '#C20000']}
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