
import { SignIn, SignUp, SignInWithEmail, Verify, HomePage, PostDetails,ConfirmPayment, Notification, TokenAmount, CarDetails, AddDetails, ResetPassword, SuccessFullReset, RequestAccept, VerificationNumber, PaymentError, PayTokenAmount } from "../../screens";
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
    {
        id:5,
        path:"/forget-pass",
        component:ResetPassword,
    },
    {
        id:5,
        path:"/success-pass",
        component:SuccessFullReset,
    },
    {
        id:6,
        path:"/verify-num",
        component:VerificationNumber,
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
        id:12,
        path:"/post-details",
        component:PostDetails,
    },
    {
        id:13,
        path:"/notify",
        component:Notification,
    },
    {
        id:14,
        path:"/token-amount",
        component:TokenAmount,
    },
    {
        id:15,
        path:"/car-Details",
        component:CarDetails,
    },
    {
        id:16,
        path:"/add-Details",
        component:AddDetails,
    },
    {
        id:17,
        path:"/request-accept",
        component:RequestAccept,
    },
    {
        id:18,
        path:"/pay-token",
        component:PayTokenAmount,
    },
    {
        id:19,
        path:"/payment-error",
        component:PaymentError,
    },
    {
        id: 20,
        path: "/verification-number",
        component:VerificationNumber,
    },
    {
        id: 21,
        path: "/successfullrest",
        component:SuccessFullReset,
    },
    {
        id: 22,
        path: "/resetpassword",
        component:ResetPassword,
    },
    {
        id: 23,
        path: "/confirmpayment",
        component:ConfirmPayment,
    },
    {
        id: 24,
        path: "/postdetails",
        component:PostDetails,
    },
   
];