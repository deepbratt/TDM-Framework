import { useDispatch } from "react-redux";
import { useHistory } from "react-router-native";
import { logout } from "../../redux/reducers/authSlice";

 
export const drawerItem=[
    {
        id:1,
        name:"Orders",
        img:require('../../../assets/images/drawer/store.png'),
        color:"rgba(194, 0, 0, 1)",
        link:"/orderlist",
        width:"50%",height:"60%",
        onPress:()=>console.log("Drawer press")
    },
    {
        id:2,
        name:"Comparision ",
        img:require('../../../assets/images/drawer/comparison.png'),
        color:"rgba(194, 0, 0, 1)",
        link:"/compare",
        width:"50%",height:"33%",
        onPress:()=>console.log("Comparision")
    },
    {
        id:3,
        name:"Shortlist Items",
        img: require('../../../assets/images/drawer/order.png'),
        color:"rgba(194, 0, 0, 1)",
        link:"/short-list",
        width:"50%",height:"50%",
        onPress:()=>console.log("Drawer press")
    },
    {
        id:4,
        name:"Your Ads",
        img:require('../../../assets/images/drawer/adds.png'),
        color:"rgba(194, 0, 0, 1)",
        width:"60%",height:"60%",
        link:"/your-ads",
        onPress:()=>console.log("Drawer press")
    },
    {
        id:5,
        name:"Favourites",
        img: require('../../../assets/images/drawer/like.png'),
        color:"rgba(194, 0, 0, 1)",
        link:"/favourite",
        width:"50%",height:"50%",
        onPress:()=>console.log("Drawer press")
    },
    {
        id:6,
        name:"Booked Items",
        img:require('../../../assets/images/drawer/booked.png'),
        color:"rgba(194, 0, 0, 1)",
        width:"40%",height:"60%",
        link:"/bookedItems",
        onPress:()=>console.log("Booked Items")
    },
    {
        id:7,
        name:"Buyer Request",
        img:require('../../../assets/images/drawer/bellIcon.png'),
        width:"50%",height:"55%",
        color:"rgba(194, 0, 0, 1)",
        link:"/find-car",
        onPress:()=>console.log("Drawer press")
    },
    {
        id:8,
        name:"Help",
        img:require('../../../assets/images/drawer/help.png'),
        width:"58%",height:"57%",
        link:"notification",
        color:"rgba(194, 0, 0, 1)",
        onPress:()=>console.log("Drawer press")
    },
    // {
    //     id:8,
    //     name:"Logout",
    //     img:require('../../../assets/images/drawer/logout.png'),
    //     width:"58%",height:"57%",
    //     link:"notification",
    //     color:"rgba(194, 0, 0, 1)",


    // },
    
]
export const Islamabad="Islamabad"