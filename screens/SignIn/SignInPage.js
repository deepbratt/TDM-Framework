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
  SignInHead,
  text1,
  text2,
  ByContinuingyou,
  TermsOfuse,
  And,
  PrivacyPolicy,
  EnterPassword,
  enterEmail,
  signUp,
  Login,
} from "../../utils/en/constant";
import { CustomInput } from "../../Component/CustomInput/CustomInput";
import { Link } from "react-router-native";
import axios from "axios";
import { NavigationHelpersContext, useNavigation } from "@react-navigation/native";
import { setUserSession } from "../../utils/general.utils";
import { userLoginApi } from "../../utils/api/api";
import { connect, useDispatch } from "react-redux";

 function SignIn() {
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
      userName: "",
      password: "",
      errorNum: "",
      errorPass: "",
      secureTextEntry: true
      // showPassword:true,
  });
  const handleInput = (val) => {
    setdata({ ...data, userName: val, }) //dyamic 

};
const handlePassword = (val) => {
    setdata({ ...data, password: val, }) //dyamic 

};

 const dispatch = useDispatch();
const login = async()=>{
  const {userName,password}=data;
const requestBody={
  "email": userName,
  "password": password
}
await userLoginApi (requestBody)
    .then(response  => {
      console.log(response,"dsd")
          alert(response.message);
          // dispatch({type:'LOGIN', requestBody});
          // console.log( requestBody,"d requestBody")
          setUserSession(response.data.token, response.data.user)
        alert("login successful");
        history.push("/page");
        }
    ).catch(error=>{
      if (error.status === 401) return alert("user and password incorrect");
       
     })  
      };

  return (
    <ScrollView style={container}>
      <View style={top}>
        <Text style={head}>{SignInHead}</Text>
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
            placeholder={enterEmail}
            style={cstomStyle}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
            value={data.userName}
            onChange={(val) => handleInput(val)}
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
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginVertical: 20,
            }}
          >
            <TouchableOpacity
              underlayColor="#fff4f7"
              onPress={()=>login()}
              style={SignInButton}
            >
              <Text style={loginText}>{Login}</Text>
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
export default connect()( SignIn);