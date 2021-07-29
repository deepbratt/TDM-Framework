import React, { useState } from "react";
import { View, Image, SafeAreaView, ScrollView } from "react-native";
import { styles } from './styles';
import { TextInput } from "react-native-paper";
import CustomInput from "../../component/CustomInput/CustomInput";
import CustomText from "../../component/customText";
import CustomLinearGradient from "../../component/customLinearGradient";
import BottomSheetComponent from "../../component/BottomSheet";
import CustomOTP from "../../component/customOTP";
import { heading, subHeading,Button } from "../../utils/constants/verificationNumber";
function VerificationNumber() {
    const [visible, setVisible] = useState(false);
    const toggleBottomNavigationView = () => {
        setVisible(!visible);
    };
    const { img } = styles;
    const [Active, setActive] = useState("");
    const [input, setinput] = useState({
        number: "",
    });
    const inputField = [
        {
            id: 1,
            IconName: "email",
            value: input.number,
            placeholder: "Enter Number or Email",
            onChange: (number: any) => setinput({ ...input, number })
        },
    ]
    return (
        <SafeAreaView>
            <ScrollView>
                <CustomText
                    text={heading}
                    textStyle={styles.heading}
                />
                <CustomText
                    text={subHeading}
                    textStyle={styles.subHeading}
                />
                <View style={img}>
                    <Image
                        fadeDuration={0}
                        style={{ width: "100%", height: "100%" }}
                        source={require("../../../assets/images/signin.png")}
                    />
                </View>
                <View style={styles.inputFieldView}>
                    {inputField.map((input, index) => {
                        let ID = "TextInput" + index
                        return (
                            <CustomInput
                                placeholder={input.placeholder}
                                style={[Active === ID ? styles.activeField : styles.inputField]}
                                onFocus={() => setActive(ID)}
                                onBlur={() => setActive("")}
                                value={input.value}
                                onChange={input.onChange}
                                leftIcon={
                                    <TextInput.Icon
                                        size={18}
                                        color={Active === ID ? "#C20000" : "#ACABB1"}
                                        name={input.IconName}
                                    />
                                }       
                            />
                        )
                    })}
                </View>
                <CustomLinearGradient
                    colors={['#F04148', '#C20000']}
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
                
            </ScrollView>
        </SafeAreaView>
    );
}
export default VerificationNumber;