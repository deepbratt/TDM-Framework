import React from 'react'
import LogComponent from '../SignIn'

export default function SignUpLog ({ navigation }) {
    return (
<LogComponent login={false} coverImg={require('../../assets/signup/character.png')}  onPress={() => navigation.navigate("SignUp")} onClick={() => navigation.navigate("ResetPassword")} />
  
    )
}
