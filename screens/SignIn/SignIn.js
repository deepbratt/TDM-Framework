
import { View ,Text,TouchableOpacity, Animated,  StyleSheet,} from 'react-native';
import React, { useState } from 'react'
import LogComponent from '.';
import FlipCard from 'react-native-flip-card'

export default function SignIn ({ navigation }) {
 
  const [Flipped, setFlipped] = useState(false);
  const [Clickable, setClickable] = useState(false);

  
    return (
  
 <FlipCard
 friction={10}
  perspective={1000}
  flipHorizontal={true}
  flipVertical={false}
  clickable={Clickable === true ? Flipped === true : false}
  flip={Flipped}
  onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
 style={{flex:1, justifyContent:"center",alignContent:"center" ,backgroundColor:"green",}}>
  {/* Face Side */}
<LogComponent login={true} coverImg={require('../../assets/signin.png')} onPress={()=>setFlipped(true) }></LogComponent>
  {/* Back Side */}
 <LogComponent login={false} coverImg={require('../../assets/signup/character.png')}  onPress={()=>setFlipped(true)} onClick={() => navigation.navigate("ResetPassword")} />
 
 </FlipCard> 

    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  hidden: {
    backfaceVisibility: "hidden",
  },
  card: {
    width: 200,
    height: 200,
  },
  back: {
    position: "absolute",
    top: 0,
  },
  cardItem: {
    width: "100%",
    height: "100%",
  },
  textInput: {
    fontSize: 18,
  },
});