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

const SuccessFullReset = () => {
    const history=useHistory();
    const handleClick=()=>{
        history.push('/SignInWithEmail')
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
                colors={['#F04148', '#C20000']}
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