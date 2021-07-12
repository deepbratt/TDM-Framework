import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { loginStyle } from "./styles";
import { TextInput } from "react-native-paper";
import { login } from "../../redux/reducers/authSlice";
import {
  text1,
  text2,
  EnterPassword,
  enterEmail,
  Login,
  SignInHead,
} from "../../utils/constants/en/index";
import CustomInput from "../../component/CustomInput/CustomInput";
import SimpleLayout from "../../layout/simpleLayout";
import { connect, useDispatch } from "react-redux";

function SignUpWithEmail() {
  const dispatch = useDispatch();
  const {  SignInButton, img, loginText } = loginStyle;

  const [isActive, setisActive] = useState(false);
  const [Active, setActive] = useState(false);
  const customStyle1 = Active
    ? loginStyle.inputField
    : loginStyle.activeField;
  const customStyle = isActive
    ? loginStyle.inputField
    : loginStyle.activeField;
  return (

    <SimpleLayout header={SignInHead} text1={text1} text2={text2}>
      <View style={img}>
        <Image
          fadeDuration={0}
          style={{ width: "100%", height: "100%" }}
          source={require("../../../assets/images/signin.png")}
        />
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <CustomInput
          placeholder={enterEmail}
          style={customStyle1}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          // value={data.userName}
          // onChange={(val) => handleInput(val)}
          leftIcon={
            <TextInput.Icon
              size={18}
              color={Active ? "#C20000" : "#ACABB1"}
              name="email"
            />
          }
          theme={{ colors: { primary: "white" } }}
          underlineColor="transparent"
        />
        <CustomInput
          placeholder={EnterPassword}
          style={customStyle}
          onFocus={() => setisActive(true)}
          onBlur={() => setisActive(false)}
          secureTextEntry
          // value={data.password}
          // onChange={(val) => handlePassword(val)}
          leftIcon={
            <TextInput.Icon
              size={18}
              color={isActive ? "#C20000" : "#ACABB1"}
              name="lock"
            />
          }
        />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 20,
          }}
        >
          <TouchableOpacity
           onPress={() => dispatch(login())}
            style={SignInButton}
          >
            <Text style={loginText}>{Login}</Text>
          </TouchableOpacity>
        </View>
      </View>



    </SimpleLayout>
  );
}
export default connect()(SignUpWithEmail);