import React, { useState, FC } from "react";
import {
  Login,
  VerifyYourAccount,
  EnteryourNumber,
  EnterdigitCode,
  Submit,
} from "../../utils/constants/en/index";
import { useDispatch } from 'react-redux';
import { Fieldnames, verificationNumberValidation } from "../../utils/form/validationForm";
import { userVerifyPhone } from "../../utils/api";
import Toast from 'react-native-simple-toast';
import { fieldForm } from "../../../types";
import GeneralView from "../../section/LoginView/GeneralLoginView";


const VerifywithPhone= () => {
  const [input, setinput] = useState({
    phone: "",
    code: "",
});
  const [Verify, setVerify] = useState(true);
    const dispatch = useDispatch();
    const [Loader, setLoader] = useState(false);

    const NumberField=[
      {
        id:1,
        IconName:"phone",
        value:Fieldnames.phone,
        placeholder:EnteryourNumber,
        disabledField:false,
        type:"numeric"
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
    const{phone}=values;
    console.log("verify",phone);
    const requestBody={
      "phone": phone,
      }
      setLoader(true);
  await userVerifyPhone (requestBody) 
   .then(response  => {   
    if (response.status === "success") {
      return (
        setLoader(false),
        setVerify((prev)=> prev.Verify === true ?  true:false,
      ),
        Toast.show("Code sent to your Phone")
      )
  }
  else {
    return (
      setLoader(false),
      Toast.show("Your Phone number is not registered")
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
          fields={NumberField}
          onSubmit={(values: fieldForm)=>handleVerify(values)}
          validationSchema={verificationNumberValidation}
          ButtonText={Loader ? "Loading...": Verify ? Submit : Login } 
        />
  
  );
}
export default VerifywithPhone;
