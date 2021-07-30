import React, { useState } from "react";
import {
  SignUpHead,
  EnterPassword,
  signUp,
  enterFirst,
  enterLast,
  ConfirmPassword,
  EnteryourNumber,
} from "../../utils/constants/en/index";
import { Link, useHistory } from "react-router-native";
import { Fieldnames, signUpNumberValidation } from "../../utils/form/validationForm";
import { userSignUpwithPhone } from "../../utils/api";
import { setUserSession } from "../../utils/general.utils";
import { fieldForm } from "../../../types";
import GeneralView from "../../section/LoginView/GeneralLoginView";

function SignUpwithPhone() {
  const [Loader, setLoader] = useState(false);
  const [data, setdata] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    password: "",
    confirmPassword: "",
    secureTextEntry:true,
    showPassword:"eye-off",
  });
  
  const inputField=[
    {
        id:1,
        IconName:"email",
       value:Fieldnames.firstName,
        placeholder:enterFirst,
        secureTextEntry:false,
        },
        {
            id:2,
            IconName:"lock",
            value:Fieldnames.lastName,
            placeholder:enterLast,
            secureTextEntry:false,
            },
            {
              id:3,
              IconName:"phone",
              value:Fieldnames.phone,
              placeholder:EnteryourNumber,
              secureTextEntry:false,
              type:"numeric"
              },
            {
              id:4,
              IconName:"lock",
              value:Fieldnames.password,
              placeholder:EnterPassword,
              secureTextEntry:data.secureTextEntry,
              eyeName:data.showPassword,
              
              },
              {
                id:4,
                IconName:"lock",
                value:Fieldnames.confirmPassword,
                placeholder:ConfirmPassword,
                secureTextEntry:data.secureTextEntry,
                eyeName:data.showPassword,
                },
    
]
const handleShow=()=>{
  setdata(prev=>({
   ...prev, showPassword:prev.showPassword === "eye" ? "eye-off":"eye",
   secureTextEntry:!prev.secureTextEntry
  }))
}
const history=useHistory();
const handleForm= async(values:fieldForm)=>{
    const {
        firstName,
        lastName,
        phone,
        password,
        confirmPassword
     }=values;
  const requestBody={
      "firstName": firstName,
      "lastName": lastName,
      "phone": phone,
      "password": password,
      "passwordConfirm":confirmPassword,
  }
        setLoader(true);
        console.log( requestBody,"hhrequestBody");
  await userSignUpwithPhone (requestBody)
      .then(response  => {    
        if (response.status === 200) {
          return (
            setLoader(false),
            alert("Signup successfully"),
            history.push('/verify'),
            setUserSession(response.data.token, response.data.user)
          )
      } else if (response.status === "fail"){
        return(
          setLoader(false),
          alert("You are Already signed, Click ok to verify"),
          history.push('/verify'),
          setUserSession(response.data.token, response.data.user)
        )}
    },
      err=>{
            setLoader(false)
                console.log( err,"errorssy")
                alert("invalid");
              } 
      ).catch(error=>{
        if (error.status === 401) return alert("user and password incorrect"); 
       })  
   };

  return (

    <GeneralView 
    view={"signup"}
    headerName={SignUpHead}
    Imgsrc={require("../../../assets/images/signup2.png")}
    initialValues={data} 
    fields={inputField}
    onSubmit={(values: fieldForm)=>handleForm(values)}
    validationSchema={signUpNumberValidation}
    handleShow={handleShow}
    ButtonText={Loader ? "Loading....": signUp}
  />
  );
}
export default SignUpwithPhone;