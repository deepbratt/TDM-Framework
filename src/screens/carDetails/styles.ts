import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
    scrollView: {
        height: hp('100%'),
        width:wp('100%'),
        backgroundColor: '#E5E5E5',
    },
    amountMainContainer: {
        width: wp('95%'),
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: 'center',
        marginTop: wp('10%')
    },
    amountText: {
        fontSize: 18,
        fontWeight: '500',
        color: "#C20000"
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    shareTouchableStyle: {
        height: hp('3%'),
        width: wp('9%'),
        alignSelf: 'center',
        marginLeft: wp('2%')
    },
    buttonIcon: {
        padding: wp('2%'),
        alignSelf: 'center',
        resizeMode: 'cover'
    },
    brandTextView: {
        width: wp('95%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginTop: hp('1%')
    },
    brandNameText: {
        fontSize: 14,
        fontWeight: '700',
        color: '#212121'
    },
    brandStatusView: {
        width: wp('10%'),
        backgroundColor: '#5AC8FA',
        borderRadius: 6
    },
    brandStatusText: {
        fontSize: 12,
        fontWeight: '500',
        color: '#FFFFFF',
        textAlign: 'center'
    },
    productInfoMainView: {
        flexDirection: 'column',
        width: '95%',
        alignSelf: 'center',
        marginTop: wp('2%')
    },
    productInfoSubView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop:hp('3%')
    },
    infoView: {
        flexDirection: 'column',
        justifyContent: "space-between"
    },
    infoText: {
        fontSize: 12,
        fontWeight: '500',
        color: '#979797',
        paddingTop: hp('0.5%')
    },
    infoHeading: {
        fontSize: 14,
        fontWeight: '500',
        color: "#313131",
        paddingTop: hp('0.5%')
    },
    descriptionHeading: {
        width: wp('95%'),
        alignSelf: 'center',
        fontSize: 14,
        fontWeight: '500',
        color: '#313131',
        marginTop: hp('3%')
    },
    descriptionText: {
        width: wp('95%'),
        alignSelf: 'center',
        fontSize: 14,
        fontWeight: '300',
        color: '#979797',
        textAlign: 'justify'
    },
    dealMainContainer: {
        width: wp('100%'),
        backgroundColor: '#2B8EFE',
        marginTop: hp('3%'),
    },
    dealView: {
        width: '90%',
        backgroundColor: '#ffffff',
        marginTop: wp('5%'),
        alignSelf: 'center',
        marginBottom: wp('5%'),
        borderRadius: 6,
        paddingTop: hp('1.5%'),
        paddingBottom: hp('1.5%')
    },
    dealText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#313131',
        textAlign: 'center',
    },
    comparisonButtonMainView: {
        width: wp('60%'),
        alignSelf: 'center',
        paddingTop: hp('1%'),
        paddingBottom: hp('3%'),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    comparisonTouchable: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    comparisonButtonText: {
        fontSize: 12,
        fontWeight: '500',
        color: '#FFFFFF',
        alignSelf: 'center',
        paddingLeft: wp('2%')
    },
    profileMainView: {
        width: wp('95%'),
        alignSelf: 'center',
        flexDirection: "row",
        justifyContent: 'flex-start',
        paddingTop: hp('1.5%'),
        paddingBottom:hp('1.5%')
    },
    avatarView: {
        width: wp('16%'),
        alignSelf:'center',
    },
    profileHeading: {
        width: wp('95%'),
        alignSelf: 'center',
        fontSize: 14,
        fontWeight: '500',
        color: '#313131',
        paddingTop: hp('1%')
    },
    userNameText: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '400',
        color: '#313131',
        marginLeft: wp('2%')
    },
    mapStyle: {
        height: hp('30%'),
        width: wp('95%'),
        alignSelf: 'center',
        marginTop: hp('3%')
    },
    borderView: {
        width: wp('100%'),
        borderWidth: 1,
        marginTop: hp('3%'),
        borderColor: '#E0E0E0'
    },
    profileBorderView: {
        width: wp('100%'),
        borderWidth: 1,
        marginTop: hp('1.5%'),
        borderColor: '#E0E0E0',
        marginBottom: hp('1.5%'),
    }
})