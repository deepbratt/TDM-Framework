import React,{useState} from 'react'
import { View,Text ,Image,TouchableOpacity, TextInput} from 'react-native'
import { Avatar, Card, Paragraph, Title,} from 'react-native-paper'
import { globalStyle } from '../../Styles/globalStyle'
import { ForgetYourPassword, PleaseEnterDigit, ResetYourPass, SelectWhichContact, ViaEmail, ViaSMS } from '../../utils/en/ResetPwconstant'
import { resetStyle } from './style'
import Modal from 'react-native-modal';
import { LinearGradient } from 'expo-linear-gradient';
export default function RestPassword ({navigation}) {
    const [isModalVisible, setModalVisible] = useState(false);
   
  const toggleModal = () => {
    setModalVisible(true);
  };
  const [value, setvalue] = useState("");
  const values = value.split("");
  const CODE_LENGTH = new Array(4).fill(0);
let input="123451230345";
    //use slice to remove first 12 elements
    let first12 = input.slice(0, 8);
    //define what char to use to replace numbers
    let char = '●'
    let repeatedChar = char.repeat(input.length -4);
    // replace numbers with repeated char
    first12 = first12.replace(first12, repeatedChar);
    let showDigit=input.slice(input.length-4);
    //concat hidden char with last 4 digits of input
    let hiddenNumbers = first12 + showDigit;
    let separate=hiddenNumbers.match(/.{1,4}/g);
    let numCode=separate.join(' ');

 var email = "aaabcdal@gmail.com";
 let split = email.split('@')
 var output;
 output=new Array(split[0].length - 1).fill('●').join('') + email.substr(6, email.indexOf('@'))  

    return (
    <View style={globalStyle.container}>
     <TouchableOpacity  onPress={() => navigation.goBack()}  style={resetStyle.nav}>
    <Avatar.Icon  style={resetStyle.Avataricon}   size={40} icon="arrow-left" />
    </TouchableOpacity> 
    <View style={resetStyle.top} >
    <Text style={resetStyle.headText}>{ForgetYourPassword}</Text>
    <Text  style={resetStyle.detail}>{SelectWhichContact}</Text>
    <Text  style={resetStyle.detail}>{ResetYourPass}</Text>
    </View>
       <View style={resetStyle.mid}>
       <Card style={resetStyle.card} onPress={toggleModal}>
           <Card.Content style={resetStyle.Content}>
              <View style={resetStyle.icon}>
               <Image fadeDuration={0}   source={require('../../assets/resetPassword/phone.png')}  />
               </View>
               <Title  style={resetStyle.headText}>{ViaSMS}</Title>
               <Paragraph style={{display:"flex",flexDirection:"column"}}>
                   
                   <Text  style={resetStyle.emailDigit}>{numCode}</Text>

               </Paragraph>
           </Card.Content>
       </Card>
       <Card style={resetStyle.card2}>
           <Card.Content style={resetStyle.Content}>
              <View style={resetStyle.icon}>
               <Image fadeDuration={0}   source={require('../../assets/resetPassword/email.png')}  />
               </View>
               <Title  style={resetStyle.headText}>{ViaEmail}</Title>
               <Paragraph style={{display:"flex",flexDirection:"column"}}>
                   
                   <Text  style={resetStyle.emailDigit}>{output}</Text>
               
               </Paragraph>
           </Card.Content>
       </Card>
    

       </View>
       <Modal 
         isVisible={isModalVisible}
  onSwipeComplete={() => setModalVisible(false)}
  swipeDirection="down"

  style={{ justifyContent: 'flex-end', margin:0,alignItems:"center"}}
       >
        <View   style={resetStyle.modal} >
          <View  style={resetStyle.digitBox}>
            {CODE_LENGTH.map((index) => (
              <TextInput
                value={values[index]}
                keyboardType={'numeric'}
                maxLength={1}
                style={[resetStyle.otpText,resetStyle.display]}
                autoFocus={index === 0 ? true : undefined}
                key={index}
              />
            ))}
          </View>
        
<View style={resetStyle.digit}>
<Text style={resetStyle.digitalText}>{PleaseEnterDigit}</Text>
</View>  
        <TouchableOpacity onPress={() => navigation.navigate("RestPassword2") }>
                            <LinearGradient colors={['#F04148', '#C20000']}
                               start={{x: 0, y: .4}} end={{x: 0, y: 1}}
                                style={resetStyle.loginButton} >
                                    <Text  style={resetStyle.loginText} >
                                        Next
                            </Text>
                            <Image source={require('../../assets/resetPassword/Shape.png')} />  
                            </LinearGradient>
                            </TouchableOpacity>
        </View>
      </Modal>
    </View>
    )
}
