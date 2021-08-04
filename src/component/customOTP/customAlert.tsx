import React, {FC, useState} from 'react';
import { SafeAreaView, View,  } from 'react-native';
import { styles } from './styles';
import CustomText from '../customText';
import CustomLinearGradient from '../customLinearGradient';
import { COLOR } from '../../Theme/Colors';
import HeadingSection from '../../section/CustomHeading/Heading';
import { AlertProps } from '../../../types';

const CustomAlert:FC<AlertProps>= ({Title,Msg,buttonTitle,onPress}) => {

  return (
    <SafeAreaView style={styles.root}>
     <View style={styles.viewStyle}>
     <CustomText  text={Title}  textStyle={styles.titleStyle}/>
      <CustomText
        text={Msg}
        textStyle={styles.textStyle}
      />
     </View>
      <CustomLinearGradient
        colors={[COLOR.CarminePink,COLOR.primary]}
        GradientButtonStyle={styles.gradientStyle}
        text={buttonTitle}
        textstyle={styles.gradientTextStyle}
        imgStyle={styles.gradientImageStyle}
        source={require('../../../assets/images/extra/Shape.png')}
        onPress={onPress}
      />
     
    </SafeAreaView>
  );
};
export default CustomAlert;
