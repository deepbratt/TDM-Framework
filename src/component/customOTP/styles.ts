import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
  root: {
    width: wp("100%"),
    height:263,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius:24,
  },
  codeFiledRoot: {
    marginTop: 26,
    width: 311,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#475E69',
    borderBottomWidth: 2,
  },
  cellText: {
    color: '#313131',
    fontSize: 24,
    textAlign: 'center',
    fontWeight:'500',
  },
  focusCell: {
    borderBottomColor: '#007AFF',
    borderBottomWidth: 2,
  },
  textStyle: {
    width: 311,
    height: 60,
    fontSize: 16,
    fontWeight: '400',
    color: '#96A7AF',
    paddingTop: 23,
    alignSelf: 'center'
  },
  gradientStyle: {
    width: 315,
    height: 58,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 17,
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
    marginLeft: 10,
  }
})