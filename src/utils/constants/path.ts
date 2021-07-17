
import { SignIn, SignUp, SignInWithEmail, Verify, HomePage,FindCar, YourFav,Orders } from "../../screens";

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
        path:"/f",
        component:YourFav,
    },
    {
        id:4,
        path:"/fav",
        component:Orders,
    },
  
   
];