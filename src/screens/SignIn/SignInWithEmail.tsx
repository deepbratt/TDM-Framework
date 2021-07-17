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
import { globalStyle } from "../../Styles";
import CustomButton from "../../component/CustomButton";

function SignUpWithEmail() {
  const dispatch = useDispatch();
  const {img,alignCenter,SubmitView} = loginStyle;
  const [Active, setActive] = useState("");
    const [input, setinput] = useState({
      userName: "",
      password: "",
      errorNum: "",
      errorPass: "",
      secureTextEntry: true
      // showPassword:true,
  });
  const inputField=[
      {
          id:1,
          IconName:"email",
          value:input.userName,
          placeholder:enterEmail,
          onChange:(userName: any) => setinput({ ...input, userName}) 
  
          },
          {
              id:2,
              IconName:"lock",
              value:input.password,
              placeholder:EnterPassword,
              onChange:(password: any) => setinput({ ...input, password}) 
              },
      
  ]

  return (

    <SimpleLayout header={SignInHead} text1={text1} text2={text2}>
      <View style={img}>
        <Image
          fadeDuration={0}
          style={{ width: "100%", height: "100%" }}
          source={require("../../../assets/images/signin.png")}
        />
      </View>
      <View style={alignCenter}>
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
      
        <View style={SubmitView}>
           <CustomButton buttonStyle={globalStyle.SignInButton} 
          textStyle={globalStyle.loginText} onPress={() => dispatch(login())} text={Login} />
        </View>
      </View>
    </SimpleLayout>
  );
}
export default connect()(SignUpWithEmail);