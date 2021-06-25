import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { signInStyles } from "./style";
import { Button, TextInput } from "react-native-paper";
import { useHistory } from "react-router-dom";


import {
  data,
  SignUpHead,
  text1,
  text2,
  ByContinuingyou,
  TermsOfuse,
  And,
  PrivacyPolicy,
  EnterPassword,
  enterEmail,
  signUp,
} from "../../utils/en/constant";
import { CustomInput } from "../../Component/CustomInput/CustomInput";
import { Link } from "react-router-native";
import axios from "axios";
import { NavigationHelpersContext, useNavigation } from "@react-navigation/native";
import { setUserSession } from "../../utils/general.utils";
import { userLoginApi } from "../../utils/api/api";
import { connect, useDispatch } from "react-redux";

 function SignUp() {
  const {container,top,bottom,detail,SignInButton,head,img,loginText,underline}=signInStyles;
  
  const history = useHistory();
  const [isActive, setisActive] = useState(false);
  const [Active, setActive] = useState(false);
  const cstomStyle = Active
    ? signInStyles.inputField
    : signInStyles.activeField;
  const customStyle = isActive
    ? signInStyles.inputField
    : signInStyles.activeField;

    const [data, setdata] = useState({
      firstName: "",
      lastName: "",
email:"",
phone:"",
      password: "",
      cnPassword:"",
     
  });
  const handleEmail = (val) => {

    setdata({ ...data, email: val, }) //dyamic 

};
const handlePassword = (val) => {
  setdata({ ...data, password: val, }) //dyamic 

};
const handleCnPassword = (val) => {
  setdata({ ...data, cnPassword: val, }) //dyamic 

};
const handleFn = (val) => {
  setdata({ ...data, firstName: val, }) //dyamic 

};
const handleLn = (val) => {
  setdata({ ...data, lastName: val, }) //dyamic 

};
const handlePhone = (val) => {
  setdata({ ...data, phone: val, }) //dyamic 

};
 const dispatch = useDispatch();
const Register = async()=>{
  const {email,firstName,lastName,phone,password,cnPassword}=data;
const requestBody={
  "firstName":firstName,
  "lastName":lastName,
  "phone":phone,
  "email": email,
  "password": password,
  "passwordConfirm":cnPassword,
}
await axios.post("http://3.133.81.44/v1/users/signup",requestBody)
.then( res =>{
    console.log("response",res);
history.push("/page");
  }
).catch(error=>{

  console.log("response=",error.message);
     alert("Signup page faild");  
})

};



  return (
    <ScrollView style={container}>
      <View style={top}>
        <Text style={head}>{SignUpHead}</Text>
        <Text style={detail}>{text1}</Text>
        <Text style={detail}> {text2}</Text>
      </View>
      <View>
        <View style={img}>
          <Image
            fadeDuration={0}
            style={{ width: "100%", height: "100%" }}
            source={require("../../assets/signin.png")}
          />
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <CustomInput
            placeholder="Enter First Name"
            style={cstomStyle}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
            value={data.firstName}
            onChange={(val) => handleFn(val)}
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
            style={cstomStyle}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
            value={data.lastName}
            onChange={(val) => handleLn(val)}
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
            placeholder={enterEmail}
            style={cstomStyle}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
            value={data.email}
            onChange={(val) => handleEmail(val)}
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
            placeholder="Enter phone Number"
            style={cstomStyle}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
            value={data.phone}
            onChange={(val) => handlePhone(val)}
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
            placeholder={EnterPassword}
            style={customStyle}
            onFocus={() => setisActive(true)}
            onBlur={() => setisActive(false)}
            secureTextEntry
            value={data.password}
            onChange={(val) => handlePassword(val)}
            leftIcon={
              <TextInput.Icon
                size={18}
                color={isActive ? "#C20000" : "#ACABB1"}
                name="lock"
              />
            }
          />
          <CustomInput
            placeholder="Confirm Password"
            style={customStyle}
            onFocus={() => setisActive(true)}
            onBlur={() => setisActive(false)}
            secureTextEntry
            value={data.cnPassword}
            onChange={(val) => handleCnPassword(val)}
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
              underlayColor="#fff4f7"
              onPress={()=>Register()}
              style={SignInButton}
            >
              <Text style={loginText}>{signUp}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={bottom}>
        <Text style={detail}>{ByContinuingyou}</Text>
        <Text>
          <Text style={underline}>{TermsOfuse}</Text>{" "}
          <Text style={detail}>{And} </Text>
          <Text style={underline}>{PrivacyPolicy}</Text>{" "}
        </Text>
      </View>
    </ScrollView>
  );
}
export default SignUp;