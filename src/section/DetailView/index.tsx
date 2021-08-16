import React, { FC,} from "react";
import { View, Image, TouchableOpacity} from "react-native";
import {
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustomText from "../../component/customText";
import CustomAvatar from "../../component/Avatar";
import { styles } from "./styles";
import {
  PlaceIcon,
  compareText,
  DescriptionHead,
  make,
  modelHeading,
  payAmount,
  productStatus,
  sellerText,
  shortListText,
  yearHeading,
  AdsDetail,
  CarDetail,
} from "../../utils/constants/carDetails/carDetails";
import { COLOR } from "../../Theme/Colors";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import { KM,  RS } from "../../utils/form/validationForm";


interface viewProp {
  view?: string;
  _Price?: any;
  _model?: any;
  _make?: any;
  _modelYear?: any;
  _milage?: any;
  UserName?: any;
  ProfileImage?: any;
  _City?: any;
  _description?: any;
  _engineType?: any;
  likeOnPress?: () => void;
  EditOnPress?: () => void;
  heartColor?: any;
}

const DetailsView: FC<viewProp> = ({
  view,
  _Price,
  _model,
  _make,
  _modelYear,
  _milage,
  UserName,
  ProfileImage,
  _City,
  _description,
  _engineType,
  likeOnPress,
  EditOnPress,
  heartColor,
}) => {
  return (
    <>
      <View style={styles.amountMainContainer}>
        <CustomText text={`${RS}${_Price}`} textStyle={styles.amountText} />
        <View style={styles.buttonContainer}>
          {view === CarDetail && (
            <>
              <TouchableOpacity style={styles.shareTouchableStyle}>
                <Entypo name="share" size={27} color={COLOR.secondary} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.shareTouchableStyle}
                onPress={likeOnPress}
              >
                <AntDesign name="heart" size={25} color={heartColor} />
              </TouchableOpacity>
            </>
          )}

          {view === AdsDetail && (
            <TouchableOpacity style={styles.editStyle} onPress={EditOnPress}>
              <FontAwesome name="edit" size={25} color={COLOR.secondary} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.brandTextView}>
        <CustomText text={_model} textStyle={styles.brandNameText} />
        <View style={styles.brandStatusView}>
          <CustomText text={productStatus} textStyle={styles.brandStatusText} />
        </View>
      </View>
      <View style={styles.productInfoMainView}>
        <View style={styles.productInfoSubView}>
          <View style={styles.infoView}>
            <Image style={styles.buttonIcon} source={PlaceIcon} />
            <CustomText text={_City} textStyle={styles.infoText} />
          </View>
          <View style={styles.infoView}>
            <Image
              style={styles.buttonIcon}
              source={require("../../../assets/images/road.png")}
            />
            <CustomText text={`${_milage} ${KM}`} textStyle={styles.infoText} />
          </View>
          <View style={styles.infoView}>
            <Image
              style={styles.buttonIcon}
              source={require("../../../assets/images/diesal.png")}
            />
            <CustomText text={_engineType} textStyle={styles.infoText} />
          </View>
        </View>
        <View style={styles.productInfoSubView}>
          <View style={styles.infoView}>
            <CustomText text={_make} textStyle={styles.infoText} />
            <CustomText text={make} textStyle={styles.infoHeading} />
          </View>
          <View style={styles.infoView}>
            <CustomText text={_model} textStyle={styles.infoText} />
            <CustomText text={modelHeading} textStyle={styles.infoHeading} />
          </View>
          <View style={styles.infoView}>
            <CustomText text={_modelYear} textStyle={styles.infoText} />
            <CustomText text={yearHeading} textStyle={styles.infoHeading} />
          </View>
        </View>
      </View>
      <CustomText
        text={DescriptionHead}
        textStyle={styles.descriptionHeading}
      />
      <CustomText text={_description} textStyle={styles.descriptionText} />
      {view === CarDetail && (
        <View style={styles.dealMainContainer}>
          <View style={styles.dealView}>
            <CustomText text={payAmount} textStyle={styles.dealText} />
          </View>
          <View style={styles.comparisonButtonMainView}>
            <TouchableOpacity style={styles.comparisonTouchable}>
              <Image
                style={styles.buttonIcon}
                source={require("../../../assets/images/layer.png")}
              />
              <CustomText
                text={compareText}
                textStyle={styles.comparisonButtonText}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.comparisonTouchable}>
              <Image
                style={styles.buttonIcon}
                source={require("../../../assets/images/safety-car.png")}
              />
              <CustomText
                text={shortListText}
                textStyle={styles.comparisonButtonText}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
      <View style={styles.profileBorderView}>
        <View style={{ flexDirection: "column", justifyContent: "flex-start" }}>
          <CustomText text={sellerText} textStyle={styles.profileHeading} />
          <View style={styles.profileMainView}>
            <View style={styles.avatarView}>
              <CustomAvatar
                overlayContainerStyle={{ backgroundColor: "white" }}
                size={hp("7%")}
                rounded
                onPress={() => console.log("Works!")}
                activeOpacity={0.8}
                source={ProfileImage}
                imageProps={{ resizeMode: "contain", margin: 15 }}
              />
            </View>
            <CustomText text={UserName} textStyle={styles.userNameText} />
            <Image
              style={styles.buttonIcon}
              source={require("../../../assets/images/check.png")}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default DetailsView;
