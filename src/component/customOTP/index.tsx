import React, {useState} from 'react';
import { SafeAreaView, Text, View, } from 'react-native';
import { styles } from './styles';
import {CodeField,Cursor,useBlurOnFulfill,useClearByFocusCell,} from 'react-native-confirmation-code-field';
import CustomText from '../customText';
import CustomLinearGradient from '../customLinearGradient';
import { Link, useHistory } from 'react-router-native';


const CELL_COUNT = 4;
const CustomOTP = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const history=useHistory();
   const handleClick=()=>{
console.log("otp");
history.push("/success-pass");
     }
  return (
    <SafeAreaView style={styles.root}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFiledRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}>
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
      <CustomText
        text="Please, enter 4-digit code we sent on your number as SMS"
        textStyle={styles.textStyle}
      />
      
      <CustomLinearGradient
        colors={['#F04148', '#C20000']}
        GradientButtonStyle={styles.gradientStyle}
        text="Next"
        textstyle={styles.gradientTextStyle}
        imgStyle={styles.gradientImageStyle}
        source={require('../../../assets/images/Shape.png')}
        onPress={handleClick}
      />
     
    </SafeAreaView>
  );
};
export default CustomOTP;
