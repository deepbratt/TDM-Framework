import React,{FC} from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustomText from "../../component/customText";
import { COLOR } from "../../Theme/Colors";
import {
  Assebmly,
  BodyColor,
  BodyType,
  Condition,
  Engine,
  Mileage,
  modelYear,
  regNumber,
  Transmission,
} from "../../utils/constants/compare";
import { engineCapacity } from "../../utils/constants/postDetails/postDetails";
import { KM } from "../../utils/form/validationForm";

interface SpeciProp {
  _EngineType?: string;
  _BodyType?: string;
  _BodyColor?: string;
  _Assebmly?: string;
  _Transmission?: string;
  _Mileage?: string;
  _Condition?: string;
  _ModelYear?: string;
  _regNumber?: string;
  _engineCapacity?:string
}
const Specification:FC<SpeciProp> = ({
  _EngineType,
  _BodyType,
  _BodyColor,
  _Assebmly,
  _Transmission,
  _Mileage,
  _Condition,
  _ModelYear,
  _regNumber,
  _engineCapacity
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainContaier}>
          <View style={styles.infoView}>
            <View
              style={{ flexDirection: "column", justifyContent: "flex-start" }}
            >
              <CustomText text={Engine} textStyle={styles.headingText} />
            </View>
            <CustomText text={_EngineType} textStyle={styles.subText} />
          </View>
          <View style={styles.borderView}></View>
        </View>

        <View style={styles.mainContaier}>
          <View style={styles.infoView}>
            <View
              style={{ flexDirection: "column", justifyContent: "flex-start" }}
            >
              <CustomText text={BodyType} textStyle={styles.headingText} />
            </View>
            <CustomText text={_BodyType} textStyle={styles.subText} />
          </View>
          <View style={styles.borderView}></View>
        </View>
        <View style={styles.mainContaier}>
          <View style={styles.infoView}>
            <View
              style={{ flexDirection: "column", justifyContent: "flex-start" }}
            >
              <CustomText text={regNumber} textStyle={styles.headingText} />
            </View>
            <CustomText text={_regNumber} textStyle={styles.subText} />
          </View>
          <View style={styles.borderView}></View>
        </View>  
         <View style={styles.mainContaier}>
          <View style={styles.infoView}>
            <View
              style={{ flexDirection: "column", justifyContent: "flex-start" }}
            >
              <CustomText text={modelYear} textStyle={styles.headingText} />
            </View>
            <CustomText text={_ModelYear} textStyle={styles.subText} />
          </View>
          <View style={styles.borderView}></View>
        </View>
        <View style={styles.mainContaier}>
          <View style={styles.infoView}>
            <View
              style={{ flexDirection: "column", justifyContent: "flex-start" }}
            >
              <CustomText text={BodyColor} textStyle={styles.headingText} />
            </View>
            <CustomText text={_BodyColor} textStyle={styles.subText} />
          </View>
          <View style={styles.borderView}></View>
        </View>

        <View style={styles.mainContaier}>
          <View style={styles.infoView}>
            <View
              style={{ flexDirection: "column", justifyContent: "flex-start" }}
            >
              <CustomText text={Assebmly} textStyle={styles.headingText} />
            </View>
            <CustomText text={_Assebmly} textStyle={styles.subText} />
          </View>
          <View style={styles.borderView}></View>
        </View>

        <View style={styles.mainContaier}>
          <View style={styles.infoView}>
            <View
              style={{ flexDirection: "column", justifyContent: "flex-start" }}
            >
              <CustomText text={Transmission} textStyle={styles.headingText} />
            </View>
            <CustomText text={_Transmission} textStyle={styles.subText} />
          </View>
          <View style={styles.borderView}></View>
        </View>

        <View style={styles.mainContaier}>
          <View style={styles.infoView}>
            <View
              style={{ flexDirection: "column", justifyContent: "flex-start" }}
            >
              <CustomText text={engineCapacity} textStyle={styles.headingText} />
            </View>
            <CustomText text={_engineCapacity} textStyle={styles.subText} />
          </View>
          <View style={styles.borderView}></View>
        </View>
        <View style={styles.mainContaier}>
          <View style={styles.infoView}>
            <View
              style={{ flexDirection: "column", justifyContent: "flex-start" }}
            >
              <CustomText text={Mileage} textStyle={styles.headingText} />
            </View>
            <CustomText text={`${_Mileage}${KM}`} textStyle={styles.subText} />
          </View>
          <View style={styles.borderView}></View>
        </View>
        <View style={styles.mainContaier}>
          <View style={styles.infoView}>
            <View
              style={{ flexDirection: "column", justifyContent: "flex-start" }}
            >
              <CustomText text={Condition} textStyle={styles.headingText} />
            </View>
            <CustomText text={_Condition} textStyle={styles.subText} />
          </View>
          <View style={styles.borderView}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: COLOR.background,
  },
  mainContaier: {
    width: wp("95%"),
    alignSelf: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  infoView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  headingText: {
    fontSize: 14,
    width: 88,
    fontFamily: "IBMPlexSans-Light",
    color: COLOR.RaisinBlack,
    marginTop: hp("2%"),
  },
  subText: {
    fontSize: 14,
    fontFamily: "IBMPlexSans-Light",
    width: 193,
    color: COLOR.secondary,
    paddingTop: hp("2%"),
    alignSelf: "center",
  },
  borderView: {
    width: wp("100%"),
    borderColor: "#F3F3F3",
    borderWidth: 0.8,
    marginTop: hp("1%"),
  },
});
export default Specification;
