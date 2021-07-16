import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    paddingTop: hp('3%')
  },
  carouselView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: hp('3%')
  },
  mainView: {
    backgroundColor: "floralwhite",
    height: hp('35%'),
    borderRadius: 5,
    width: wp('68%'),
    marginLeft: 5,
    marginBottom: hp('5%')
  },
  productImage: {
    width: wp('68%'),
    height: hp('20%'),
    borderRadius: 8,
    alignSelf: 'center'
  },
  nameStatusContainer: {
    width: wp('68%'),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: wp('2%')
  },
  titleText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#212121'
  },
  statusSubView: {
    width: wp('10%'),
    backgroundColor: '#5AC8FA',
    borderRadius: 6
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  priceContainer: {
    width: wp('68%'),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  priceIcon: {
    height: hp('3%'),
    width: wp('5%'),
    resizeMode: 'contain',
    marginLeft: wp('2%'),
    alignSelf: 'center',
    tintColor: '#C20000'
  },
  priceText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#C20000',
    paddingLeft: wp('2%')
  },
  buttonIcon: {
    padding: wp('2%'),
    alignSelf: 'center',
    resizeMode: 'cover'
  },
  productInfoSubView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  infoView: {
    flexDirection: 'column',
    justifyContent: "space-between",
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
  featureHeadingText: {
    width: wp('95%'),
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: '#212121'
  },
})