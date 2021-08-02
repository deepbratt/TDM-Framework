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
    imageRandomItemView: {
        backgroundColor: "floralwhite",
        borderRadius: 5,
        width: wp('70%'),
        marginLeft: wp('-3%')
    },
    RandomItemImage: {
        width: wp('70%'),
        height: hp('25%'),
        borderRadius: 8,
        alignSelf: 'center',
    },
    imageCarouselView: {
        width: wp('100%'),
        justifyContent: 'flex-start',
        marginTop: hp('2%'),
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
        fontFamily: 'IBMPlexSans-Medium',
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
        fontFamily: 'IBMPlexSans-Bold',
        color: '#212121'
    },
    brandStatusView: {
        width: wp('10%'),
        backgroundColor: '#5AC8FA',
        borderRadius: 6
    },
    brandStatusText: {
        fontSize: 12,
        fontFamily: 'IBMPlexSans-Medium',
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
        fontFamily: 'IBMPlexSans-Medium',
        color: '#979797',
        paddingTop: hp('0.5%')
    },
    infoHeading: {
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Medium',
        color: "#313131",
        paddingTop: hp('0.5%')
    },
    descriptionHeading: {
        width: wp('95%'),
        alignSelf: 'center',
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Medium',
        color: '#313131',
        marginTop: hp('3%')
    },
    descriptionText: {
        width: wp('95%'),
        alignSelf: 'center',
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Light',
        color: '#979797',
        textAlign: 'justify'
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
        fontFamily: 'IBMPlexSans-Medium',
        color: '#313131',
        paddingTop: hp('1%')
    },
    userNameText: {
        alignSelf: 'center',
        fontSize: 16,
        fontFamily: 'IBMPlexSans-Light',
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
    },
    TopBarLabelStyle: {
        fontSize: 12,
        fontFamily: 'IBMPlexSans-Medium',
        textTransform: 'none',
        color: '#313131'
    },
    TopBarIndicatorStyle: {
        height: 3,
        alignSelf: 'center',
    },
    AddPostedText: {
        width: wp('95%'),
        alignSelf: 'center',
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Bold',
    },
    FeatureProductText: {
        width: wp('95%'),
        alignSelf: 'center',
        fontSize: 18,
        fontFamily: 'IBMPlexSans-Medium',
        color: '#212121',
        marginTop:hp('2%')
    },
    CarouselFeaturemainView: {
        backgroundColor: "floralwhite",
        height: hp('35%'),
        borderRadius: 8,
        width: wp('70%'),
        marginLeft: wp('-5%'),
        marginTop:hp('2%'),
        marginBottom: hp('5%')
    },
    CarouselFeatureproductImage: {
        width: wp('70%'),
        height: hp('20%'),
        borderRadius: 8,
        alignSelf: 'center'
    },
    CarouselFeaturenameStatusContainer: {
        width: wp('68%'),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: wp('2%')
    },
    CarouselFeaturetitleText: {
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Bold',
        color: '#212121'
    },
    CarouselFeaturestatusSubView: {
        width: wp('10%'),
        backgroundColor: '#5AC8FA',
        borderRadius: 6
    },
    CarouselFeaturestatusText: {
        fontSize: 12,
        fontFamily: 'IBMPlexSans-Medium',
        color: '#FFFFFF',
        textAlign: 'center'
    },
    CarouselFeaturepriceContainer: {
        width: wp('68%'),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    CarouselFeaturepriceIcon: {
        height: hp('3%'),
        width: wp('5%'),
        resizeMode: 'contain',
        marginLeft: wp('2%'),
        alignSelf: 'center',
        tintColor: '#C20000'
    },
    CarouselFeaturepriceText: {
        fontSize: 12,
        fontFamily: 'IBMPlexSans-Medium',
        color: '#C20000',
        paddingLeft: wp('2%')
    },
    CarouselFeaturebuttonIcon: {
        padding: wp('2%'),
        alignSelf: 'center',
        resizeMode: 'cover'
    },
    CarouselFeatureproductInfoSubView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    CarouselFeatureinfoView: {
        flexDirection: 'column',
        justifyContent: "space-between",
    },
    CarouselFeatureinfoText: {
        fontSize: 12,
        fontFamily: 'IBMPlexSans-Medium',
        color: '#979797',
        paddingTop: hp('0.5%')
    },
    CarouselFeatureinfoHeading: {
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Medium',
        color: "#313131",
        paddingTop: hp('0.5%')
    },
    CarouselFeaturefeatureHeadingText: {
        width: wp('95%'),
        alignSelf: 'center',
        fontSize: 18,
        fontFamily: 'IBMPlexSans-Medium',
        color: '#212121'
    },
    CarouselFeaturefavouriteButton: {
        padding: wp('2%'),
        height: hp('1.5%'),
        width:wp('1.5%'),
        alignSelf: 'center',
        resizeMode: 'cover',
        tintColor:'#FFFFFF'
    },
    CarouselFeatureshareTouchableStyle: {
        height: hp('3%'),
        width: wp('6%'),
        alignSelf: 'center',
        marginLeft: wp('2%'),
        backgroundColor: '#C20000',
        borderRadius: 50,
        justifyContent: 'center',
    },
})