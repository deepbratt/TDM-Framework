import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLOR } from "../../Theme/Colors";

export const compareStyle = StyleSheet.create({
    ImageView:{
        width:wp('100%'), 
        height:hp('33.4%'), 
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"flex-start",
       marginVertical:hp('2%'), 
    },
    view1:{
        width:wp('48%'), 
        height:hp('30.4%'), 
    },
    bannerimage:{
        marginVertical:hp('.5%'),
        width:wp('48%'), 
        height:hp('19.5%'),
    },
    vsStyle:{
           position:"absolute",
           top:hp('7%'),  
           left:wp('44%'),
           backgroundColor:COLOR.primary,
           width:wp('12%'),
           height:hp('6%'),
           borderRadius:50,
            justifyContent:"center",
             alignItems:"center"
    },
    vsText:{
        fontFamily: "IBMPlexSans-Medium",
      fontSize: 16,
      color:COLOR.White
    },
    carName:{
        fontFamily: "IBMPlexSans-Bold",
        fontSize: 14,
        color:COLOR.RaisinBlack, 
        lineHeight:18
    },
    locateText:{
        fontFamily: "IBMPlexSans-Regular",
        fontSize: 12,
        color:COLOR.secondary,
        marginLeft:2,
         lineHeight:15
    },
    pText:{
        fontFamily: "IBMPlexSans-Medium",
        fontSize: 14,
        color:COLOR.primary, 
        lineHeight:18,
        marginLeft:wp('6%'), 
    },
    flexRow:{
        marginVertical:wp('1.3%'), 
        flexDirection:"row",
        alignItems:"center"
    },
    tableStyle:{
        backgroundColor:COLOR.White,
       flexDirection:"row",
       justifyContent:"space-around",
       borderRadius:6,
       alignItems:"center",
       marginTop:5,
       width:wp('99%'), 
       height:hp('7%'), 
    },
     labelStyle:{
        width:wp('25%'),
        fontFamily: "IBMPlexSans-Medium",
        fontSize: 14,
        color:COLOR.DarkCharcoal, 
        lineHeight:18,
        textAlign:"center"
     },
     textStyle:{
        width:wp('25%'),
        fontFamily: "IBMPlexSans-Regular",
        fontSize: 12,
        color:COLOR.secondary, 
        lineHeight:15,

    },
    buttonText:{
        fontFamily: "IBMPlexSans-Medium",
        fontSize: 12,
        color:COLOR.primary, 
        lineHeight:18,
        marginLeft:wp('0%'), 
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor:COLOR.primary,
        marginRight:wp('2%'),
    },
    activeStyle:{
        marginLeft:wp('2%'),  
        width:wp('32%'), 
        height:hp('6.1%'), 
        backgroundColor:COLOR.primary,
        borderRadius:22,
        justifyContent:"center"
    },
    inActiveStyle:{
        marginLeft: wp('2%'),  
        width:wp('32%'),  
        height:hp('6.1%'), 
        backgroundColor:COLOR.LightGrey,
        borderRadius:22,
        justifyContent:"center"
    },
    ////
    flexHeight:{
        flexDirection:"row",
        height:50
    },
    chip:{
        width:60,
        marginHorizontal:5,
        height:40,
        marginLeft:15,
    },
    crossIcon:{
        position:"absolute",
        top:-10,
        left:40
    },
    imageIcon:{ 
        width: wp('15%'),
         height:hp('5.7%'),
          borderRadius: 10
         },
         compareButton:{
             marginBottom:hp('1%'),
             backgroundColor:COLOR.primary,
             height:hp('4.7%'),
             width: wp('22%'),
             borderRadius:6,
            justifyContent:"center",
            alignSelf:"center"
        },
        compareText:{
            textAlign:"center",
            color:COLOR.White
        }
});
