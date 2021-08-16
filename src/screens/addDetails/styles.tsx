import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLOR } from "../../Theme/Colors";
export const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
    scrollView: {
        height: hp('100%'),
        width:wp('100%'),
        backgroundColor: COLOR.background,
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
    infoView: {
        flexDirection: 'column',
        justifyContent: "space-between"
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
        marginTop:hp('2%')
    },
  
})