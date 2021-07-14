import { StyleSheet, Dimensions } from "react-native";
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;
export const HomeStyle = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:"#ffff",
},

inputView:{
flex:1,
justifyContent:"center",
alignItems:"center",
marginTop:25,
marginBottom:5,

},
searchStyle:{
  height:HEIGHT/12.1,
  width:WIDTH /1.1,
    backgroundColor: "rgba(33, 33, 33, 0.08)",
borderRadius: 6,
},
title:{
    textAlign:"left",
         fontFamily: "IBMPlexSans-Medium",
         marginVertical:5,
         marginHorizontal:10,
         marginBottom:10,
     fontSize:18,
},
categoryBox:{
    flexDirection:"row",
    justifyContent:"space-around"
},
sellView:{
    width:200,
    position:"absolute",
    left:"41%",
    top:"8%"},
    carsView:{
        flexDirection:"row",
    paddingVertical:15,
    marginVertical:15,
    backgroundColor:"#E4F6FF"
},
head:{
    fontFamily: "IBMPlexSans-Medium",
    color:"#C20000",
fontSize:18,
lineHeight:23,
textAlign:"right"
},
bannerimage:{
   width:240,
   height:150 ,
},
buttonView:{
    alignItems:"flex-end",
justifyContent:"center",
marginVertical:30
},
button:{
    backgroundColor: "#F6AE39",
borderRadius: 6,
width:102,
height:35,
justifyContent:"center",
alignItems:"center"
},
buttonText:{
    fontFamily: "IBMPlexSans-Medium",
    color:"#ffff",
fontSize:14,
lineHeight:18,
},
paragraph:{
    fontFamily: "IBMPlexSans-Light",
    color:"#666666",
fontSize:14,
textAlign:"right"
},
flexRow:{ flexDirection: "row", justifyContent: "space-between",marginVertical:8 },
VerticalMargin:{marginVertical:15,},
activeStyle:{
    marginHorizontal:4,
    width:166,
    height:42,
    backgroundColor:"#C20000",
    borderRadius:20,
    justifyContent:"center"
},
inActiveStyle:{
    marginHorizontal:4,
    width:166,
    height:42,
    backgroundColor:"rgba(33, 33, 33, 0.08)",
    borderRadius:20,
    justifyContent:"center"
},
activeText:{
    fontFamily: "IBMPlexSans-Regular",
    fontSize: 14,
    letterSpacing: .6,
    lineHeight: 20,
    textAlign: "center",
    color: "#ffff",
  },
  inActiveText:{
    fontFamily: "IBMPlexSans-Regular",
    fontSize: 14,
    letterSpacing: .6,
    lineHeight: 20,
    textAlign: "center",
    color: "#313131",
  }



});
