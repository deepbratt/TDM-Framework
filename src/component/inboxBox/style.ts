import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLOR } from "../../Theme/Colors";

export const inboxBoxStyle = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:COLOR.White,
},
boxView:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    paddingTop:hp('.5%'),
},
main:{
    width:wp('94%'),
    height:hp('10.5%'),
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
//    borderRadius:6,
  },
  Div:{
       width:wp('19%'),
       height:hp('9.5%'),
       justifyContent:"center",
       alignItems:"center",
       borderRadius:50
    },
  img:{
          width:"50%",
          height:hp('4%'),
        borderRadius:50
        },
 div2: {
           width:wp('55%'),
           height:hp('10.5%'), 
       justifyContent:"space-evenly",
       marginLeft:wp('2%'),
    //    paddingRight:wp('1%'),
       borderBottomColor:COLOR.SilverBlue,
       borderBottomWidth:1

    },

 name:{  
         fontFamily: "IBMPlexSans-Bold",
         fontSize: 16,
         color:COLOR.DarkCharcoal, 
         lineHeight:20
 },
msg:{  
    fontFamily: "IBMPlexSans-Regular",
    fontSize: 14,
    // color:COLOR.DarkCharcoal, 
    lineHeight:18
      },
      icon:{
backgroundColor:COLOR.AntiFlashWhite,
width:wp('5%'),
height:hp('2.5%'), 
borderRadius:50,
justifyContent:"center",
alignItems:"center",
marginRight:6

      },
center:{
    justifyContent:"center",
    alignItems:"center"
},
   flexCenter:{
     flexDirection:"row",
     alignItems:"center"
},
    div3:{
        width:wp('16.2%'),
        height:hp('10.5%'), 
        // backgroundColor:COLOR.White,
         justifyContent:"space-evenly",
         borderBottomColor:COLOR.SilverBlue,
         borderBottomWidth:1
        },
        time:{
            alignSelf:"center",
        },
        timeText:{ 
            fontFamily: "IBMPlexSans-Regular",
           fontSize: 14,
            lineHeight:18
           },
        pText:{
            fontFamily: "IBMPlexSans-Medium",
            fontSize: 11,
            color:COLOR.White, 
            lineHeight:14
        },
        payed:{
            backgroundColor:COLOR.primary,
            width:wp('6%'),
              height:hp('3%'), 
              borderRadius:50,
              alignItems:"center",
              justifyContent:"center",
        },

});
