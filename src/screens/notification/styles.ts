import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLOR } from "../../Theme/Colors";
export const styles = StyleSheet.create({
    main: {
        width: wp('100%'),
        height:hp('100%'),
        backgroundColor:  COLOR.background,
    },
    flatListStyle:{
        marginTop: hp('1%')
        
    },
    container: {
        width: wp('95%'),
        alignSelf: 'center',
        backgroundColor:COLOR.White,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderRadius: 6,
        marginVertical: hp('0.8%'),
    },
    avatarView: {
        marginHorizontal: wp('3%'),
        marginVertical: hp('1.5%')
    },
    avatarSourceStyle: {
        resizeMode: 'contain',
        margin: 15
    },
    infomainContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    infoView: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: wp('3%')
    },
    applicationNameText: {
        fontSize: 12,
        fontFamily: 'IBMPlexSans-Light',
        color: COLOR.primary
    },
    dotImageStyle: {
        alignSelf: 'center',
        marginHorizontal: wp('2%'),
        resizeMode: 'contain'
    },
    timeText: {
        fontSize: 12,
        fontFamily: 'IBMPlexSans-Light',
        color: COLOR.DarkCharcoal
    },
    userNameText: {
        fontSize: 15,
        fontFamily: 'IBMPlexSans-Light',
        color: COLOR.DarkCharcoal,
        marginTop:hp('0.5%')
    }
})