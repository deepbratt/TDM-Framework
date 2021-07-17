import { StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const signInStyles = StyleSheet.create({
  img: {
    marginHorizontal: wp('10%'),
    marginVertical: hp('4%'),
    width: wp('81%'),
    aspectRatio:1*1.4,
    padding: 0,
  },
  imgDiv: {
    marginHorizontal: wp('10%'),
    marginVertical: hp('4%'),
    width: wp('81%'),
    aspectRatio:1*1.3,
    padding: 0,
  },
  SubmitView:{
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
}, 
  alignCenter:{ 
    alignItems: "center",
    justifyContent: "center" 
}

});
