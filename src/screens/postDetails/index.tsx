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
  const [location, setlocation] = useState("");
  const onchangeLocation = (value: string) => {
    setlocation(value);
  };
  const [carModel, setCarModel] = useState("");
  const onchangeCarModel = (value: string) => {
    setCarModel(value);
  };
  const [carMake, setCarMake] = useState("");
  const onchangeCarMake = (value: string) => {
    setCarMake(value);
  };
  const [year, setYear] = useState("");
  const onchangeYear = (value: string) => {
    setYear(value);
  };
  const [condition, setCondition] = useState("");
  const onchangeCondition = (value: string) => {
    setCondition(value);
  };
  const [registrationCity, setRegistrationCity] = useState("");
  const onchangeRegistrationCity = (value: string) => {
    setRegistrationCity(value);
  };
  const [bodycolor, setBodyColor] = useState("");
  const onchangeBodyColor = (value: string) => {
    setBodyColor(value);
  };
  const [milage, setMilage] = useState("");
  const onchangeMilage = (value: string) => {
    setMilage(value);
  };
  const [priceRange, setPriceRange] = useState("");
  const onchangePriceRange = (value: string) => {
    setPriceRange(value);
  };
  return (
    // <SafeAreaView style={styles.container}>
    //     <ScrollView style={styles.scrollView}>
    <View>
      <View>
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
                value={location}
                onChange={onchangeLocation}
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
                value={carModel}
                onChange={onchangeCarModel}
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
                value={carMake}
                onChange={onchangeCarMake}
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
                value={year}
                onChange={onchangeYear}
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
                value={condition}
                onChange={onchangeCondition}
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
                value={registrationCity}
                onChange={onchangeRegistrationCity}
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
                value={bodycolor}
                onChange={onchangeBodyColor}
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
                value={milage}
                onChange={onchangeMilage}
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
                value={priceRange}
                onChange={onchangePriceRange}
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
              onChangeText={setDescription}
              value={description}
            />
          </View>
          <CustomLinearGradient
            colors={[COLOR.CarminePink, COLOR.primary]}
            GradientButtonStyle={styles.gradientStyle1}
            text={AddPostButton}
            textstyle={styles.gradientTextStyle}
            onPress={() => console.log("Works!")}
          />
          {/* </ScrollView>
        </SafeAreaView> */}
        </View>
        <TextInput
          placeholder={DescriptionLabel}
          style={styles.descriptionInput}
          maxLength={100}
          multiline={true}
          // onChangeText={onChangeData}
          // value={data.description}
        />
      </View>
      <CustomLinearGradient
        colors={["#F04148", COLOR.primary]}
        GradientButtonStyle={styles.gradientStyle1}
        text={AddPostButton}
        textstyle={styles.gradientTextStyle}
        // onPress={submitdata}
      />
    </View>
  );
};
export default PostDetails;
