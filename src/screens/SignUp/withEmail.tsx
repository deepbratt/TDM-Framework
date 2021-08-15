import React, { useRef, useState } from "react";
import {
  SignUpHead,
  EnterPassword,
  enterEmail,
  signUp,
  enterFirst,
  enterLast,
  ConfirmPassword,
  Ok,
  ClickokTo,
  AlreadySigned,
} from "../../utils/constants/en/index";
import { useHistory } from "react-router-native";
import {
  Fieldnames,
  signUpValidationSchema,
} from "../../utils/form/validationForm";
import { userSignUpApi } from "../../utils/api";
import { setToken } from "../../utils/general.utils";
import { fieldForm } from "../../../types";
import GeneralView from "../../section/LoginView/GeneralLoginView";
import { accountSignUp } from "../../redux/reducers/authSlice";
import { useDispatch } from "react-redux";
import { globalStyle } from "../../Styles";
import RBSheet from "react-native-raw-bottom-sheet";
import CustomAlert from "../../component/customOTP/customAlert";

function SignUp() {
  const [Loader, setLoader] = useState(false);
  const [data, setdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    secureTextEntry: true,
    showPassword: "eye-off",
  });
  const inputField = [
    {
      id: 1,
      IconName: "email",
      value: Fieldnames.firstName,
      placeholder: enterFirst,
      secureTextEntry: false,
    },
    {
      id: 2,
      IconName: "lock",
      value: Fieldnames.lastName,
      placeholder: enterLast,
      secureTextEntry: false,
    },
    {
      id: 3,
      IconName: "email",
      value: Fieldnames.email,
      placeholder: enterEmail,
      secureTextEntry: false,
      type: "email-address",
    },
    {
      id: 4,
      IconName: "lock",
      value: Fieldnames.password,
      placeholder: EnterPassword,
      secureTextEntry: data.secureTextEntry,
      eyeName: data.showPassword,
    },
    {
      id: 4,
      IconName: "lock",
      value: Fieldnames.confirmPassword,
      placeholder: ConfirmPassword,
      secureTextEntry: data.secureTextEntry,
      eyeName: data.showPassword,
    },
  ];
  const handleShow = () => {
    setdata((prev) => ({
      ...prev,
      showPassword: prev.showPassword === "eye" ? "eye-off" : "eye",
      secureTextEntry: !prev.secureTextEntry,
    }));
  };
  const history = useHistory();
  const dispatch = useDispatch();
  const refRBSheet = useRef<RBSheet>(null);
  const handleForm = async (values: fieldForm) => {
    const { firstName, lastName, email, password, confirmPassword } = values;
    const requestBody = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      passwordConfirm: confirmPassword,
    };
    setLoader(true);
    console.log(requestBody, "hhrequestBody");
    await userSignUpApi(requestBody)
      .then(
        (response) => {
          if (response.status === "success") {
            return (
              setLoader(false),
              setToken("jwt", response.data.token),
              dispatch(accountSignUp()),
              refRBSheet.current?.open()
            );
          } else if (response.status === "fail") {
            return setLoader(false), refRBSheet.current?.open();
          }
        },
        (err) => {
          setLoader(false);
          console.log(err, "errorssy");
          alert("invalid");
        }
      )
      .catch((error) => {
        if (error.status === 401) return alert("user and password incorrect");
      });
  };

  return (
    <>
      <GeneralView
        view={"signup"}
        headerName={SignUpHead}
        Imgsrc={require("../../../assets/images/signup2.png")}
        initialValues={data}
        fields={inputField}
        onSubmit={(values: fieldForm) => handleForm(values)}
        validationSchema={signUpValidationSchema}
        handleShow={handleShow}
        ButtonText={Loader ? "Loading...." : signUp}
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
          Title={AlreadySigned}
          Msg={ClickokTo}
          onPress={() => history.push("/Verify/email")}
          buttonTitle={Ok}
        />
      </RBSheet>
    </>
  );
}
export default SignUp;
