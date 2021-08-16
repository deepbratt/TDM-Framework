import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { SearchValidationSchema } from "../../utils/form/validationForm";
import CustomLinearGradient from "../customLinearGradient";
import CustomText from "../customText";
import DropDownSaim from "../dropDownSaim";
import { COLOR } from "../../Theme/Colors";
import { Formik, Field } from "formik";
import { SeacrhForm } from "../../../types";
import CustomInput from "../CustomInput/CustomInput";
import { Carfilter } from "../../utils/api/CarsApi";
import { connect, useDispatch } from "react-redux";
import { filterCars } from "../../redux/reducers/authSlice";
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
  KilometerText,
  dates,
  BodyType,
  Location,
} from "../../utils/constants/search";

const CustomFilter = () => {
  const [carData, setCarData] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState({
    sortBy: "",
    brand: "",
    body: "",
    FromS: "",
    To: "",
    kilometerFrom: "",
    kilometerTo: "",
  });
  const dispatch = useDispatch();

  const handleSearch = async (values: SeacrhForm) => {
    console.log("Work");
    const { sortBy, brand, body, FromS, To, kilometerFrom, kilometerTo } =
      values;
    const bodySearch = {
      sortBy: sortBy,
      brand: brand,
      body: body,
      kilometerFrom: kilometerFrom,
      kilometerTo: kilometerTo,
      FromS: FromS,
      To: To,
    };
    let url =
      page +
      "&city=" +
      values.sortBy +
      "&make=" +
      values.brand +
      "&bodyType=" +
      values.body +
      "&milage[gt]=" +
      values.kilometerFrom +
      "&milage[lt]=" +
      values.kilometerTo +
      "&modelYear[gt]=" +
      values.FromS +
      "&modelYear[lt]=" +
      values.To;
    console.log(url);
    dispatch(filterCars(url));
  };
  return (
    <View style={styles.bottomNavigationView}>
      <CustomText text={Heading} textStyle={styles.filterSearchText} />
      <CustomText text={subHeading} textStyle={styles.subHeading} />
      <Formik
        initialValues={search}
        onSubmit={(values) => {
          handleSearch(values);
          // console.log(values);
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
                data={Location}
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
              <View style={styles.MainViewDropDownOne}>
                <DropDownSaim
                  itemContainerStyle={styles.itemContainerDropDrown}
                  label={FromText}
                  itemTextStyle={styles.itemTextDropDown}
                  enableSearch={true}
                  data={dates}
                  disableSort={true}
                  value={values.FromS}
                  onChange={(value: number) => setFieldValue("FromS", value)}
                  textInputStyle={styles.textInputDropDown}
                  required={true}
                  error={errors.FromS ? true : false}
                  errorColor={COLOR.primary}
                />
              </View>
              <View style={styles.MainViewDropDownOne}>
                <DropDownSaim
                  itemContainerStyle={styles.itemContainerDropDrown}
                  label={ToText}
                  itemTextStyle={styles.itemTextDropDown}
                  enableSearch={true}
                  data={dates}
                  disableSort={true}
                  value={values.To}
                  onChange={(value: number) => setFieldValue("To", value)}
                  textInputStyle={styles.textInputDropDown}
                  required={true}
                  error={errors.FromS ? true : false}
                  errorColor={COLOR.primary}
                />
              </View>
            </View>
            <View style={styles.MainViewDropDown}>
              <DropDownSaim
                itemContainerStyle={styles.itemContainerDropDrown}
                label={BodyLabel}
                itemTextStyle={styles.itemTextDropDown}
                data={BodyType}
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
                  placeholder={"Kilometer From"}
                  name={"kilometerFrom"}
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
                  placeholder={"Kilometer To"}
                  name={"kilometerTo"}
                  required
                  errorTextStyle={styles.errorText}
                  keyboardType="numeric"
                />
              </View>
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
