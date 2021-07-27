import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#E5E5E5'
    },
    container: {
        width: wp('95%'),
        alignSelf: 'center',
        backgroundColor: '#FFFFFF',
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
        color: '#C20000'
    },
    dotImageStyle: {
        alignSelf: 'center',
        marginHorizontal: wp('2%'),
        resizeMode: 'contain'
    },
    timeText: {
        fontSize: 12,
        fontFamily: 'IBMPlexSans-Light',
        color: '#313131'
    },
    userNameText: {
        fontSize: 15,
        fontFamily: 'IBMPlexSans-Light',
        color: '#313131',
        marginTop:hp('0.5%')
    }
})