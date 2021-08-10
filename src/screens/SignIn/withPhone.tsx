import React, { useRef, useState } from "react";
import { login } from "../../redux/reducers/authSlice";
import {
  EnterPassword,
  Login,
  SignInHead,
  EnteryourNumber,
  Ok,
} from "../../utils/constants/en/index";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Fieldnames, loginNumberValidation } from "../../utils/form/validationForm";
import GeneralView from "../../section/LoginView/GeneralLoginView";
import { userLoginwithPhone } from "../../utils/api";
import RBSheet from "react-native-raw-bottom-sheet";
import { globalStyle } from "../../Styles";
import { fieldForm } from "../../../types";
import CustomAlert from "../../component/customOTP/customAlert";
import { GotoSignUp, InvalidInput, LoginSuccessfuL, PhonePassIncorrect } from "../../utils/constants/alertMsg";

function SignInWithPhone() {
  const dispatch = useDispatch();
  const [Loader, setLoader] = useState(false);
    const [input, setinput] = useState({
      phone: "",
      password: "",
      errorNum: "",
      errorPass: "",
      secureTextEntry:true,
      showPassword:"eye-off",
      Msg:"",
      MsgTitle:"",
      path:""
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
   const refRBSheet = useRef<RBSheet>(null);
   const LoginButton= async(values:fieldForm)=>{
   
           const {phone,password,}=values;
   
      const requestBody={
       "phone number": phone,
       "password": password,
       }
            setLoader(true);
            console.log( requestBody,"data");
     await userLoginwithPhone (requestBody)
       .then(response  => { 
         console.log( response ,"data");   
         if (response.status === "success") {
           return (
                   setLoader(false),
                   setinput(prev=>({
                     ...prev, MsgTitle:LoginSuccessfuL,
                           Msg:``,
                           path:'/'
                    })),
                   refRBSheet.current?.open(),
                   setTimeout(() => {
                      history.push('/'),
                     dispatch(login())
                      }, 1000)
           )
       } else if (response.status === "fail"){
         return(
           setLoader(false),
           setinput(prev=>({
             ...prev, MsgTitle:InvalidInput,
                   Msg:`${response.message}!.${GotoSignUp}`,
                   path:'/SignUp/phone'
            })),
           refRBSheet.current?.open()
   
         )}
     },
       err=>{
             setLoader(false)
                 console.log( err,"errorssy")
                 setinput(prev=>({
                   ...prev, MsgTitle:InvalidInput,
                         Msg:err,
                         path:"/SignUp/phone"
                  })),
                 refRBSheet.current?.open()
               } 
       ).catch(error=>{
         if (error.status === 401) return alert(PhonePassIncorrect); 
        })  
    };
   
  return (
    <>
<GeneralView 
    view={"login"}
    headerName={SignInHead}
    Imgsrc={require("../../../assets/images/signin.png")}
    initialValues={input}
    fields={loginNumber} 
     onSubmit={(values: fieldForm)=>LoginButton(values)}
     validationSchema={loginNumberValidation}
    handleShow={handleShow}
    ButtonText={Loader ? "Loading..." : Login}
  />
  <RBSheet
  ref={refRBSheet}
  closeOnDragDown={true}
  closeOnPressMask={false}
  animationType="slide"
  customStyles={{
    wrapper: globalStyle.wrapperStyle,
    container:globalStyle.containerStyle,
    draggableIcon: globalStyle.draggableIcon
  }}
>
  <CustomAlert 
  Title={input.MsgTitle}
  Msg={input.Msg}
  onPress={()=>history.push(input.path)}
  buttonTitle={Ok}
  />
</RBSheet>
</>
  );
}
export default connect()(SignInWithPhone);

