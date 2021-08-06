import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import { styles } from "./styles";
import DropDownSaim from "../../component/dropDownSaim";
import CustomLinearGradient from "../../component/customLinearGradient";
import Example from "../../component/imagePicker";
import CustomHeader from "../../component/customHeader/CustomHeader";
import {
  bodyColor,
  CarModel,
  Condition,
  locationList,
  Milage,
  PriceRange,
  PlaceIcon,
  ModelIcon,
  AmountIcon,
  ConditionIcon,
  ApartmentIcon,
  PaletteIcon,
  MilageIcon,
  DescriptionIcon,
  LocationLabel,
  CarModelLabel,
  CarMakeLabel,
  YearLabel,
  ConditionLabel,
  RegisterCityLabel,
  BodyColorLabel,
  MileageLabel,
  PriceRangeLabel,
  DescriptionLabel,
  AddPostButton,
} from "../../utils/constants/postDetails/postDetails";
import { COLOR } from "../../Theme/Colors";

const PostDetails = () => {
  const [description, setDescription] = useState("");

  const [data, setData] = useState({
    location: "",
    carModel: "",
    carMake: "",
    year: "",
    condition: "",
    registrationCity: "",
    bodycolor: "",
    milage: "",
    priceRange: "",
    description:"",
  });
  const onChangeData = (value: any) => {
    setData(value);
    console.log(value);
  };

  const submitdata = () => {};
  return (
    <View style={styles.container}>
      <CustomHeader
        headerStyle={{ backgroundColor: COLOR.Cultured }}
        title="Post Your Ad Here"
        color={COLOR.DarkCharcoal}
      />
      <Example />
      <View style={styles.borderView}></View>
      <View style={styles.dropdownContainer}>
        <View style={styles.iconView}>
          <Image style={styles.buttonIcon} source={PlaceIcon} />
        </View>
        <View style={styles.MainViewDropDown}>
          <DropDownSaim
            itemContainerStyle={styles.itemContainerDropDrown}
            label={LocationLabel}
            itemTextStyle={styles.itemTextDropDown}
            data={locationList}
            disableSort={true}
            value={data.location}
            onChange={onChangeData}
            textInputStyle={styles.textInputDropDown}
          />
        </View>
      </View>
      <View style={styles.dropdownContainer}>
        <View style={styles.iconView}>
          <Image style={styles.buttonIcon} source={ModelIcon} />
        </View>
        <View style={styles.MainViewDropDown}>
          <DropDownSaim
            itemContainerStyle={styles.itemContainerDropDrown}
            label={CarModelLabel}
            itemTextStyle={styles.itemTextDropDown}
            data={CarModel}
            disableSort={true}
            value={data.carModel}
            onChange={onChangeData}
            textInputStyle={styles.textInputDropDown}
          />
        </View>
      </View>
      <View style={styles.dropdownContainer}>
        <View style={styles.iconView}>
          <Image style={styles.buttonIcon} source={ModelIcon} />
        </View>
        <View style={styles.MainViewDropDown}>
          <DropDownSaim
            itemContainerStyle={styles.itemContainerDropDrown}
            label={CarMakeLabel}
            itemTextStyle={styles.itemTextDropDown}
            data={CarModel}
            disableSort={true}
            value={data.carMake}
            onChange={onChangeData}
            textInputStyle={styles.textInputDropDown}
          />
        </View>
      </View>
      <View style={styles.dropdownContainer}>
        <View style={styles.iconView}>
          <Image style={styles.buttonIcon} source={AmountIcon} />
        </View>
        <View style={styles.MainViewDropDown}>
          <DropDownSaim
            itemContainerStyle={styles.itemContainerDropDrown}
            label={YearLabel}
            itemTextStyle={styles.itemTextDropDown}
            data={CarModel}
            disableSort={true}
            value={data.year}
            onChange={onChangeData}
            textInputStyle={styles.textInputDropDown}
          />
        </View>
      </View>
      <View style={styles.dropdownContainer}>
        <View style={styles.iconView}>
          <Image style={styles.buttonIcon} source={ConditionIcon} />
        </View>
        <View style={styles.MainViewDropDown}>
          <DropDownSaim
            itemContainerStyle={styles.itemContainerDropDrown}
            label={ConditionLabel}
            itemTextStyle={styles.itemTextDropDown}
            data={Condition}
            disableSort={true}
            value={data.condition}
            onChange={onChangeData}
            textInputStyle={styles.textInputDropDown}
          />
        </View>
      </View>
      <View style={styles.dropdownContainer}>
        <View style={styles.iconView}>
          <Image style={styles.buttonIcon} source={ApartmentIcon} />
        </View>
        <View style={styles.MainViewDropDown}>
          <DropDownSaim
            itemContainerStyle={styles.itemContainerDropDrown}
            label={RegisterCityLabel}
            itemTextStyle={styles.itemTextDropDown}
            data={locationList}
            disableSort={true}
            value={data.registrationCity}
            onChange={onChangeData}
            textInputStyle={styles.textInputDropDown}
          />
        </View>
      </View>
      <View style={styles.dropdownContainer}>
        <View style={styles.iconView}>
          <Image style={styles.buttonIcon} source={PaletteIcon} />
        </View>
        <View style={styles.MainViewDropDown}>
          <DropDownSaim
            itemContainerStyle={styles.itemContainerDropDrown}
            label={BodyColorLabel}
            itemTextStyle={styles.itemTextDropDown}
            data={bodyColor}
            disableSort={true}
            value={data.bodycolor}
            onChange={onChangeData}
            textInputStyle={styles.textInputDropDown}
          />
        </View>
      </View>
      <View style={styles.dropdownContainer}>
        <View style={styles.iconView}>
          <Image style={styles.buttonIcon} source={MilageIcon} />
        </View>
        <View style={styles.MainViewDropDown}>
          <DropDownSaim
            itemContainerStyle={styles.itemContainerDropDrown}
            label={MileageLabel}
            itemTextStyle={styles.itemTextDropDown}
            data={Milage}
            disableSort={true}
            value={data.milage}
            onChange={onChangeData}
            textInputStyle={styles.textInputDropDown}
          />
        </View>
      </View>
      <View style={styles.dropdownContainer}>
        <View style={styles.iconView}>
          <Image style={styles.buttonIcon} source={AmountIcon} />
        </View>
        <View style={styles.MainViewDropDown}>
          <DropDownSaim
            itemContainerStyle={styles.itemContainerDropDrown}
            label={PriceRangeLabel}
            itemTextStyle={styles.itemTextDropDown}
            data={PriceRange}
            disableSort={true}
            value={data.priceRange}
            onChange={onChangeData}
            textInputStyle={styles.textInputDropDown}
          />
        </View>
      </View>
      <View style={styles.dropdownContainer}>
        <View style={styles.iconView}>
          <Image style={styles.buttonIcon} source={DescriptionIcon} />
        </View>
        <TextInput
          placeholder={DescriptionLabel}
          style={styles.descriptionInput}
          maxLength={100}
          multiline={true}
          onChangeText={onChangeData}
          value={data.description}
        />
      </View>
      <CustomLinearGradient
        colors={["#F04148", COLOR.primary]}
        GradientButtonStyle={styles.gradientStyle1}
        text={AddPostButton}
        textstyle={styles.gradientTextStyle}
        onPress={submitdata}
      />
    </View>
  );
};
export default PostDetails;
