import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { SearchValidationSchema } from "../../utils/form/validationForm";
import CustomLinearGradient from "../customLinearGradient";
import CustomText from "../customText";
import DropDownSaim from "../dropDownSaim";
import {
  BrandLabel,
  BrandList,
  Heading,
  SortLabel,
  subHeading,
  ModelHeading,
  BodyLabel,
  RunHeading,
  FromText,
  ToText,
  ButtonText,
  Year,
  KilometerText,
} from "../../utils/constants/search";
import { COLOR } from "../../Theme/Colors";
import { Formik, Field } from "formik";
import { SeacrhForm } from "../../../types";
import CustomInput from "../CustomInput/CustomInput";

const CustomFilter = () => {
  const [search, setSearch] = useState({
    sortBy: "",
    brand: "",
    body: "",
    yearFrom: "",
    yearTo: "",
    kilometerFrom: "",
    kilometerTo: "",
  });
  const handleSearch = async (search: SeacrhForm) => {
    console.log("Work");
    const {
      sortBy,
      brand,
      body,
      yearFrom,
      yearTo,
      kilometerFrom,
      kilometerTo,
    } = search;
    const bodySearch = {
      sortBy: sortBy,
      brand: brand,
      body: body,
      yearFrom: yearFrom,
      yearTo: yearTo,
      kilometerFrom: kilometerFrom,
      kilometerTo: kilometerTo,
    };
    console.log("values", bodySearch);
  };
  return (
    <View style={styles.bottomNavigationView}>
      <CustomText text={Heading} textStyle={styles.filterSearchText} />
      <CustomText text={subHeading} textStyle={styles.subHeading} />
      <Formik
        initialValues={search}
        onSubmit={(values) => {
          handleSearch(values);
        }}
        validationSchema={SearchValidationSchema}
      >
        {({ errors, handleSubmit, values, setFieldValue }) => (
          <View>
            <View style={styles.MainViewDropDown}>
              <DropDownSaim
                itemContainerStyle={styles.itemContainerDropDrown}
                label={SortLabel}
                itemTextStyle={styles.itemTextDropDown}
                data={BrandList}
                disableSort={true}
                value={values.sortBy}
                onChange={(value: any) => setFieldValue("sortBy", value)}
                textInputStyle={styles.textInputDropDown}
                required={true}
                error={errors.sortBy ? true : false}
                errorColor={COLOR.primary}
              />
            </View>
            <View style={styles.MainViewDropDown}>
              <DropDownSaim
                itemContainerStyle={styles.itemContainerDropDrown}
                label={BrandLabel}
                itemTextStyle={styles.itemTextDropDown}
                data={BrandList}
                disableSort={true}
                value={values.brand}
                onChange={(value: any) => setFieldValue("brand", value)}
                textInputStyle={styles.textInputDropDown}
                required={true}
                error={errors.brand ? true : false}
                errorColor={COLOR.primary}
              />
            </View>
            <CustomText
              text={ModelHeading}
              textStyle={styles.kilometerHeadingText}
            />
            <View style={styles.toFromView}>
              <View>
                <Field
                  component={CustomInput}
                  inputFieldStyle={styles.Inputs}
                  activeFieldStyle={styles.error}
                  placeholder={FromText}
                  name={"yearFrom"}
                  required
                  errorTextStyle={styles.errorText}
                  keyboardType="numeric"
                />
              </View>
              <View>
                <Field
                  component={CustomInput}
                  inputFieldStyle={styles.Inputs}
                  activeFieldStyle={styles.error}
                  placeholder={ToText}
                  name={"yearTo"}
                  required
                  errorTextStyle={styles.errorText}
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View style={styles.MainViewDropDown}>
              <DropDownSaim
                itemContainerStyle={styles.itemContainerDropDrown}
                label={BodyLabel}
                itemTextStyle={styles.itemTextDropDown}
                data={Year}
                disableSort={true}
                value={values.body}
                onChange={(value: any) => setFieldValue("body", value)}
                textInputStyle={styles.textInputDropDown}
                required={true}
                error={errors.brand ? true : false}
                errorColor={COLOR.primary}
              />
            </View>
            <CustomText
              text={RunHeading}
              textStyle={styles.kilometerHeadingText}
            />
            <View style={styles.toFromView}>
              <View>
                <Field
                  component={CustomInput}
                  inputFieldStyle={styles.Inputs}
                  activeFieldStyle={styles.error}
                  placeholder={KilometerText}
                  name={"kilometerFrom"}
                  required
                  errorTextStyle={styles.errorText}
                  keyboardType="numeric"
                />
              </View>
              {/* <TextInput
                placeholder={ToText}
                style={styles.Inputs}
                onChangeText={(value: any) =>
                  setFieldValue("kilometerTo", value)
                }
                value={values.kilometerTo}
                keyboardType="numeric"
              /> */}
            </View>
            <CustomLinearGradient
              colors={[COLOR.CarminePink, COLOR.primary]}
              GradientButtonStyle={styles.gradientButtonStyle}
              text={ButtonText}
              textstyle={styles.gradientButtonText}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};
export default CustomFilter;
