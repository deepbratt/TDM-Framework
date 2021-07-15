import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomText from '../../component/customText';
import CustomLinearGradient from '../../component/customLinearGradient';
import { styles } from './styles';
import { payTokenAmountText, payTokenConfirmButton, payTokenLocationText, payTokenModelText } from '../../utils/constants/tokenAmount/tokenAmount';

const TokenAmount = () => {
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
                    source={require('../../../assets/images/car.jpg')}
                />
                <CustomText
                    text={payTokenAmountText}
                    textStyle={styles.modelText}
                />
                <View style={styles.detailView}>
                    <Image style={styles.buttonIcon}
                        source={require('../../../assets/images/Vector.png')}
                    />
                    <CustomText
                        text={payTokenModelText}
                        textStyle={styles.amountText}
                    />
                </View>
                <View style={styles.detailView}>
                    <Image style={styles.buttonIcon}
                        source={require('../../../assets/images/place.png')}
                    />
                    <CustomText
                        text={payTokenLocationText}
                        textStyle={styles.locationText}
                    />
                </View>
                <CustomLinearGradient
                    colors={['#F04148', '#C20000']}
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