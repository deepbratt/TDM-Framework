
import { View } from 'native-base';
import React from 'react'
import LogComponent from '.';


export default function SignIn ({ navigation }) {
    return (
        <LogComponent login={true} coverImg={require('../../assets/signin.png')} onPress={() => navigation.navigate("SignUpLog" )}/>
        
    );
}
