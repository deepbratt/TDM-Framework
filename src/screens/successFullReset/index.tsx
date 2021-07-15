import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import CustomText from '../../component/customText';
import CustomLinearGradient from '../../component/customLinearGradient';
import {
    loginButtonText,
    successFull,
    successFUllResetDetails,
} from '../../utils/constants/successFullReset/successFullReset';

const SuccessFullReset = () => {
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity>
                <Image style={styles.img}
                    source={require('../../../assets/images/Back_Button.png')} />
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <CustomText textStyle={styles.text}
                    text={successFull}>
                </CustomText>
            </View>
            <View style={styles.textContainer1}>
                <CustomText textStyle={styles.text1}
                    text={successFUllResetDetails}>
                </CustomText>
            </View>
            <CustomLinearGradient
                colors={['#F04148', '#C20000']}
                GradientButtonStyle={styles.gradientStyle}
                text={loginButtonText}
                textstyle={styles.gradientTextStyle}
                imgStyle={styles.gradientImageStyle}
                source={require('../../../assets/images/Shape.png')}
                onPress={() => console.log("Works!")}
            />
        </View>
    )
}
export default SuccessFullReset;