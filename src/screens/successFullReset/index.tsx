import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import CustomText from '../../component/customText';
import CustomLinearGradient from '../../component/customLinearGradient';
import {
    loginButtonText,
    successFull,
    successFUllResetDetails,
    BackIcon,
    ForwardIcon
} from '../../utils/constants/successFullReset/successFullReset';
import { useHistory } from 'react-router';
import { COLOR } from '../../Theme/Colors';

const SuccessFullReset = () => {
    const history=useHistory();
    const handleClick=()=>{
        history.goBack();
    }
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={handleClick}>
                <Image style={styles.img}
                    source={BackIcon} />
            </TouchableOpacity>
                <CustomText textStyle={styles.text}
                    text={successFull}>
                </CustomText>
                <CustomText textStyle={styles.text1}
                    text={successFUllResetDetails}>
                </CustomText>
            <CustomLinearGradient
                linkTo={"/SignIn"}
                colors={[COLOR.CarminePink, COLOR.primary]}
                GradientButtonStyle={styles.gradientStyle}
                text={loginButtonText}
                textstyle={styles.gradientTextStyle}
                imgStyle={styles.gradientImageStyle}
                source={ForwardIcon}
                onPress={() => console.log("Works!")}
            />
        </View>
    )
}
export default SuccessFullReset;