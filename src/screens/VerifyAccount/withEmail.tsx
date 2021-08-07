import React, { useState} from "react";
import {
  Login,
  VerifyYourAccount,
  EnteryourNumber,
  EnterdigitCode,
  Submit,
  enterEmail,
  alreadyAccount,
  SignInHead,
} from "../../utils/constants/en/index";
import { connect, useDispatch } from 'react-redux';
import { Fieldnames, verificationValidationSchema } from "../../utils/form/validationForm";
import { userVerifyEmail } from "../../utils/api";
import Toast from 'react-native-simple-toast';
import { fieldForm } from "../../../types";
import GeneralView from "../../section/LoginView/GeneralLoginView";
import { Alert } from "react-native";


const VerifywithEmail= (alreadyAccount) => {
  const [input, setinput] = useState({
    email: "",
    code: "",
});
  const [Verify, setVerify] = useState(true);
    const dispatch = useDispatch();
    const [Loader, setLoader] = useState(false);
    
    const EmailField=[
      {
        id:1,
        IconName:"email",
        value:Fieldnames.email,
        placeholder:enterEmail,
        disabledField:false,
        type:"email-address"
        },
          {
              id:2,
              IconName:"lock",
              value:Fieldnames.code,
              placeholder:EnterdigitCode,
              disabledField:Verify,
              type:"numeric"
              },
    ];
    const Field=[
          {
              id:1,
              IconName:"lock",
              value:Fieldnames.code,
              placeholder:EnterdigitCode,
              disabledField:Verify,
              type:"numeric"
              },
    ]
  const handleVerify= async(values: fieldForm)=>{
    const{email}=values;
    console.log("verify",email);
    const requestBody={
      "email": email,
      }
      setLoader(true);
  await userVerifyEmail (requestBody) 
   .then(response  => {   
    if (response.status === "unverified") {
      return (
        setLoader(false),
        console.log(response,"res"),
        setVerify((prev)=> prev.Verify === true ?  true:false,
      ),
        Toast.show("Code sent to your email")
      )
  }
  else  if (response.status === "error")  {
    return (
      setLoader(false),
      console.log(response,"res"),
      Alert.alert(`${response.message}!,Your Email is not register`)
    )
}
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
          view={"verify"}
          headerName={VerifyYourAccount}
          Imgsrc={require('../../../assets/sign.json')}
          initialValues={input} 
          fields={alreadyAccount ? EmailField: Field}
          onSubmit={(values: fieldForm)=>handleVerify(values)}
          validationSchema={verificationValidationSchema}
          ButtonText={Loader ? "Loading...": Verify? Submit : Login } 
        />
  
  );
}
const mapStateToProps = (state) => ({
  alreadyAccount: state.rootReducer.auth.alreadyAccount,
});

export default connect(mapStateToProps)(VerifywithEmail);
