import React, { useState} from "react";
import {
  Login,
  VerifyYourAccount,
  EnteryourNumber,
  EnterdigitCode,
  Submit,
  enterEmail,
} from "../../utils/constants/en/index";
import { useDispatch } from 'react-redux';
import { Fieldnames, verificationValidationSchema } from "../../utils/form/validationForm";
import { userVerifyEmail } from "../../utils/api";
import Toast from 'react-native-simple-toast';
import { fieldForm } from "../../../types";
import GeneralView from "../../section/LoginView/GeneralLoginView";


const VerifywithEmail= () => {
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
    if (response.status === "success") {
      return (
        setLoader(false),
        setVerify((prev)=> prev.Verify === true ?  true:false,
      ),
        Toast.show("Code sent to your email")
      )
  }
  else {
    return (
      setLoader(false),
      Toast.show("Your Email is not register")
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
          fields={EmailField}
          onSubmit={(values: fieldForm)=>handleVerify(values)}
          validationSchema={verificationValidationSchema}
          ButtonText={Loader ? "Loading...": Verify? Submit : Login } 
        />
  
  );
}
export default VerifywithEmail;
