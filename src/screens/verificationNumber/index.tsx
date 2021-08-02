import React, { useState } from "react";
import { View, Image, SafeAreaView, ScrollView } from "react-native";
import { styles } from "./styles";
import { TextInput } from "react-native-paper";
import CustomInput from "../../component/CustomInput/CustomInput";
import CustomText from "../../component/customText";
import CustomLinearGradient from "../../component/customLinearGradient";
import BottomSheetComponent from "../../component/BottomSheet";
import CustomOTP from "../../component/customOTP";
import {
  heading,
  subHeading,
  Button,
} from "../../utils/constants/verificationNumber";
import { EnteryourNumber } from "../../utils/constants/en";
import { globalStyle } from "../../Styles";
import { COLOR } from "../../Theme/Colors";
function VerificationNumber() {
  const [visible, setVisible] = useState(false);
  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };
  const { img } = styles;
  const [Active, setActive] = useState(false);
  const [input, setinput] = useState({
    number: "",
  });
 
  return (
    <View>
      <CustomText text={heading} textStyle={styles.heading} />
      <CustomText text={subHeading} textStyle={styles.subHeading} />
      <View style={img}>
        <Image
          fadeDuration={0}
          style={{ width: "100%", height: "100%" }}
          source={require("../../../assets/images/signin.png")}
        />
      </View>
      <View style={styles.inputFieldView}>
        <TextInput
          placeholder={EnteryourNumber}
          style={[Active ? globalStyle.activeField : globalStyle.inputField]}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          value={input.number}
          onChangeText={(number: any) => setinput({ ...input, number })}
          left={
            <TextInput.Icon
              size={18}
              color={Active ? COLOR.primary : COLOR.Silver}
              name="email"
            />
          }
        />
      </View>
      <CustomLinearGradient
        colors={["#F04148", COLOR.primary]}
        GradientButtonStyle={styles.gradientButtonStyle}
        text={Button}
        textstyle={styles.gradientButtonText}
        onPress={toggleBottomNavigationView}
      />
      <BottomSheetComponent
        visible={visible}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}
      >
        <CustomOTP></CustomOTP>
      </BottomSheetComponent>
    </View>
  );
}
export default VerificationNumber;
