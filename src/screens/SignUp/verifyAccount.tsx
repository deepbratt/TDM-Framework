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
import { globalStyle } from "../../Styles";
const Verify: FC = () => {
  const [input, setinput] = useState({
    phone: "",
    code: "",
});
  const [Active, setActive] = useState("");
  const [Verify, setVerify] = useState(false);
    const dispatch = useDispatch();
    const handleSubmit=()=>{
      
      setVerify(true)
     if(Verify===true){

      dispatch(login() );}
    }
    const inputField=[
      {
          id:1,
          IconName:"phone",
          value:input.phone,
          placeholder:EnteryourNumber,
          onChange:(phone: any) => setinput({ ...input, phone}),
          disabled:false
          },
          {
              id:2,
              IconName:"lock",
              value:input.code,
              placeholder:EnterdigitCode,
              onChange:(code: any) => setinput({ ...input, code}),
              disabled:Verify ? false: true
              },
  ]
  return (

    <SimpleLayout header={VerifyYourAccount} text1={text1} text2={text2}>
      <View>
        <View style={signInStyles.img}>
           <LottieView
          autoPlay
          source={require('../../../assets/sign.json')}
                />
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
        {inputField.map((input,index)=>{
          let ID = "TextInput"+index
          return(
            <CustomInput
            placeholder={input.placeholder}
            style={[Active === ID ? globalStyle.activeField : globalStyle.inputField]}
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
          <View
            style={signInStyles.SubmitView}> 
            <CustomButton buttonStyle={globalStyle.SignInButton} 
          textStyle={globalStyle.loginText}  onPress={handleSubmit} text={Verify ? Login:Submit} />
          </View>
        </View>
        <View>
          <CustomButton
            text={ForgotPassword}
            buttonStyle={globalStyle.forgetButton}
            textStyle={globalStyle.forgetText}
            linkTo="/forget"
          ></CustomButton>
        </View>
      </View>


    </SimpleLayout>
  );
}
export default Verify;
