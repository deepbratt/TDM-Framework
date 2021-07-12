import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor: '#E5E5E5',
        justifyContent:'flex-start'
    },
    img: {
        height: 44.24,
        width: 44,
        marginTop: 53,
        marginLeft: 29,
        alignSelf: 'flex-start'
    },
    textContainer: {
        width: 185,
        height: 23,
        marginTop: 20.38,
        marginLeft: 96,
        marginRight:94
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: "center",
        color: '#313131'
    },
    textContainer1: {
        width: 269,
        height: 37,
        marginTop: 8,
        marginLeft: 59,
        marginRight:47
    },
    text1: {
        fontSize: 14,
        fontWeight: '300',
        textAlign: "center",
        color: '#666666'
    },
    buttonContainerStyle: {
        width: 316,
        height: 146,
        marginTop: 30,
        marginLeft: 29,
        marginRight: 30,
        backgroundColor: '#FFFFFF',
        borderColor: '#1A75FF',
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
        width: 316,
        height: 146,
        marginTop: 17,
        marginLeft: 29,
        marginRight: 30,
        backgroundColor: '#FFFFFF',
        borderColor: '#FFF',
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
        tintColor: '#1A75FF'
    },
    imageStyle1: {
        height: 48,
        width: 30.25,
        marginLeft: 141.88,
        marginTop: 21,
        tintColor: '#C20000'
    },
    textStyleOne: {
        fontWeight: '600',
        fontSize: 18,
        textAlign: 'center',
        color: '#313131',
        paddingTop: 17
    },
    textStyleTwo: {
        fontSize: 14,
        fontWeight: '400',
        padding: 9,
        textAlign: 'center',
        color: '#313131'
    },
    textStyleThree: {
        fontSize: 14,
        fontWeight: '400',
        padding: 9,
        textAlign: 'center',
        color: '#666666'
    },
    bottomNavigationView: {
    backgroundColor: '#fff',
    width: wp('100%'),
    height: 263,
    borderTopLeftRadius: 24,
    borderTopRightRadius:24,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
})