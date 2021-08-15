import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { TextInput } from "react-native-paper";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import CustomButton from "../../component/CustomButton";
import CustomHeader from "../../component/customHeader/CustomHeader";
import CustomLoader from "../../component/CustomLoader";
import HeadingSection from "../../section/CustomHeading/Heading";
import { globalStyle } from "../../Styles";
import { COLOR } from "../../Theme/Colors";
import { carCompare } from "../../utils/api/CarsApi";
import {
  Assebmly,
  BodyColor,
  BodyType,
  ChangeCar,
  Condition,
  Engine,
  Mileage,
  Reviews,
  SeeDetails,
  Specifications,
  Transmission,
  Vs,
} from "../../utils/constants/compare";
import { compareProduct } from "../../utils/constants/HomeConstant";
import {
  FeaturesLabel,
} from "../../utils/constants/postDetails/postDetails";
import { RS } from "../../utils/form/validationForm";
import { compareStyle } from "./style";


const CompareProduct = (SelectedItem: { SelectedItem: { _id: any }[] }) => {
  const {
    ImageView,
    view1,
    vsStyle,
    vsText,
    bannerimage,
    carName,
    locateText,
    pText,
    flexRow,
    buttonText,
    tableStyle,
    textStyle,
    labelStyle,
  } = compareStyle;

  const [ActiveIndex, setActiveIndex] = useState(0);
  const [Loader, setLoader] = useState(false);
  const [car, setCars] = useState<any>([]);

  const toggleButton = (i: React.SetStateAction<number>) => {
    setActiveIndex(i);
  };
  const history = useHistory();
  const back = () => {
    history.goBack();
  };
  const ID1 = SelectedItem.SelectedItem[0]._id;
  const ID2 = SelectedItem.SelectedItem[1]._id;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoader(true);
    await carCompare(ID1, ID2)
      .then((result) => {
        console.log(result);
        if (result.status === "success") {
          setLoader(false), setCars(result.data.result);
        } else {
          setLoader(false), alert(result.message);
        }
      })
      .catch((error) => {
        if (error.status === 401) return alert(error);
      });
  };
  
  return (
    <View>
      <CustomHeader
        headerStyle={{ backgroundColor: COLOR.Cultured }}
        color={COLOR.DarkCharcoal}
        isHome={false}
        title="Compare"
        onPress={back}
      />
      <View style={globalStyle.container}>
        <ScrollView
          style={{ marginTop: 10 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <View style={globalStyle.flexRow}>
            {compareProduct.map((u, i) => {
              return (
                <CustomButton
                  text={u.title}
                  onPress={() => toggleButton(i)}
                  key={u.id}
                  buttonStyle={
                    i === ActiveIndex
                      ? compareStyle.activeStyle
                      : compareStyle.inActiveStyle
                  }
                  textStyle={
                    i === ActiveIndex
                      ? globalStyle.activeText
                      : globalStyle.inActiveText
                  }
                />
              );
            })}
          </View>
        </ScrollView>
        {Loader ? (
          <CustomLoader />
        ) : (
          <>
            <View style={ImageView}>
              {car.map(
                (i: {
                  _id: React.Key | null | undefined;
                  images: any[];
                  make:
                    | boolean
                    | React.ReactChild
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined;
                  city:
                    | boolean
                    | React.ReactChild
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined;
                  price:
                    | string
                    | number
                    | boolean
                    | {}
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | React.ReactNodeArray
                    | React.ReactPortal
                    | null
                    | undefined;
                }) => {
                  const pr = `${i.price}`.toString();
                  var lastThree = pr.substring(pr.length - 3);
                  var otherNumbers = pr.substring(0, pr.length - 3);
                  if (otherNumbers != "") lastThree = "," + lastThree;
                  const Price =
                    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") +
                    lastThree;
                  return (
                    <View style={view1} key={i._id}>
                      <Image
                        fadeDuration={0}
                        style={bannerimage}
                        source={{ uri: `${i.image[0]}` }}
                      />
                      <View>
                        <Text style={carName}>{i.make}</Text>
                        <View style={flexRow}>
                          <Ionicons
                            name="location-outline"
                            size={14}
                            color={COLOR.secondary}
                          />
                          <Text style={locateText}>{i.city}</Text>
                        </View>
                        <View style={flexRow}>
                          <TextInput.Icon
                            name={require("../../../assets/images/icon/tag.png")}
                            size={16}
                            color={COLOR.primary}
                          />
                          <Text style={pText}>{`${RS}${Price}`} </Text>
                        </View>
                        <View style={flexRow}>
                          <CustomButton
                            text={SeeDetails}
                            textStyle={buttonText}
                            linkTo={`/car-Details/${i._id}`}
                          />
                          <CustomButton
                            text={ChangeCar}
                            textStyle={buttonText}
                            linkTo="/compare"
                          />
                        </View>
                      </View>
                    </View>
                  );
                }
              )}
              <View style={vsStyle}>
                <Text style={vsText}>{Vs}</Text>
              </View>
            </View>

            {ActiveIndex == 0 ? (
              <>
                <HeadingSection Heading={Specifications}>
                  <View style={tableStyle}>
                    <Text style={labelStyle}>{Engine}</Text>
                    {car.map(
                      (i: {
                        _id: React.Key | null | undefined;
                        engineType: string | null | undefined;
                      }) => {
                        return (
                          <Text key={i._id} style={textStyle}>
                            {i.engineType}{" "}
                          </Text>
                        );
                      }
                    )}
                  </View>
                  <View style={tableStyle}>
                    <Text style={labelStyle}>{BodyType}</Text>
                    {car.map(
                      (i: {
                        _id: React.Key | null | undefined;
                        bodyType: string | null | undefined;
                      }) => {
                        return (
                          <Text key={i._id} style={textStyle}>
                            {i.bodyType}{" "}
                          </Text>
                        );
                      }
                    )}
                  </View>
                  <View style={tableStyle}>
                    <Text style={labelStyle}>{BodyColor}</Text>
                    {car.map(
                      (i: {
                        _id: React.Key | null | undefined;
                        bodyColor: string | null | undefined;
                      }) => {
                        return (
                          <Text key={i._id} style={textStyle}>
                            {i.bodyColor}{" "}
                          </Text>
                        );
                      }
                    )}
                  </View>
                  <View style={tableStyle}>
                    <Text style={labelStyle}>{Mileage}</Text>
                    {car.map(
                      (i: {
                        _id: React.Key | null | undefined;
                        milage: string | null | undefined;
                      }) => {
                        return (
                          <Text key={i._id} style={textStyle}>
                            {i.milage}{" "}
                          </Text>
                        );
                      }
                    )}
                  </View>
                  <View style={tableStyle}>
                    <Text style={labelStyle}>{Assebmly}</Text>
                    {car.map(
                      (i: {
                        _id: React.Key | null | undefined;
                        assembly: string | null | undefined;
                      }) => {
                        return (
                          <Text key={i._id} style={textStyle}>
                            {i.assembly}{" "}
                          </Text>
                        );
                      }
                    )}
                  </View>
                  <View style={tableStyle}>
                    <Text style={labelStyle}>{Transmission}</Text>
                    {car.map(
                      (i: {
                        _id: React.Key | null | undefined;
                        transmission: string | null | undefined;
                      }) => {
                        return (
                          <Text key={i._id} style={textStyle}>
                            {i.transmission}{" "}
                          </Text>
                        );
                      }
                    )}
                  </View>
                  <View style={tableStyle}>
                    <Text style={labelStyle}>{Condition}</Text>
                    {car.map(
                      (i: {
                        _id: React.Key | null | undefined;
                        condition: string | null | undefined;
                      }) => {
                        return (
                          <Text key={i._id} style={textStyle}>
                            {i.condition}{" "}
                          </Text>
                        );
                      }
                    )}
                  </View>
                </HeadingSection>
              </>
            ) : ActiveIndex == 1 ? (
              <>
                <HeadingSection Heading={FeaturesLabel}>
                  <View style={tableStyle}>
                    <Text style={labelStyle}>{FeaturesLabel}</Text>
                    {car.map(
                      (i: {
                        _id: React.Key | null | undefined;
                        features: string | null | undefined;
                      }) => {
                        return (
                          <Text key={i._id} style={textStyle}>
                            {i.features}{" "}
                          </Text>
                        );
                      }
                    )}
                  </View>
                </HeadingSection>
              </>
            ) : (
              <>
                <HeadingSection Heading={Reviews}></HeadingSection>
              </>
            )}
          </>
        )}
      </View>
    </View>
  );
};
const mapStateToProps = (state: {
  rootReducer: { auth: { SelectedItem: any } };
}) => ({
  SelectedItem: state.rootReducer.auth.SelectedItem,
});
export default connect(mapStateToProps)(CompareProduct);
