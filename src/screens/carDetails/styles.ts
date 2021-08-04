import { StyleSheet } from "react-native"
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
        color: COLOR.primary
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
        color: COLOR.RaisinBlack
    },
    brandStatusView: {
        width: wp('10%'),
        backgroundColor: '#5AC8FA',
        borderRadius: 6
    },
    brandStatusText: {
        fontSize: 12,
        fontFamily: 'IBMPlexSans-Medium',
        color: COLOR.White,
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
        paddingTop: hp('3%')
    },
    infoView: {
        flexDirection: 'column',
        justifyContent: "space-between"
    },
    infoText: {
        fontSize: 12,
        fontFamily: 'IBMPlexSans-Medium',
        color: COLOR.secondary,
        paddingTop: hp('0.5%')
    },
    infoHeading: {
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Medium',
        color: COLOR.DarkCharcoal,
        paddingTop: hp('0.5%')
    },
    descriptionHeading: {
        width: wp('95%'),
        alignSelf: 'center',
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Medium',
        color: COLOR.DarkCharcoal,
        marginTop: hp('3%')
    },
    descriptionText: {
        width: wp('95%'),
        alignSelf: 'center',
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Light',
        color: COLOR.secondary,
        textAlign: 'justify'
    },
    dealMainContainer: {
        width: wp('100%'),
        backgroundColor: '#2B8EFE',
        marginTop: hp('3%'),
    },
    dealView: {
        width: '90%',
        backgroundColor: COLOR.White,
        marginTop: wp('5%'),
        alignSelf: 'center',
        marginBottom: wp('5%'),
        borderRadius: 6,
        paddingTop: hp('1.5%'),
        paddingBottom: hp('1.5%')
    },
    dealText: {
        fontSize: 16,
        fontFamily: 'IBMPlexSans-Medium',
        color: COLOR.DarkCharcoal,
        textAlign: 'center',
    },
    comparisonButtonMainView: {
        width: wp('60%'),
        alignSelf: 'center',
        paddingTop: hp('1%'),
        paddingBottom: hp('3%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    comparisonTouchable: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    comparisonButtonText: {
        fontSize: 12,
        fontFamily: 'IBMPlexSans-Medium',
        color: COLOR.White,
        alignSelf: 'center',
        paddingLeft: wp('2%')
    },
    profileMainView: {
        width: wp('95%'),
        alignSelf: 'center',
        flexDirection: "row",
        justifyContent: 'flex-start',
        paddingTop: hp('1.5%'),
        paddingBottom: hp('1.5%')
    },
    avatarView: {
        width: wp('16%'),
        alignSelf: 'center',
    },
    profileHeading: {
        width: wp('95%'),
        alignSelf: 'center',
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Medium',
        color: COLOR.DarkCharcoal,
        paddingTop: hp('1%')
    },
    userNameText: {
        alignSelf: 'center',
        fontSize: 16,
        fontFamily: 'IBMPlexSans-Light',
        color: COLOR.DarkCharcoal,
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
        color: COLOR.DarkCharcoal
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
        color: COLOR.RaisinBlack,
        marginTop: hp('2%')
    },
    CarouselFeaturemainView: {
        backgroundColor: "floralwhite",
        height: hp('35%'),
        borderRadius: 8,
        width: wp('70%'),
        marginLeft: wp('-5%'),
        marginTop: hp('2%'),
        marginBottom: hp('5%')
    },
    CarouselFeaturefavouriteButton: {
        padding: wp('2%'),
        height: hp('1.5%'),
        width:wp('1.5%'),
        alignSelf: 'center',
        resizeMode: 'cover',
        tintColor:COLOR.White
    },
    CarouselFeatureshareTouchableStyle: {
        height: hp('3%'),
        width: wp('6%'),
        alignSelf: 'center',
        marginLeft: wp('2%'),
        backgroundColor: COLOR.primary,
        borderRadius: 50,
        justifyContent: 'center',
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
        color: COLOR.RaisinBlack
    },
    CarouselFeaturestatusSubView: {
        width: wp('10%'),
        backgroundColor: '#5AC8FA',
        borderRadius: 6
    },
    CarouselFeaturestatusText: {
        fontSize: 12,
        fontFamily: 'IBMPlexSans-Medium',
        color: COLOR.White,
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
        tintColor: COLOR.primary
    },
    CarouselFeaturepriceText: {
        fontSize: 12,
        fontFamily: 'IBMPlexSans-Medium',
        color: COLOR.primary,
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
        color: COLOR.secondary,
        paddingTop: hp('0.5%')
    },
    CarouselFeatureinfoHeading: {
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Medium',
        color: COLOR.DarkCharcoal,
        paddingTop: hp('0.5%')
    },
    CarouselFeaturefeatureHeadingText: {
        width: wp('95%'),
        alignSelf: 'center',
        fontSize: 18,
        fontFamily: 'IBMPlexSans-Medium',
        color: COLOR.RaisinBlack
    },
})