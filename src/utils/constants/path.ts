
import { SignIn, SignUp,SignInWithEmail,SignInWithPhone, VerifywithEmail,VerifywithPhone, HomePage,FindCar, YourFav,Orders, Inbox, PostAd, SearchCompare, CompareProduct, SignUpwithPhone } from "../../screens";
import Chat from "../../screens/Chat/chat";


import TabTwoScreen from "../../screens/TabTwoScreen";

export const Public=[
    {
        id:1,
        path:"/SignUp/email",
        component:SignUp,
    },
    {
        id:2,
        path:"/SignIn",
        component:SignIn,
    },
    {
        id:3,
        path:"/SignIn/email",
        component:SignInWithEmail,
    },
    {
        id:4,
        path:"/Verify/email",
        component:VerifywithEmail,
    },
    {
        id:5,
        path:"/Verify/phone",
        component:VerifywithPhone,
    },
    {
        id:6,
        path:"/SignUp/phone",
        component:SignUpwithPhone,
    },
    {
        id:6,
        path:"/SignIn/phone",
        component:SignInWithPhone,
    }
];
export const protectedroute=[
    {
        id:1,
        path:"/",
        component:HomePage,
    },
    {
        id:2,
        path:"/one",
        component:TabTwoScreen,
    },
    {
        id:3,
        path:"/find-car",
        component:FindCar,
    },  
    {
        id:4,
        path:"/favourite",
        component:YourFav,
    },
    {
        id:5,
        path:"/orderlist",
        component:Orders,
    },
    {
        id:6,
        path:"/inbox",
        component:Inbox,
    },
    {
        id:7,
        path:"/postad",
        component:PostAd,
    },
    {
        id:8,
        path:"/compare",
        component:SearchCompare,
    },
    {
        id:9,
        path:"/compareProduct",
        component:CompareProduct,
    },
    {
        id:9,
        path:"/chat",
        component:Chat,
    },
   
   
];