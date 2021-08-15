import React, { FC } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { CustomMessageProps } from "../../../types";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { COLOR } from "../../Theme/Colors";
import { styles } from "./style";
import CustomLinearGradient from "../customLinearGradient";
const CustomMessage: FC<CustomMessageProps> = ({
  isBack,
  onPress,
  src,
  bName,
  tokenamount,
  amount,
  location,
  confirmpayment,
    Title,
  subTitle,
  paymenterror,
  othermessage,
    paytokenamount,
    singlebutton,
    doublebutton,
    ButtonText,
  ButtonText1
}) => {
  const {
    iconStyle,
    tokenAmountView,
    img,
    img1,
    container,
      brandName,
    thumbIcon,
    detailView,
    amountText,
    locationText,
    paymentSuccessText,
    paymentSuccessDetails,
    paymentErrorText,
    headingText,
    infoBox,
    tokenlocationText,
    tokenamountText,
    gradientStyle,
    gradientTextStyle,
    gradientStyle1,
  } = styles;
  return (
    <View style={container}>
      <TouchableOpacity onPress={onPress} style={iconStyle}>
        {isBack ? (
          <Ionicons
            name="arrow-back-circle-sharp"
            size={40}
            color={COLOR.primary}
          />
        ) : (
          <Ionicons name="close-circle" size={40} color={COLOR.primary} />
        )}
      </TouchableOpacity>

      {tokenamount && (
        <View style={tokenAmountView}>
          <Image fadeDuration={0} style={img} source={src} />
          <Text style={brandName}>{bName}</Text>
          <View style={detailView}>
            <Entypo name="price-tag" size={24} color={COLOR.primary} />
            <Text style={amountText}>{amount}</Text>
          </View>
          <View style={detailView}>
            <EvilIcons name="location" size={24} color={COLOR.secondary} />
            <Text style={locationText}>{location}</Text>
          </View>
        </View>
      )}
      {paytokenamount && (
        <View style={tokenAmountView}>
          <Text style={headingText}>{Title}</Text>
          <Image fadeDuration={0} source={src} style={img1} />
          <View style={infoBox}>
            <View style={detailView}>
              <Entypo name="price-tag" size={24} color={COLOR.White} />
              <Text style={tokenamountText}>{amount}</Text>
            </View>
            <View style={detailView}>
              <EvilIcons name="location" size={24} color={COLOR.White} />
              <Text style={tokenlocationText}>{location}</Text>
            </View>
          </View>
        </View>
      )}
      {confirmpayment && (
        <View style={tokenAmountView}>
                  <Entypo name="thumbs-up" size={80} color={ COLOR.YellowOrange}style={thumbIcon}  />
          <Text style={paymentSuccessText}>{Title}</Text>
          <Text style={paymentSuccessDetails}>{subTitle}</Text>
        </View>
      )}
      {paymenterror && (
        <View style={tokenAmountView}>
          <Text style={paymentErrorText}>{Title}</Text>
          <Text style={paymentSuccessDetails}>{subTitle}</Text>
        </View>
      )}
      {othermessage && (
        <View style={tokenAmountView}>
          <Text style={paymentErrorText}>{Title}</Text>
        </View>
      )}
      {singlebutton && (
        <CustomLinearGradient
          colors={["#F04148", COLOR.primary]}
          GradientButtonStyle={gradientStyle}
          text={ButtonText}
          textstyle={gradientTextStyle}
          onPress={() => console.log("Works!")}
        />
      )}
      {doublebutton && (
        <View>
          <CustomLinearGradient
            colors={["#F04148", COLOR.primary]}
            GradientButtonStyle={gradientStyle}
            text={ButtonText}
            textstyle={gradientTextStyle}
            onPress={() => console.log("Works!")}
          />
          <CustomLinearGradient
            colors={["#F04148", COLOR.primary]}
            GradientButtonStyle={gradientStyle1}
            text={ButtonText1}
            textstyle={gradientTextStyle}
            onPress={() => console.log("Works!")}
          />
        </View>
      )}
    </View>
  );
};
export default CustomMessage;
