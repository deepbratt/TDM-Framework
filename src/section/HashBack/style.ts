import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLOR } from "../../Theme/Colors";
export const Style = StyleSheet.create({
    flatListView: {
        width: wp('100%'),
        backgroundColor: COLOR.background,
    },
    main: {
        justifyContent: 'center',
        backgroundColor: COLOR.background,
    },
    container: {
        backgroundColor: COLOR.White,
        marginTop: hp('1%'),
        marginBottom:hp('1%'),
        borderRadius: 12,
        width: wp('45%'),
        marginHorizontal:wp('1.5%'),
        justifyContent: 'flex-start'
    },
    images: {
        // backgroundColor:'lightblue',
        width: hp('22%'),
        alignSelf: 'center',
        height: hp('20%'),
        borderRadius: 12,
    },
    titleText: {
        fontFamily: "IBMPlexSans-Medium",
        fontSize: 14,
        marginTop: wp('0.5%'),
        lineHeight: 20,
        color: COLOR.primary,
        marginLeft: wp('2%'),
        marginBottom:hp('1%'),
},
detail:{
    fontFamily: "IBMPlexSans-Medium",
    fontSize: 14,
    marginTop: hp('0.5%'),
    color: COLOR.GraniteGray,
    marginLeft: wp('2%'),
    },
    ratingView: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft:wp('2%'),
},
rate:{
    width:wp('5%'), 
    height: hp('3%'),
    resizeMode: "contain"
},
rating:{
    fontFamily: "IBMPlexSans-Light",
    fontSize: 10,
   lineHeight:13,
   color:COLOR.GraniteGray,
   marginLeft:wp('2%'), 
    },
 footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: '#800000',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    },
    loadingView: {
      height:hp('30%'),
      justifyContent:"center",
      alignItems:"center",
    },
    background: {
        width: wp('100%'),
        backgroundColor:COLOR.background,
        justifyContent:'center'
    },
    emptyView: {
        width: wp('100%'),
        height: hp('30%'),
        backgroundColor: COLOR.background,
        justifyContent:"center"
    },
    emptyText: {
        fontFamily: "IBMPlexSans-Bold",
        fontSize: 18,
        color: COLOR.GraniteGray,
        alignSelf: 'center',
        textAlign:'center'
    }
});
