import React, { useCallback, useEffect, useState } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { PROVIDER_GOOGLE } from "react-native-maps";
import CustomText from "../../component/customText";
import CustomMapView from "../../component/customMapView";
import CustomTopBar from "../../component/customTopTab";
import CustomHeader from "../../component/customHeader/CustomHeader";
import Specification from "../../section/Specifications/specification";
import Features from "./features";
import CustomCarouselSaim40 from "../../component/customCarousel";
import CustomAvatar from "../../component/Avatar";
import { styles } from "./styles";
import {
  PlaceIcon,
  company,
  compareText,
  DescriptionHead,
  locationText,
  make,
  modelHeading,
  payAmount,
  productStatus,
  sellerText,
  shortListText,
  subModel,
  year,
  yearHeading,
  Items,
  FeatureProd,
  ToggleItems,
  CarDetail,
} from "../../utils/constants/carDetails/carDetails";
import { COLOR } from "../../Theme/Colors";
import { useHistory, useParams } from "react-router-native";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import CustomLoader from "../../component/CustomLoader";
import {
  addToFav,
  allFavourites,
  carDetailsById,
  removeFromFav,
} from "../../utils/api/CarsApi";
import Toast from "react-native-simple-toast";
import { KM, PriceRegex, RS } from "../../utils/form/validationForm";
import { Itemadded, Itemremoved } from "../../utils/constants/alertMsg";
import CustomButton from "../../component/CustomButton";
import { globalStyle } from "../../Styles";
import { Surface } from "react-native-paper";
import { engineHead } from "../../utils/constants/specification/specification";
import { FeaturesLabel } from "../../utils/constants/postDetails/postDetails";

interface ItemProps {
  src: any;
  title: string;
  text: string;
}
interface RenderItemProps {
  item: ItemProps;
  index: number;
}

const CarDetails = () => {
  const { id } = useParams<any>();
  const [IndexItems, setIndexItems] = useState<any>([]);
  const [User, setUser] = useState<any>([]);
  const [Loader, setLoader] = useState(false);
  const [favorites, setfavorites] = useState([] as Array<any>);
  const [fav, setfav] = useState(false);
  const history = useHistory();
  useEffect(() => {
    AlreadyFav();
    fetchItem();
  }, []);
  const fetchItem = async () => {
    console.log("sss", id);
    setLoader(true);
    await carDetailsById(id)
      .then((res) => {
        console.log("ressss", res.data.result.image);
        if (res.status === "success") {
          setLoader(false),
            setIndexItems(res.data.result),
            setUser(res.data.result.createdBy);
        } else if (res.status === "fail") {
          return alert(`${res.message}`);
        }
      })
      .catch((error) => {
        if (error.status === 401) return alert(error);
      });
  };
  const AlreadyFav = async () => {
    await allFavourites()
      .then((response) => {
        setLoader(true);
        let aa = response.data.result;
        if (response.status === "success") {
          setLoader(false);
          aa.map((items: any) => {
            if (items._id === id) {
              setfav(true);
            }
          });
        } else if (response.status === "fail") {
          return setLoader(false), alert(`${response.message}`);
        }
      })
      .catch((error) => {
        if (error.status === 401) return alert(error);
      });
  };
  const addFav = async (props: any) => {
    console.log("favvvv=", fav);

    let array = favorites;
    let addArray = true;
    fav === true ? (setfav(false), (addArray = false)) : (addArray = true);
    console.log(addArray, "arrayStatus", array, "array");

    array.map((item, key) => {
      if (item === props.id) {
        array.splice(key, 1);
        addArray = false;
      }
    });
    if (addArray) {
      await addToFav(props.id)
        .then((response) => {
          console.log("addfav");
          setLoader(true);
          if (response.status === "success") {
            setLoader(false), array.push(props.id), Toast.show(Itemadded);
          } else if (response.status === "fail") {
            return setLoader(false), alert(`${response.message}`);
          }
        })
        .catch((error) => {
          if (error.status === 401) return alert(error);
        });
    } else {
      await removeFromFav(props.id)
        .then((response) => {
          console.log("remofav", addArray, array);
          setLoader(true);
          if (response.status === "success") {
            setLoader(false), Toast.show(Itemremoved);
          } else if (response.status === "fail") {
            return setLoader(false), alert(`${response.message}`);
          }
        })
        .catch((error) => {
          if (error.status === 401) return alert(error);
        });
    }
    setfavorites([...array]);
  };
  const [ToggleIndex, setToggleIndex] = useState(0);

  const ItemToggle = (i: React.SetStateAction<number>) => {
    setToggleIndex(i);
    console.log(i, "some");
  };
  const ImagerenderItem = ({ item, index }: RenderItemProps) => {
    return (
      <View style={styles.imageRandomItemView}>
        <Image style={styles.RandomItemImage} source={{ uri: `${item}` }} />
      </View>
    );
  };
  console.log(User);
  const getPrice = () => {
    const pr = `${IndexItems.price}`.toString();
    var lastThree = pr.substring(pr.length - 3);
    var otherNumbers = pr.substring(0, pr.length - 3);
    if (otherNumbers != "") lastThree = "," + lastThree;
    const Price = otherNumbers.replace(PriceRegex, ",") + lastThree;
    return Price;
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        headerStyle={{ backgroundColor: COLOR.Cultured }}
        title={CarDetail}
        color={COLOR.DarkCharcoal}
        onPress={() => history.goBack()}
      />
      {Loader ? (
        <CustomLoader />
      ) : (
        <>
          <View style={styles.imageCarouselView}>
            <CustomCarouselSaim40
              layout={"default"}
              listItems={IndexItems.image}
              sliderWidth={wp("100%")}
              itemWidth={wp("70%")}
              renderItems={ImagerenderItem}
            />
          </View>
          <View style={styles.amountMainContainer}>
            <CustomText
              text={`${RS}${getPrice()}`}
              textStyle={styles.amountText}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.editStyle}
                onPress={() => history.push(`/edit-details/${id}`)}
              >
                <FontAwesome name="edit" size={25} color={COLOR.secondary} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.shareTouchableStyle}>
                <Entypo name="share" size={27} color={COLOR.secondary} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.shareTouchableStyle}
                onPress={() => addFav(IndexItems)}
              >
                <AntDesign
                  name="heart"
                  size={25}
                  color={
                    fav === true
                      ? COLOR.primary
                      : favorites.includes(IndexItems._id) === true
                      ? COLOR.primary
                      : COLOR.secondary
                  }
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.brandTextView}>
            <CustomText
              text={IndexItems.model}
              textStyle={styles.brandNameText}
            />
            <View style={styles.brandStatusView}>
              <CustomText
                text={productStatus}
                textStyle={styles.brandStatusText}
              />
            </View>
          </View>
          <View style={styles.productInfoMainView}>
            <View style={styles.productInfoSubView}>
              <View style={styles.infoView}>
                <Image style={styles.buttonIcon} source={PlaceIcon} />
                <CustomText
                  text={
                    `${IndexItems.city}`.charAt(0).toUpperCase() +
                    `${IndexItems.city}`.slice(1)
                  }
                  textStyle={styles.infoText}
                />
              </View>
              <View style={styles.infoView}>
                <Image
                  style={styles.buttonIcon}
                  source={require("../../../assets/images/road.png")}
                />
                <CustomText
                  text={`${IndexItems.milage} ${KM}`}
                  textStyle={styles.infoText}
                />
              </View>
              <View style={styles.infoView}>
                <Image
                  style={styles.buttonIcon}
                  source={require("../../../assets/images/diesal.png")}
                />
                <CustomText
                  text={IndexItems.engineType}
                  textStyle={styles.infoText}
                />
              </View>
            </View>
            <View style={styles.productInfoSubView}>
              <View style={styles.infoView}>
                <CustomText
                  text={IndexItems.make}
                  textStyle={styles.infoText}
                />
                <CustomText text={make} textStyle={styles.infoHeading} />
              </View>
              <View style={styles.infoView}>
                <CustomText
                  text={IndexItems.model}
                  textStyle={styles.infoText}
                />
                <CustomText
                  text={modelHeading}
                  textStyle={styles.infoHeading}
                />
              </View>
              <View style={styles.infoView}>
                <CustomText
                  text={IndexItems.modelYear}
                  textStyle={styles.infoText}
                />
                <CustomText text={yearHeading} textStyle={styles.infoHeading} />
              </View>
            </View>
          </View>
          <CustomText
            text={DescriptionHead}
            textStyle={styles.descriptionHeading}
          />
          <CustomText
            text={IndexItems.description}
            textStyle={styles.descriptionText}
          />
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
          <View style={styles.profileBorderView}>
            <View
              style={{ flexDirection: "column", justifyContent: "flex-start" }}
            >
              <CustomText text={sellerText} textStyle={styles.profileHeading} />
              <View style={styles.profileMainView}>
                <View style={styles.avatarView}>
                  <CustomAvatar
                    overlayContainerStyle={{ backgroundColor: "white" }}
                    size={hp("7%")}
                    rounded
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.8}
                    source={{ uri: `${User.image}` }}
                    imageProps={{ resizeMode: "contain", margin: 15 }}
                  />
                </View>
                <CustomText
                  text={
                    `${User.firstName} ${User.lastName}`
                      .charAt(0)
                      .toUpperCase() +
                    `${User.firstName} ${User.lastName} `.slice(1)
                  }
                  textStyle={styles.userNameText}
                />
                <Image
                  style={styles.buttonIcon}
                  source={require("../../../assets/images/check.png")}
                />
              </View>
            </View>
          </View>
          <CustomText text={locationText} textStyle={styles.AddPostedText} />
          <CustomMapView provider={PROVIDER_GOOGLE} style={styles.mapStyle} />
          <View style={styles.borderView}></View>
          <View>
            <View style={styles.searchButtonView}>
              {ToggleItems.map((u, i) => {
                return (
                  <CustomButton
                    text={u.title}
                    onPress={() => ItemToggle(i)}
                    key={u.id}
                    buttonStyle={
                      i === ToggleIndex
                        ? styles.searchActiveButton
                        : styles.searchInActiveButton
                    }
                    textStyle={
                      i === ToggleIndex
                        ? styles.searchActiveText
                        : styles.inActiveText
                    }
                  />
                );
              })}
            </View>
          </View>
          {ToggleIndex == 0 ? (
            <Surface>
              <Specification
                _EngineType={IndexItems.engineType}
                _BodyType={IndexItems.bodyType}
                _BodyColor={IndexItems.bodyColor}
                _Assebmly={IndexItems.condition}
                _ModelYear={IndexItems.modelYear}
                _regNumber={IndexItems.regNumber}
                _Transmission={IndexItems.transmission}
                _Mileage={IndexItems.milage}
                _Condition={IndexItems.condition}
                _engineCapacity={IndexItems.engineCapacity}
              />
            </Surface>
          ) : ToggleIndex == 1 ? (
            <Surface>
              <View style={styles.mainContaier}>
                <View style={styles.infoView}>
                  <View
                    style={{
                      flexDirection: "column",
                      justifyContent: "flex-start",
                    }}
                  >
                    <CustomText
                      text={FeaturesLabel}
                      textStyle={styles.headingText}
                    />
                  </View>
                  <CustomText
                    text={IndexItems.features}
                    textStyle={styles.subText}
                  />
                </View>
                <View style={styles.borderView}></View>
              </View>
            </Surface>
          ) : null}
          <CustomText
            text={FeatureProd}
            textStyle={styles.FeatureProductText}
          />
          <Features />
        </>
      )}
    </View>
  );
};

export default CarDetails;
