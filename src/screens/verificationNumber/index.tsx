import React, { useRef, useState } from "react";
import { View, Image} from "react-native";
import { styles } from "./styles";
import { TextInput } from "react-native-paper";
import CustomText from "../../component/customText";
import CustomLinearGradient from "../../component/customLinearGradient";
import CustomOTP from "../../component/customOTP";
import {
  heading,
  subHeading,
  Button,
} from "../../utils/constants/verificationNumber";
import { EnteryourNumber } from "../../utils/constants/en";
import { globalStyle } from "../../Styles";
import { COLOR } from "../../Theme/Colors";
import RBSheet from "react-native-raw-bottom-sheet";
function VerificationNumber() {
  const { img } = styles;
  const [Active, setActive] = useState(false);
  const [input, setinput] = useState({
    number: "",
  });
  const refRBSheet = useRef<RBSheet>(null);
 
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
        colors={[COLOR.CarminePink,COLOR.primary]}
        GradientButtonStyle={styles.gradientButtonStyle}
        text={Button}
        textstyle={styles.gradientButtonText}
        onPress={() => refRBSheet.current?.open()}
      />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: globalStyle.wrapperStyle,
          container:globalStyle.containerStyle,
          draggableIcon: globalStyle.draggableIcon
        }}
      >
        <CustomOTP></CustomOTP>
      </RBSheet>
    </View>
  );
}
export default VerificationNumber;
