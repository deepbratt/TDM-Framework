import * as Facebook from 'expo-facebook';
import { Alert } from "react-native";
import axios from "axios";
export const Lorem="Lorem ipsum dolor sit amet, consectetuer";
export const elit = "adipiscing elit. Aenean commodo ligula eget dolor. ";
import { COLOR } from "../../../Theme/Colors";
import * as GoogleSignIn from "expo-google-sign-in";
import { protectedroute } from "../path";
import { login } from "../../../redux/reducers/authSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-native";

// const initAsyc = async () => {
//     await GoogleSignIn.initAsync({
//       clientId: "",
//     });
//     syncUserWithAsync();
//   };

//   const syncUserWithAsync = async () => {
//       const user = await GoogleSignIn.signInSilentlyAsync();
// };
  
const signInAsync = async () => {
    // const dispatch = useDispatch();
    // let history = useHistory();
    try {
        const res=await GoogleSignIn.askForPlayServicesAsync();
        const { type, user } = await GoogleSignIn.signInAsync();
        if (type === "success") {
            // return (
                console.log('response', res)
            //     dispatch(login()),
            //     history.push('/')
            // )
        }
        else {
            alert("Failed to SignIn")
        }
    } catch ({ message }) {
        alert("Login:Error" + message);
    }
};






const loginWithfb=async()=>{
    // console.log("fb"),
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
        const response =  await axios.post('http://ada93485b9c7f4d93b071069afef8073-bdc392983b881963.elb.us-east-2.amazonaws.com/v1/Users/facebook-auth')
        Alert.alert('Logged in!');
        console.log("response",response)
      } else if (type === 'cancel') {
            return console.log("fbcancel",type);
        }
      
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }




export const data= [
    
    {id :1,
        path:"/SignIn/phone",
        route:"/SignUp/phone",
        name:"Continue with Mobile Number",
        size:24,
        img:require("../../../../assets/images/buttonIcon/coolicond.png"),
        color:COLOR.DarkCharcoal,
        press:''
},
{id :2,
    // path:"/SignUp",
    // route:"/SignUp",
    name:"Continue with Google",
    img: require("../../../../assets/images/buttonIcon/Original.png"),
    size: 23,
    press:signInAsync,
    color:COLOR.GoogleRed,
},
{id :3,
    // path:"/SignUp",
    // route:"/SignUp",
    name:"Continue with Facebook",
    img:"facebook",
    size:29,
    color:COLOR.BlueCrayola,
    press:loginWithfb
},
{id :4,
    path:"/SignIn/email",
    route:"/SignUp/email",
    name:"Continue with Email",
    size:25,
    img:require("../../../../assets/images/buttonIcon/email.png"),
    color:COLOR.DarkCharcoal,
    press:""

},


] ;
export const SignUpHead="Sign Up To Continue";
export const enterEmail="Enter Email";
export const EnterPassword="Enter Password";

export const SignInHead="Sign In To Continue";
export const text1="Lorem ipsum dolor sit amet, consectetuer";
export const text2="adipiscing elit. Aenean commodo ligula eget dolor. ";
export const alreadyAccount="Already have an account?";

export const signUp="Sign Up";
export const Login="Log In";
export const Submit="Submit";
export const ByContinuingyou="By Continuing you agree to our";
export const TermsOfuse="Terms of use";
export const And="and";
export const PrivacyPolicy ="Privacy Policy ";

export const VerifyYourAccount="Verify Your Account";
export const EnteryourNumber="Enter your Number";
export const EnterdigitCode="Enter 6 digit Code";
export const ForgotPassword="Forgot password?";

export const enterFirst="Enter First Name";
export const enterLast="Enter Last Name";
export const ConfirmPassword="Confirm Password";
export const Locationlist = [
    { id: 1,label: "Islamabad", value: "Islamabad" },
  {id: 2, label: "Lahore", value: "Lahore" },
  {id: 3, label: "Bahawalpur", value: "Bahawalpur" },
  { id: 4,label: "Others", value: "others" },
];
