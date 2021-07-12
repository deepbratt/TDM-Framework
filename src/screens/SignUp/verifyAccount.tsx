import React, { useState, FC } from "react";
import { View, Text, Image, TouchableOpacity} from "react-native";
import { signInStyles } from "./style";
import {  TextInput } from "react-native-paper";
import {
  text1,
  text2,
  ForgotPassword,
  Login,
  VerifyYourAccount,
  EnteryourNumber,
  EnterdigitCode,
  Submit,
} from "../../utils/constants/en/index";
import CustomInput from "../../component/CustomInput/CustomInput";
import { useDispatch } from 'react-redux';
import CustomButton from "../../component/CustomButton/index";
import {login } from "../../redux/reducers/authSlice";
import SimpleLayout from "../../layout/simpleLayout";
import LottieView from 'lottie-react-native';
const Verify: FC = () => {
  const [isActive, setisActive] = useState(false);
  const [Active, setActive] = useState(false);
  const [Verify, setVerify] = useState(false);

  const cstomStyle = Active
    ? signInStyles.inputField
    : signInStyles.activeField;

  const customStyle = isActive
    ? signInStyles.inputField
    : signInStyles.activeField;
    const dispatch = useDispatch();
    const handleSubmit=()=>{
      
      setVerify(true)
     if(Verify===true){

      dispatch(login() );}
    }
  return (

    <SimpleLayout header={VerifyYourAccount} text1={text1} text2={text2}>
      <View>
        <View style={signInStyles.img}>
           <LottieView
          style={{
            // width: 400,
            // height: 400,
          }}
          autoPlay
          source={require('../../../assets/sign.json')}
                />
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <CustomInput
            placeholder={EnteryourNumber}
            style={cstomStyle}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
            leftIcon={
              <TextInput.Icon
                size={18}
                color={Active ? "#C20000" : "#ACABB1"}
                name="phone"
              />
            }
            theme={{ colors: { primary: "white" } }}
            underlineColor="transparent"
          />
          <CustomInput
          disabled={Verify ? false: true}
            placeholder={EnterdigitCode}
            style={customStyle}
            onFocus={() => setisActive(true)}
            onBlur={() => setisActive(false)}
            secureTextEntry
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
              onPress={handleSubmit}
              style={signInStyles.SignInButton}
            >
              <Text style={signInStyles.loginText}>{Verify ? Login:Submit}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <CustomButton
            text={ForgotPassword}
            buttonStyle={signInStyles.forgetButton}
            textStyle={signInStyles.forgetText}
            onPress={() => console.log("REST")}
          ></CustomButton>
        </View>
      </View>


    </SimpleLayout>
  );
}
export default Verify;
