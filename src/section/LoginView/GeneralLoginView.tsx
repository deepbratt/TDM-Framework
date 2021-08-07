import React, { FC, useState } from "react";
import {
  View,
  Image,
} from "react-native";
import { loginStyle } from "../../screens/SignIn/styles";
import { TextInput } from "react-native-paper";
import {
  text1,
  text2,
  ForgotPassword,
} from "../../utils/constants/en/index";
import CustomInput from "../../component/CustomInput/CustomInput";
import LottieView from 'lottie-react-native';
import SimpleLayout from "../../layout/simpleLayout";
import { globalStyle } from "../../Styles";
import CustomButton from "../../component/CustomButton";
import { COLOR } from "../../Theme/Colors";
import { Field, Formik } from "formik";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";
import { genralProps } from "../../../types";

const GeneralView:FC<genralProps>=({
    headerName,
    Imgsrc,
    view,
    initialValues,
    validationSchema,
    onSubmit,
    fields,
    handleShow,
    ButtonText
})=> {
    const {img,alignCenter,SubmitView,imgDiv} = loginStyle;
    const [Active, setActive] = useState("");
  return (

    <SimpleLayout header={headerName} text1={text1} text2={text2}>
    <View>
      {view === "login" &&
      <View style={img}>
      <Image
        fadeDuration={0}
        style={{ width: "100%", height: "100%" }}
        source={Imgsrc}
      />
    </View>
  }
   {view === "signup" &&
      <View style={imgDiv}>
      <Image
        fadeDuration={0}
        style={{ width: "100%", height: "100%" }}
        source={Imgsrc}
      />
    </View>
  }
      {view === "verify" &&
       <View style={img}>
       <LottieView
      autoPlay
      source={Imgsrc} />
    </View>
      } 
      <Formik 
            initialValues={initialValues} 
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            >
            {({ handleSubmit}) => (
              <View style={alignCenter}>
              {fields.map((input: { placeholder: any; value: any; secureTextEntry: any; IconName: IconSource; eyeName: IconSource; disabled: boolean | undefined;disabledField :boolean | undefined },index: string)=>{
          let ID = "TextInput"+index
          return (
            <Field
              component={CustomInput}
              placeholder={input.placeholder}
              name={input.value}
              secureText={input.secureTextEntry ? input.secureTextEntry : false}
              onFocus={() => setActive(ID)}
              onBlur={() => setActive("")}
              disabled={input.disabledField}
              leftIcon={
                <TextInput.Icon
                  size={18}
                  color={Active === ID ? COLOR.primary : COLOR.Silver}
                  name={input.IconName}
                />
              }
              rightIcon={
                <TextInput.Icon
                  size={16}
                  color={Active === ID ? COLOR.primary : COLOR.Silver}
                  name={input.eyeName}
                  onPress={handleShow}
                  disabled={input.disabled}
                />
              }
            />
          );
        })} 
         <View style={SubmitView}>
         <CustomButton buttonStyle={globalStyle.SignInButton} 
                  textStyle={globalStyle.loginText} 
                   onPress={handleSubmit} 
                  text={ButtonText} />
        </View>
   </View>
   )
  }
  </Formik>
  {
      view === "verify" && 
      <View>
          <CustomButton
            text={ForgotPassword}
            buttonStyle={globalStyle.forgetButton}
            textStyle={globalStyle.forgetText}
            linkTo="/verify-num"
          ></CustomButton>
        </View>
  }
  </View>
         
    </SimpleLayout>
  );
}
export default GeneralView;