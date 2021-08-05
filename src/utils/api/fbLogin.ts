import * as Facebook from 'expo-facebook';
import { Alert } from "react-native";
import { FbLogin } from '.';

export const loginWithfb=async()=>{
    try {
      await Facebook.initializeAsync({
        appId: '598466794467584',
      });
      const {
        type,
        token,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
      console.log("fbmsg",type,token);
      if (type === 'success') {
        await FbLogin().then((response) => {
          console.log("response",response)
       if (response.status === 'success'){
        Alert.alert('Logged in!')
      }
      else {
        Alert.alert('Invalid Logged in!');
      }
  } 
  ).catch(error=>{
      if (error.status === 401) return alert(error); 
     }) 
} else if (type === 'cancel') {
            return console.log("fbcancel",type);
        }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }


 