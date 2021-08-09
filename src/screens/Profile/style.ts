import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLOR } from "../../Theme/Colors";
export const styles = StyleSheet.create({
   
  
    alignCenter:{
        justifyContent:"center",
        alignItems:"center",
    },
    profieView:{
        marginTop:hp('5%'),
        marginBottom:hp('1%')
    },
    dateInput: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        textAlign:"left",
        justifyContent:"center",
        alignItems:"flex-start",
        color:"black",
        marginLeft:wp('4%')
      },
    itemContainerDropDrown: {
        backgroundColor: COLOR.White,
    },
    inputView:{
        marginVertical:8,
        width:wp('78%'),
        // backgroundColor: COLOR.White,
        borderBottomColor:COLOR.secondary,
        borderBottomWidth:1,
        borderRadius: 2,
        fontSize:14,
    },
    MainViewDropDown: {
        marginVertical:8,
        width:wp('78%'),
        justifyContent:"center",
        borderRadius: 1.5,
        padding:0,
    },
    itemTextDropDown: {
        fontSize: 14, 
        fontFamily: 'IBMPlexSans-Light',
        color: COLOR.secondary
    },
    textInputDropDown: {
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Medium',
        color: COLOR.DarkCharcoal
    },
    gradientStyle1: {
        width:wp('50%'),
        height:hp('7%'),
        borderRadius: 6,
        marginTop:hp('4%'),
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom:hp('2%')
    },
    gradientTextStyle: {
        fontSize: 16,
        fontFamily: 'IBMPlexSans-Medium',
        textAlign: 'center',
        alignSelf: 'center',
        color: COLOR.White
    }, 
})