
import { SignIn, FindCar,SignUp,YourFav,Orders, Inbox, PostAd, SearchCompare, CompareProduct,SignInWithEmail, VerifywithEmail,SignInWithPhone,SignUpwithPhone,VerifywithPhone, HomePage, PostDetails,ConfirmPayment, Notification, TokenAmount, CarDetails, AddDetails, ResetPassword, SuccessFullReset, RequestAccept, VerificationNumber, PaymentError, PayTokenAmount, YourAds, Profile } from "../../screens";
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
        id:7,
        path:"/SignIn/phone",
        component:SignInWithPhone,
    },
    {
        id:8,
        path:"/forget-pass",
        component:ResetPassword,
    },
    {
        id:9,
        path:"/success-pass",
        component:SuccessFullReset,
    },
    {
        id:10,
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
        id:10,
        path:"/chat",
        component:Chat,
    },
    {
        id:11,
        path:"/post-details",
        component:PostDetails,
    },
    {
        id:12,
        path:"/notify",
        component:Notification,
    },
    {
        id:13,
        path:"/token-amount",
        component:TokenAmount,
    },
    {
        id:14,
        path:"/car-Details/:id",
        component:CarDetails,
    },
    {
        id:15,
        path:"/add-Details",
        component:AddDetails,
    },
    {
        id:16,
        path:"/request-accept",
        component:RequestAccept,
    },
    {
        id:17,
        path:"/pay-token",
        component:PayTokenAmount,
    },
    {
        id:18,
        path:"/payment-error",
        component:PaymentError,
    },
    {
        id: 19,
        path: "/confirm-payment",
        component:ConfirmPayment
    },
    {
        id: 20,
        path: "/your-ads",
        component:YourAds
    },
    {
        id: 21,
        path: "/profile",
        component:Profile
    }
];