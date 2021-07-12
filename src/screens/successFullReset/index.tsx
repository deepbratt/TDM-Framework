import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import CustomText from '../../component/customText';
import CustomLinearGradient from '../../component/customLinearGradient';

const SuccessFullReset = () => {
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity>
                <Image style={styles.img}
                    source={require('../../../assets/images/Back_Button.png')} />
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <CustomText textStyle={styles.text}
                    text={"Password Reset Successfully"}>
                </CustomText>
            </View>
            <View style={styles.textContainer1}>
                <CustomText textStyle={styles.text1}
                    text={"Select which contact details should use to reset your password "}>
                </CustomText>
            </View>
            <CustomLinearGradient
                colors={['#F04148', '#C20000']}
                GradientButtonStyle={styles.gradientStyle}
                text="LogIn"
                textstyle={styles.gradientTextStyle}
                imgStyle={styles.gradientImageStyle}
                source={require('../../../assets/images/Shape.png')}
                // onPress={}
            />
        </View>
    )
}
export default SuccessFullReset;