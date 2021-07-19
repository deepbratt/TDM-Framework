
import { SignIn, SignUp, SignInWithEmail, Verify, HomePage } from "../../screens";
import AddDetails from "../../screens/addDetails";
import CarDetails from "../../screens/carDetails";
import ConfirmPayment from "../../screens/confirmPayment";
import Notification from "../../screens/notification";
import PaymentError from "../../screens/paymentError";
import PayTokenAmount from "../../screens/payTokenAmount";
import RequestAccept from "../../screens/requestAccept";
import ResetPassword from "../../screens/resetPassword";
import Search from "../../screens/search";
import SuccessFullReset from "../../screens/successFullReset";
import TabTwoScreen from "../../screens/TabTwoScreen";
import TokenAmount from "../../screens/tokenAmount";

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
        id: 3,
        path: "/notification",
        Component: Notification,
    },
    {
        id: 4,
        path: "/addDetails",
        Component:AddDetails
    },
    {
        id: 5,
        path: "/carDetails",
        Component: CarDetails,
    },
    {
        id: 6,
        path: "/confirmPayment",
        Component:ConfirmPayment,
    },
    {
        id: 7,
        path: "/paymentError",
        Component:PaymentError,
    },
    {
        id: 8,
        path: '/payTokenAmount',
        Component:PayTokenAmount,
    },
    {
        id: 9,
        path: "/requestAccept",
        component:RequestAccept,
    },
    {
        id: 10,
        path: "/resetPasword",
        Component:ResetPassword,
    },
    {
        id: 11,
        path: '/search',
        Component:Search,
    },
    {
        id: 12,
        path: '/successFullReset',
        Component: SuccessFullReset,
    },
    {
        id: 13,
        path: '/tokenAmount',
        component:TokenAmount,
    }
   
  
   
];