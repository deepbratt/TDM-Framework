import React, { useState } from "react";
import { login } from "../../redux/reducers/authSlice";
import {
  EnterPassword,
  Login,
  SignInHead,
  EnteryourNumber,
} from "../../utils/constants/en/index";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Fieldnames, loginNumberValidation } from "../../utils/form/validationForm";
import GeneralView from "../../section/LoginView/GeneralLoginView";

function SignInWithPhone() {
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
  
const loginNumber=[
  {
      id:1,
      IconName:"phone",
      value:Fieldnames.phone,
      placeholder:EnteryourNumber,
      },
      {
          id:2,
          IconName:"lock",
          eyeName:input.showPassword,
          value:Fieldnames.password,
          placeholder:EnterPassword,
          secureTextEntry:input.secureTextEntry
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
    initialValues={input}
    fields={loginNumber} 
     onSubmit={(values)=>LoginButton(values)}
     validationSchema={loginNumberValidation}
    handleShow={handleShow}
    ButtonText={Loader ? "Loading..." : Login}
  />
  );
}
export default connect()(SignInWithPhone);

