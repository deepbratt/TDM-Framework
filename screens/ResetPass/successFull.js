import React from 'react'
import { View,Text ,Image,TouchableOpacity} from 'react-native'
import { Avatar,} from 'react-native-paper'
import { globalStyle } from '../../Styles/globalStyle'
import { PassResetSuccessful, ResetYourPass, SelectWhichContact,  } from '../../utils/en/ResetPwconstant'
import { resetStyle } from './style'
import { LinearGradient } from 'expo-linear-gradient';
export default function RestPassword2 ({ navigation }){
    return (
    <View style={globalStyle.container}>
    <TouchableOpacity  onPress={() => navigation.goBack()}  style={resetStyle.nav}>
    <Avatar.Icon  style={resetStyle.Avataricon}   size={40} icon="arrow-left" />
    </TouchableOpacity> 
    <View style={resetStyle.mid} >
    <View style={resetStyle.img}>
       <Image fadeDuration={0}  source={require('../../assets/resetPassword/animation.png')}  />
       </View>
    <Text style={resetStyle.headText}>{PassResetSuccessful}</Text>
    <Text  style={resetStyle.detail}>{SelectWhichContact}</Text>
    <Text  style={resetStyle.detail}>{ResetYourPass}</Text>
    </View>
       <View style={resetStyle.bottom}>
       <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                            <LinearGradient colors={['#F04148', '#C20000']}
                               start={{x: 0, y: .4}} end={{x: 0, y: 1}}
                                style={resetStyle.loginButton} >
                                    <Text  style={resetStyle.loginText} >
                                        Login
                            </Text>
                            <Image source={require('../../assets/resetPassword/Shape.png')} />  
                            </LinearGradient>
                            </TouchableOpacity>
      
       </View>
    </View>
    )
}
