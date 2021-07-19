
import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
    container: {
      marginTop: 15,
      borderBottomWidth: 0,
    },
    section1: {
      marginVertical: 30,
      flexDirection: "row",
      width: wp('100%'), 
      height: 40,
    },
    Intro:{ width: wp('50%'),  },
    Images: { 
     width:wp('20%'), 
     marginHorizontal: 10 
  },
  flexRow:{
    flexDirection: "row", 
    alignItems: "center"
 },
  Row:{
    flexDirection: "row"},
  Name:{
    fontFamily: "IBMPlexSans-Regular",
    fontSize:16,
    lineHeight:20
  },
  lottie:{
    width:wp('3%'),
    height:hp('3%'),
  },
  locationText: {  
    fontFamily: "IBMPlexSans-Medium",
    lineHeight:17, 
    fontSize: 14 
  },
    chngLocation: {
    marginHorizontal: 15,
    fontFamily: "IBMPlexSans-Light",
    lineHeight:11, 
    fontSize: 10, 
    color: "#3A82E2"
   },
    
  DrawerButton: {
      borderBottomColor: "rgba(190, 199, 197, 1)",
      marginHorizontal: 30,
      paddingVertical: 15,
      flexDirection: "row",
      width: wp('100%'),
      borderBottomWidth: 0.5,
    },
  LinearImage: {
      maxWidth: wp('20%'),
      marginHorizontal: 5,
      marginRight: 20,
      backgroundColor: "red",
      justifyContent: "center",
      borderRadius: 4,
      color: "white",
      height: hp('4%'),
      width: wp('8%'), 
    },
    titleName:{
      fontFamily: "IBMPlexSans-Regular",
  fontSize:18,
  lineHeight:26
  
    },
  });