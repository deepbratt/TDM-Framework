import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const HomeStyle = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:"#ffff",
},
inputView:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    marginTop:hp('3%'),
    marginBottom:hp('1%')
},
searchStyle:{
    height:hp('8%'), 
    width:wp('91%'), 
    backgroundColor: "rgba(33, 33, 33, 0.08)",
    borderRadius: 6,
},
title:{
    textAlign:"left",
    fontFamily: "IBMPlexSans-Medium",
    marginTop:hp('1%'),
    marginHorizontal:wp('4.6%'), 
    marginBottom:hp('3%'),
    fontSize:18,
},
categoryBox:{
    flexDirection:"row",
    justifyContent:"space-around"
},
sellView:{
    width:wp('55%'), //200
    position:"absolute",
    left:"41%",
    top:"8%"},
    carsView:{
    flexDirection:"row",
    paddingVertical:  hp('2%'), //15
    marginVertical: hp('2%'),
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
   width:wp('63%'), //240
   height:hp('21%'), //150
},
buttonView:{
    alignItems:"flex-end",
    justifyContent:"center",
    marginVertical:hp('4.2%'), 
},
button:{
    backgroundColor: "#F6AE39",
    borderRadius: 6,
    width:wp('28%'),
    height:hp('5%'), 
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
flexRow:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical:8 },
VerticalMargin:{
    marginVertical:hp('2%'), 
},
activeStyle:{
    marginLeft:wp('2%'),  
    width:wp('49%'), 
    height:hp('6.1%'), 
    backgroundColor:"#C20000",
    borderRadius:22,
    justifyContent:"center"
},
inActiveStyle:{
    marginLeft: wp('2%'),  
    width:wp('49%'),  
    height:hp('6.1%'), 
    backgroundColor:"rgba(33, 33, 33, 0.08)",
    borderRadius:22,
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
