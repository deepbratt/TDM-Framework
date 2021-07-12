import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { signInStyles } from "./style";
import { Button, TextInput } from "react-native-paper";
import {
  SignUpHead,
  text1,
  text2,
  EnterPassword,
  enterEmail,
  signUp,
} from "../../utils/constants/en/index";
import CustomInput from "../../component/CustomInput/CustomInput";
import SimpleLayout from "../../layout/simpleLayout";
import { Link } from "react-router-native";
function SignUp() {
  const { SignInButton, imgDiv, loginText } = signInStyles;
  const [isActive, setisActive] = useState(false);
  const [Active, setActive] = useState(false);
  const [isActive2, setisActive2] = useState(false);
  const [Active2, ActiveFocus] = useState(false);
  const [isActive3, setisActive3] = useState(false);
  const cstomStyle = Active
    ? signInStyles.inputField
    : signInStyles.activeField;
  const customStyle = isActive
    ? signInStyles.inputField
    : signInStyles.activeField;
  const cstomStyle2 = Active2
    ? signInStyles.inputField
    : signInStyles.activeField;
  const customStyle2 = isActive2
    ? signInStyles.inputField
    : signInStyles.activeField;
  const customStyle3 = isActive3
    ? signInStyles.inputField
    : signInStyles.activeField;

  const [data, setdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    cnPassword: "",

  });
  const handleChange = (val: any) => {
    console.log("press", val);


  };

  return (
    <SimpleLayout header={SignUpHead} text1={text1} text2={text2}>
      <View>
        <View style={imgDiv}>
          <Image
            fadeDuration={0}
            style={{ width: "100%", height: "100%" }}
            source={require("../../../assets/images/signup2.png")}
          />
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <CustomInput
            placeholder="Enter First Name"
            style={cstomStyle}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
            value={data.firstName}
            onChange={(val: any) => handleChange(val)}
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
            placeholder="Enter Last Name"
            style={customStyle}
            onFocus={() => setisActive(true)}
            onBlur={() => setisActive(false)}
            value={data.lastName}
            onChange={(val: any) => handleChange(val)}
            leftIcon={
              <TextInput.Icon
                size={18}
                color={isActive ? "#C20000" : "#ACABB1"}
                name="email"
              />
            }
            theme={{ colors: { primary: "white" } }}
            underlineColor="transparent"
          />
          <CustomInput
            placeholder={enterEmail}
            style={cstomStyle2}
            onFocus={() => ActiveFocus(true)}
            onBlur={() => ActiveFocus(false)}
            value={data.email}
            onChange={(val) => handleChange(val)}
            leftIcon={
              <TextInput.Icon
                size={18}
                color={Active2 ? "#C20000" : "#ACABB1"}
                name="email"
              />
            }
            theme={{ colors: { primary: "white" } }}
            underlineColor="transparent"
          />
          <CustomInput
            placeholder={EnterPassword}
            style={customStyle2}
            onFocus={() => setisActive2(true)}
            onBlur={() => setisActive2(false)}
            secureTextEntry
            value={data.password}
            onChange={(val: any) => handleChange(val)}
            leftIcon={
              <TextInput.Icon
                size={18}
                color={isActive2 ? "#C20000" : "#ACABB1"}
                name="lock"
              />
            }
          />
          <CustomInput
            placeholder="Confirm Password"
            style={customStyle3}
            onFocus={() => setisActive3(true)}
            onBlur={() => setisActive3(false)}
            secureTextEntry
            value={data.cnPassword}
            onChange={(val: any) => handleChange(val)}
            leftIcon={
              <TextInput.Icon
                size={18}
                color={isActive3 ? "#C20000" : "#ACABB1"}
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
            <Link
              underlayColor="#fff4f7"
              to="/verify"
              style={SignInButton}
              component={TouchableOpacity}
            >
              <Text style={loginText}>{signUp}</Text>
            </Link>
          </View>
        </View>
      </View>

    </SimpleLayout>
  );
}
export default SignUp;