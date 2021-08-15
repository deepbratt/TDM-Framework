import React, { useEffect, useRef, useState } from "react";
import { login, userId } from "../../redux/reducers/authSlice";
import {
  EnterPassword,
  enterEmail,
  Login,
  SignInHead,
  data,
  Ok,
} from "../../utils/constants/en/index";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {
  Fieldnames,
  loginEmailValidation,
} from "../../utils/form/validationForm";
import GeneralView from "../../section/LoginView/GeneralLoginView";
import { fieldForm } from "../../../types";
import { userLoginwithEmail } from "../../utils/api";
import { setToken, } from "../../utils/general.utils";
import RBSheet from "react-native-raw-bottom-sheet";
import { globalStyle } from "../../Styles";
import CustomAlert from "../../component/customOTP/customAlert";
import {
  EmailPassIncorrect,
  Gotoverify,
  InvalidInput,
  NotSuccessfuL,
} from "../../utils/constants/alertMsg";


function SignInWithEmail() {
  const dispatch = useDispatch();
  const [Loader, setLoader] = useState(false);
  const [input, setinput] = useState({
    email: "",
    password: "",
    errorNum: "",
    errorPass: "",
    secureTextEntry: true,
    showPassword: "eye-off",
    Msg: "",
    MsgTitle: "",
    path: "",
    button: "",
    close: false,
  });
  const loginEmail = [
    {
      id: 1,
      IconName: "email",
      value: Fieldnames.email,
      placeholder: enterEmail,
      disabled: false,
      type: "email-address",
    },
    {
      id: 2,
      IconName: "lock",
      eyeName: input.showPassword,
      value: Fieldnames.password,
      placeholder: EnterPassword,
      secureTextEntry: input.secureTextEntry,
      disabled: false,
    },
  ];

  const handleShow = () => {
    console.log("show");
    setinput((prev) => ({
      ...prev,
      showPassword: prev.showPassword === "eye" ? "eye-off" : "eye",
      secureTextEntry: !prev.secureTextEntry,
    }));
  };
  const history = useHistory();
  const refRBSheet = useRef<RBSheet>(null);
  const LoginButton = async (values: fieldForm) => {
    const { email, password } = values;
    const requestBody = {
      email: email,
      password: password,
    };
    setLoader(true);
    console.log(requestBody, "data");
    await userLoginwithEmail(requestBody)
      .then(
        (response) => {
          console.log(response, "data");
          if (response.status === "success") {
            if (response.data.user.isEmailVerified == true) {
              return (
                setLoader(false),
                dispatch(userId(response.data.user)),
                history.push('/'),
                dispatch(login(response))
              );
            } else {
              return (
                setLoader(false),
                setinput((prev) => ({
                  ...prev,
                  MsgTitle: NotSuccessfuL,
                  Msg: `${Gotoverify}`,
                  path: "/Verify/phone",
                  button: Ok,
                  close: true,
                })),
                refRBSheet.current?.open()
              );
            }
          } else if (response.status === "fail") {
            return (
              setLoader(false),
              setinput((prev) => ({
                ...prev,
                MsgTitle: InvalidInput,
                Msg: `${response.message}`,
                button: Ok,
                close: false,
              })),
              refRBSheet.current?.open()
            );
          }
        },
        (err) => {
          setLoader(false);
          console.log(err, "errorssy");
          setinput((prev) => ({
            ...prev,
            MsgTitle: "",
            Msg: err,
            close: false,
          })),
            refRBSheet.current?.open();
        }
      )
      .catch((error) => {
        if (error.status === 401) return alert(EmailPassIncorrect);
      });
  };

  return (
    <>
      <GeneralView
        view={"login"}
        headerName={SignInHead}
        Imgsrc={require("../../../assets/images/signin.png")}
        fields={loginEmail}
        initialValues={input}
        validationSchema={loginEmailValidation}
        onSubmit={(values: fieldForm) => LoginButton(values)}
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
          container: globalStyle.containerStyle,
          draggableIcon: globalStyle.draggableIcon,
        }}
      >
        <CustomAlert
          Title={input.MsgTitle}
          Msg={input.Msg}
          onPress={
            input.close
              ? () => history.push(input.path)
              : () => refRBSheet.current?.close()
          }
          buttonTitle={input.button}
        />
      </RBSheet>
    </>
  );
}
export default SignInWithEmail;
