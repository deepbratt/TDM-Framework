import { StyleSheet } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor: '#E5E5E5',
        justifyContent: 'flex-start'
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
        width: 138,
        height: 46,
        marginTop: 267.38,
        marginLeft: 119,
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
        marginLeft: 53,
    },
    text1: {
        fontSize: 14,
        fontWeight: '300',
        textAlign: "center",
        color: '#666666'
    },
    gradientStyle: {
        width: 315,
        height: 58,
        borderRadius: 6,
        marginTop: 273,
        marginLeft: 30,
        marginRight: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf:'center'
    },
    gradientTextStyle: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        alignSelf: 'center',
        color: '#FFFFFF'
    },
    gradientImageStyle: {
        height: 9,
        width: 16,
        tintColor: '#FFFFFF',
        alignSelf: 'center',
        marginLeft: 10
    }
})