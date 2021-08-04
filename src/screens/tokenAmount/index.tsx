import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomText from '../../component/customText';
import CustomLinearGradient from '../../component/customLinearGradient';
import { styles } from './styles';
import {
    payTokenAmountText,
    payTokenConfirmButton,
    payTokenLocationText,
    payTokenModelText,
    BackIcon,
    AmountVector,
    PlaceIcon
} from '../../utils/constants/tokenAmount/tokenAmount';
import { COLOR } from '../../Theme/Colors';

const TokenAmount = () => {
    return (
        <LinearGradient
            colors={['#22343C', '#1F2E35']}
            style={styles.graidentView}>
            <View style={styles.mainContainer}>
                <TouchableOpacity>
                    <Image style={styles.icon}
                        source={BackIcon} />
                </TouchableOpacity>
                <Image
                    style={styles.image}
                    source={require('../../../assets/images/car.jpg')}
                />
                <CustomText
                    text={payTokenAmountText}
                    textStyle={styles.modelText}
                />
                <View style={styles.detailView}>
                    <Image style={styles.buttonIcon}
                        source={AmountVector}
                    />
                    <CustomText
                        text={payTokenModelText}
                        textStyle={styles.amountText}
                    />
                </View>
                <View style={styles.detailView}>
                    <Image style={styles.buttonIcon}
                        source={PlaceIcon}
                    />
                    <CustomText
                        text={payTokenLocationText}
                        textStyle={styles.locationText}
                    />
                </View>
                <CustomLinearGradient
                    colors={['#F04148', COLOR.primary]}
                    GradientButtonStyle={styles.gradientStyle}
                    text={payTokenConfirmButton}
                    textstyle={styles.gradientTextStyle}
                    onPress={() => console.log("Works!")}
                />
            </View>
        </LinearGradient>
    )
}
export default TokenAmount