import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor: '#E5E5E5',
        justifyContent:'flex-start',
    },
    img: {
        height: 48,
        width: 48,
        marginTop: 53,
        marginLeft: 29,
        alignSelf: 'flex-start',
        resizeMode: 'contain',
    },
    textContainer: {
        width: wp('65%'),
        alignSelf: 'center',
        marginTop:hp('5%'),
    },
    text: {
        fontSize: 18,
        fontFamily: 'IBMPlexSans-SemiBold',
        textAlign: "center",
        color: '#313131'
    },
    textContainer1: {
        flex:1,
        width: wp('65%'),
        alignSelf: 'center',
        marginTop:hp('2%'),
    },
    text1: {
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Light',
        textAlign: "center",
        color: '#666666'
    },
    buttonContainerStyle: {
        width: wp('80%'),
        marginTop:hp('3%'),
        backgroundColor: '#FFFFFF',
        borderColor: '#1A75FF',
        alignSelf:'center',
        borderWidth: 1,
        borderRadius: 11,
        shadowColor: '#CCCCCC',
        shadowRadius: 14,
        shadowOffset: {
            width: 0,
            height:1,
        },
        shadowOpacity: 0.25,
        elevation:5
    },
    buttonContainerStyle1: {
        width: wp('80%'),
        marginTop:hp('3%'),
        backgroundColor: '#FFFFFF',
        borderColor: '#FFF',
        alignSelf:'center',
        borderWidth: 1,
        borderRadius: 11,
        shadowColor: '#CCCCCC',
        shadowRadius: 14,
        shadowOffset: {
            width: 0,
            height:1,
        },
        shadowOpacity: 0.25,
        elevation:5
    },
    imageStyle: {
        height: 48,
        width: 30.25,
        marginLeft: 141.88,
        marginTop: 21,
        tintColor: '#1A75FF',
        resizeMode:'cover'
    },
    imageStyle1: {
        height: 48,
        width: 50,
        marginLeft: 131.88,
        marginTop: 21,
        tintColor: '#C20000',
        resizeMode:'cover'
    },
    textStyleOne: {
        fontFamily: 'IBMPlexSans-SemiBold',
        fontSize: 18,
        textAlign: 'center',
        color: '#313131',
        paddingTop: 17
    },
    textStyleTwo: {
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Light',
        paddingTop: 9,
        paddingBottom:9,
        textAlign: 'center',
        color: '#313131'
    },
    textStyleThree: {
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Light',
        paddingTop: 9,
        paddingBottom:9,
        paddingLeft:4,
        textAlign: 'center',
        color: '#666666'
    },
    bottomNavigationView: {
        backgroundColor: '#fff',
        width: wp('100%'),
        height: 263,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
})