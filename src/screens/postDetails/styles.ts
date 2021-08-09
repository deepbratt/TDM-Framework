import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLOR } from "../../Theme/Colors";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        height: hp('100%'),
        width: wp('100%'),
        backgroundColor:  COLOR.background,
    },
    borderView: {
        width: wp('100%'),
        backgroundColor: '#EBEBEB',
        borderWidth: 0.5,
        marginTop: hp('1%')
    },
    dropdownContainer: {
        width: wp('95%'),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: hp('1%')
    },
    iconView: {
        width: wp('10%'),
        height: hp('5%'),
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: COLOR.GhostWhite
    },
    buttonIcon: {
        alignSelf: 'center',
        resizeMode: 'contain',
        tintColor: COLOR.DarkCharcoal,
    },
    itemContainerDropDrown: {
        backgroundColor: COLOR.White
    },
    MainViewDropDown: {
        width: wp('80%'),
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
        width:wp('80%'),
        borderRadius: 6,
        marginTop:hp('4%'),
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingTop: hp('1.5%'),
        paddingBottom: hp('1.5%'),
        marginBottom:hp('2%')
    },
    gradientTextStyle: {
        fontSize: 16,
        fontFamily: 'IBMPlexSans-Medium',
        textAlign: 'center',
        alignSelf: 'center',
        color: COLOR.White
    },
    descriptionInput: {
        width: wp('80%'),
        backgroundColor:"transparent",
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Light',
        paddingLeft: wp('2.5%')
    },
    Inputs: {
        width: wp('80%'),
        backgroundColor:"transparent",
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Light',
        paddingLeft: wp('2.5%'),
        borderBottomColor:COLOR.secondary,
        borderBottomWidth:1.1,
        color:COLOR.primary,
    },
    error: {
        width: wp('80%'),
        backgroundColor:"transparent",
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Light',
        paddingLeft: wp('2.5%'),
        color:COLOR.primary,
        borderBottomColor:COLOR.primary,
        borderBottomWidth:1.1
        
    },
    errorText: {
       lineHeight:25,
       marginHorizontal:15,
        fontSize: 12,
        color:COLOR.primary,
        
    },
    thumbnail: {
        width: wp('95%'),
        height: hp('25%'),
        alignSelf: 'center',
        resizeMode: 'cover',
        borderRadius: 8
      },
      main: {
        height: hp('25%'),
        width: wp('95%'),
        borderWidth: 1,
        borderRadius: 8,
        borderStyle: 'dashed',
        borderColor: '#FF3933',
        backgroundColor: COLOR.background,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: hp('2%'),
      },
      containerss: {
        // height: hp('25%'),
        justifyContent: 'center',
        width: wp('95%'),
        alignSelf: 'center',
        marginTop: hp('5%'),
        backgroundColor:"red"
      },
})