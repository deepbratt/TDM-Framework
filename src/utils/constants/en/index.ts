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



export const data= [
    
    {id :1,
        path:"/SignIn/phone",
        route:"/SignUp/phone",
    name:"Continue with Mobile Number",
img:require("../../../../assets/images/buttonIcon/coolicond.png")
},
{id :2,
    // path:"/SignUp",
    // route:"/SignUp",
    name:"Continue with Google",
    img: require("../../../../assets/images/buttonIcon/Original.png"),
    size: 23,
    press:signInAsync,
},
{id :3,
    path:"/SignUp",
    route:"/SignUp",
    name:"Continue with Facebook",
img:require("../../../../assets/images/buttonIcon/fb.png")
},
{id :4,
    path:"/SignIn/email",
    route:"/SignUp/email",
    name:"Continue with Email",
    img: require("../../../../assets/images/buttonIcon/email.png"),
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
