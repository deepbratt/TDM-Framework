import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLOR } from "../../Theme/Colors";

export const boxStyle = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:COLOR.White,
},
boxView:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    marginTop:hp('1.5%'),
},
main:{
    width:wp('91%'),
    height:hp('13%'), 
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
   borderRadius:6,
  },
  Div:{
       width:wp('28%'),
       height:hp('13%'), 
    },
  img:{
          width:"100%",
          height:hp('13%'),
          borderTopLeftRadius:6,
          borderBottomLeftRadius:6
        },
 div2: {
           width:wp('47%'),
           height:hp('13%'), 
           backgroundColor:COLOR.White, 
       justifyContent:"space-around",
       paddingLeft:wp('1.2%'),
       paddingRight:wp('1%'),

    },
  price:{  
      fontFamily: "IBMPlexSans-Medium",
      fontSize: 14,
      color:COLOR.primary, 
      lineHeight:18
        },
 name:{  
         fontFamily: "IBMPlexSans-SemiBold",
         fontSize: 16,
         color:COLOR.RaisinBlack, 
         lineHeight:20
 },
  KmText:{  
    fontFamily: "IBMPlexSans-Regular",
    fontSize: 10,
    color:COLOR.secondary,
    lineHeight:13
},
center:{
    justifyContent:"center",
    alignItems:"center"
},
   location:{ 
     fontFamily: "IBMPlexSans-Regular",
    fontSize: 12,
    color:COLOR.secondary,
     lineHeight:15
    },
    div3:{
        width:wp('16.2%'),
        height:hp('13%'), 
        backgroundColor:COLOR.White,
         justifyContent:"space-between",
         borderTopRightRadius:6,
          borderBottomRightRadius:6
        },
        dateText:{
            alignSelf:"center",
            marginBottom:hp('1%'), 
        },
  icon:{
    marginTop:hp('1.3%'), 
   },
        pending:{
            width:wp('14.2%'),
              height:22, 
              borderRadius:4,
              alignItems:"center",
              justifyContent:"center",
              marginTop:hp('1.3%'), 
              
        },
        pText:{
            fontFamily: "IBMPlexSans-Medium",
            fontSize: 11,
            color:COLOR.White, 
            lineHeight:14
        },
        payed:{
            backgroundColor:COLOR.KellyGreen,
            width:wp('14.2%'),
              height:22, 
              borderRadius:4,
              alignItems:"center",
              justifyContent:"center",
              marginTop:hp('1.3%'), 
              
        },

});
