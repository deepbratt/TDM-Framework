import React, { FC } from 'react'
import { View, Text, Image} from 'react-native'
import { loginStyle } from "./styles"
import { data, SignInHead, text1, text2, alreadyAccount, signUp, Login, SignUpHead, ForgotPassword } from '../../utils/constants/en/index';
import SimpleLayout from "../../layout/simpleLayout";
import { SignInProp } from '../../../types';
import CustomButton from '../../component/CustomButton';


const LogComponent: FC<SignInProp> = ({ onPress, login, onClick }) => {


  return (
    <SimpleLayout header={login ? SignInHead : SignUpHead} text1={text1} text2={text2}>

      <View style={loginStyle.mid}>
        <View style={loginStyle.img}>
          {
            login ?
              <Image fadeDuration={0} style={{ width: "100%", height: "100%" }} source={require('../../../assets/images/signin.png')} />
              :
              <Image fadeDuration={0} style={{ width: "100%", height: "100%" }} source={require('../../../assets/images/signup.png')} />

          }

        </View>
        <View style={{
          alignItems: "center",
          justifyContent: "center",
        }}>
          {data.map((item) => {
            return (
              <CustomButton
                linkTo={login ? item.path : item.route}
                leftImg={true}
                key={item.id}
                buttonStyle={loginStyle.button}
                textStyle={loginStyle.buttonText}
                text={item.name}
                Img={item.img}
              />
            );
          })}
        </View>
        <Text style={{ textAlign: "right", marginHorizontal: 40, marginVertical: 2 }} > <Text style={loginStyle.account}>{alreadyAccount} </Text><Text onPress={onClick} style={loginStyle.signUp} >{login ? Login : signUp}</Text> </Text>

      </View>

      {
        !login &&
        <View >
          <CustomButton text={ForgotPassword}
            buttonStyle={loginStyle.forgetButton}
            textStyle={loginStyle.forgetText} linkTo="/forgot" />
        </View>
      }
    </SimpleLayout>
  )
}
export default LogComponent;
