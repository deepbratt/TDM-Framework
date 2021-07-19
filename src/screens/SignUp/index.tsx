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
  enterFirst,
  enterLast,
  ConfirmPassword,
} from "../../utils/constants/en/index";
import CustomInput from "../../component/CustomInput/CustomInput";
import SimpleLayout from "../../layout/simpleLayout";
import { Link } from "react-router-native";
import { globalStyle } from "../../Styles";
import CustomButton from "../../component/CustomButton";
import { COLOR } from "../../Theme/Colors";
function SignUp() {
  const { imgDiv,SubmitView,alignCenter } = signInStyles;
  const [Active, setActive] = useState("");
  

  const [data, setdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    cnPassword: "",

  });
  const inputField=[
    {
        id:1,
        IconName:"email",
        value:data.firstName,
        placeholder:enterFirst,
        onChange:(firstName: any) => setdata({ ...data, firstName}) 

        },
        {
            id:2,
            IconName:"lock",
            value:data.lastName,
            placeholder:enterLast,
            onChange:(lastName: any) => setdata({ ...data, lastName}) 
            },
            {
              id:3,
              IconName:"email",
              value:data.email,
              placeholder:enterEmail,
              onChange:(email: any) => setdata({ ...data, email}) 
              },
            {
              id:4,
              IconName:"lock",
              value:data.password,
              placeholder:EnterPassword,
              onChange:(password: any) => setdata({ ...data, password}) 
              },
              {
                id:4,
                IconName:"lock",
                value:data.cnPassword,
                placeholder:ConfirmPassword,
                onChange:(cnPassword: any) => setdata({ ...data, cnPassword}) 
                },
    
]
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
                color={Active === ID ? COLOR.primary : COLOR.Silver}
                name={input.IconName}
              />
            }
          />
          )
        })}
          <View style={SubmitView} >
            <CustomButton buttonStyle={globalStyle.SignInButton} 
            textStyle={globalStyle.loginText} linkTo="/verify" text={signUp} />
          </View>
        </View>
      </View>

    </SimpleLayout>
  );
}
export default SignUp;