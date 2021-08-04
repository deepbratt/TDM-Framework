import { COLOR } from "../../Theme/Colors";

export const Home = "Home";
export const Notification = "Notification";
export const Chat = "Chat";
export const Favorites = "Favorites";


export const Browse="Browse Categories";
export const categotryList = [
    { id: 1,onPress:"/one", viewStyle: COLOR.PaleCyan, ProductName: "Cars", ProductImage: require("../../../assets/images/category/car.png") },
    { id: 2, onPress:"/",viewStyle: COLOR.Maize, ProductName: "Property", ProductImage: require("../../../assets/images/category/houses.png") },
    { id: 3,onPress:"/", viewStyle: COLOR.MiddleGreen, ProductName: "Electronics", ProductImage: require("../../../assets/images/category/product.png") },

];
export const sellList = [
  { id: 1,onPress:"/one", viewStyle: COLOR.PaleCyan, ProductName: "AutoMobiles", ProductImage: require("../../../assets/images/category/car.png") },
  { id: 2, onPress:"/",viewStyle: COLOR.Maize, ProductName: "Property", ProductImage: require("../../../assets/images/category/houses.png") },
  { id: 3,onPress:"/", viewStyle: COLOR.MiddleGreen, ProductName: "Electronics", ProductImage: require("../../../assets/images/category/product.png") },

];
export const YourAdsTitle="Your Ads";
export const Choosewhat="Choose what do you want to sell";
export const SellYou="Sell You Car from Home";
export const Par1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. ";
export const BookNow="Book Now";

export const SearchedCars="Most Searched Cars";
export const Items = [
  {
    title: "Rs. 50 lakh ",
    text: "Toyota Yaris iA",
    src: require('../../../assets/images/slider/car.png'),
  },
  {
    title: "Rs. 50 lakh ",
    text: "Toyota Yaris iA",
      src: require('../../../assets/images/slider/car.png'),


  },
  {
    title: "Rs. 50 lakh ",
    text: "Toyota Yaris iA",
      src: require('../../../assets/images/slider/car.png'),

    
  },
  
];
export const MostPopular="Most Popular Cars by Price";
export const popularProduct = [
  { id: 1, title: "Cars Under 5lakh" },
  { id: 2, title: "5lakh-10lakh" },
  { id: 3, title: "more than" },

];
export const compareProduct = [
  { id: 1, title: "Specification" },
  { id: 2, title: "Features" },
  { id: 3, title: "Review" },

];


