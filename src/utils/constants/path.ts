import { SignIn, SignUp, SignInWithEmail, Verify } from "../../screens";
import TabOneScreen from "../../screens/TabOneScreen";
import TabTwoScreen from "../../screens/TabTwoScreen";

export const Public=[
    {
        id:1,
        path:"/SignUp",
        component:SignUp,
    },
    {
        id:2,
        path:"/SignIn",
        component:SignIn,
    },
    {
        id:3,
        path:"/SignInWithEmail",
        component:SignInWithEmail,
    },
    {
        id:4,
        path:"/Verify",
        component:Verify,
    },
];
export const protectedroute=[
    {
        id:1,
        path:"/",
        component:TabOneScreen,
    },
    {
        id:2,
        path:"/one",
        component:TabTwoScreen,
    },
   
];