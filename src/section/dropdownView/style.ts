import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLOR } from "../../Theme/Colors";
export const styles = StyleSheet.create({
    Container: {
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
   
})