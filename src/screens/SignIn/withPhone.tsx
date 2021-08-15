import React, { useRef, useState } from "react";
import { login, userId } from "../../redux/reducers/authSlice";
import {
  EnterPassword,
  Login,
  SignInHead,
  EnteryourNumber,
  Ok,
} from "../../utils/constants/en/index";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {
  Fieldnames,
  loginNumberValidation,
} from "../../utils/form/validationForm";
import GeneralView from "../../section/LoginView/GeneralLoginView";
import { userLoginwithPhone } from "../../utils/api";
import RBSheet from "react-native-raw-bottom-sheet";
import { globalStyle } from "../../Styles";
import { fieldForm } from "../../../types";
import CustomAlert from "../../component/customOTP/customAlert";
import {
  GotoSignUp,
  Gotoverify,
  InvalidInput,
  LoginSuccessfuL,
  NotSuccessfuL,
  PhonePassIncorrect,
} from "../../utils/constants/alertMsg";
import { axiosInstance } from "../../utils/api/api";
import axios from "axios";
import { setToken } from "../../utils/general.utils";

function SignInWithPhone() {
  const dispatch = useDispatch();
  const [Loader, setLoader] = useState(false);
  const [input, setinput] = useState({
    phone: "",
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

  const loginNumber = [
    {
      id: 1,
      IconName: "phone",
      value: Fieldnames.phone,
      placeholder: EnteryourNumber,
    },
    {
      id: 2,
      IconName: "lock",
      eyeName: input.showPassword,
      value: Fieldnames.password,
      placeholder: EnterPassword,
      secureTextEntry: input.secureTextEntry,
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
    const { phone, password } = values;

    const requestBody = {
      phone: phone,
      password: password,
    };
    setLoader(true);
    await userLoginwithPhone(requestBody)
      .then(
        (response) => {
          console.log(response, "data");
          if (response.status === "success") {
            if (response.data.user.isPhoneVerified) {
              return (
                setLoader(false),
                dispatch(userId(response.data.user)),
                history.push("/"),
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
            MsgTitle: InvalidInput,
            Msg: err,
            close: false,
          })),
            refRBSheet.current?.open();
        }
      )
      .catch((error) => {
        if (error.status === 401) return alert(PhonePassIncorrect);
      });
  };

  return (
    <>
      <GeneralView
        view={"login"}
        headerName={SignInHead}
        Imgsrc={require("../../../assets/images/signin.png")}
        initialValues={input}
        fields={loginNumber}
        onSubmit={(values: fieldForm) => LoginButton(values)}
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
export default connect()(SignInWithPhone);
