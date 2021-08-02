import React, { useState } from "react";
import { login } from "../../redux/reducers/authSlice";
import {
  EnterPassword,
  enterEmail,
  Login,
  SignInHead,
} from "../../utils/constants/en/index";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Fieldnames, loginEmailValidation } from "../../utils/form/validationForm";
import GeneralView from "../../section/LoginView/GeneralLoginView";
import { fieldForm } from "../../../types";

function SignUpWithEmail() {
  const dispatch = useDispatch();
  const [Loader, setLoader] = useState(false);
    const [input, setinput] = useState({
      userName: "",
      password: "",
      errorNum: "",
      errorPass: "",
      secureTextEntry:true,
      showPassword:"eye-off",
  });
   const loginEmail=[
{
  id:1,
  IconName:"email",
  value:Fieldnames.email,
  placeholder:enterEmail,
  disabled:false,
  type:"email-address"
    },
    {
        id:2,
        IconName:"lock",
        eyeName:input.showPassword,
        value:Fieldnames.password,
        placeholder:EnterPassword,
        secureTextEntry:input.secureTextEntry,
        disabled:false
        },

];

const handleShow=()=>{
  console.log("show")
  setinput(prev=>({
   ...prev, showPassword:prev.showPassword === "eye" ? "eye-off":"eye",
   secureTextEntry:!prev.secureTextEntry
  }))
}
   const history=useHistory();
   const LoginButton = async(values)=>{
      history.push('/')
      dispatch(login());
}
  return (
<GeneralView 
    view={"login"}
    headerName={SignInHead}
    Imgsrc={require("../../../assets/images/signin.png")}
    fields={loginEmail}
    initialValues={input} 
     validationSchema={loginEmailValidation}
     onSubmit={(values: fieldForm)=>LoginButton(values)}
    handleShow={handleShow}
    ButtonText={Loader ? "Loading..." : Login}
  />
  );
}
export default connect()(SignUpWithEmail);

