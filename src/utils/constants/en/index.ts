import { COLOR } from "../../../Theme/Colors";
import { loginWithfb } from "../../api/fbLogin";
export const Lorem="Lorem ipsum dolor sit amet, consectetuer";
export const elit="adipiscing elit. Aenean commodo ligula eget dolor. ";

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
    path:"/Verify/phone",
    route:"/SignUp",
    name:"Continue with Google",
    size:23,
    img:require("../../../../assets/images/buttonIcon/Original.png"),
    color:COLOR.GoogleRed,
    press:''
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

export const AlreadySigned="Already signed";
export const ClickokTo="You are Already signed, Click ok to verify";
export const Ok="Ok";
export const Signupsuccessfully="Signup successfully";
export const YouAre="You are successfully Signup, Click ok to verify";



export const enterFirst="Enter First Name";
export const enterLast="Enter Last Name";
export const ConfirmPassword="Confirm Password";
export const Locationlist = [
    { id: 1,label: "Islamabad", value: "Islamabad" },
  {id: 2, label: "Lahore", value: "Lahore" },
  {id: 3, label: "Bahawalpur", value: "Bahawalpur" },
  { id: 4,label: "Others", value: "others" },
];
