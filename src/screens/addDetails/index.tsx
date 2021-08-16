import React, { useCallback, useEffect, useState } from "react";
import { View, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { PROVIDER_GOOGLE } from "react-native-maps";
import CustomText from "../../component/customText";
import CustomMapView from "../../component/customMapView";
import CustomHeader from "../../component/customHeader/CustomHeader";
import Specification from "../../section/Specifications/specification";
import Features from "../carDetails/features";
import CustomCarouselSaim40 from "../../component/customCarousel";
import { styles } from "../carDetails/styles";
import {
  locationText,
  FeatureProd,
  ToggleItems,
  AdsDetail,
} from "../../utils/constants/carDetails/carDetails";
import { COLOR } from "../../Theme/Colors";
import { useHistory, useParams } from "react-router-native";
import CustomLoader from "../../component/CustomLoader";
import { carDetailsById } from "../../utils/api/CarsApi";
import { PriceRegex } from "../../utils/form/validationForm";
import CustomButton from "../../component/CustomButton";
import { Surface } from "react-native-paper";
import { FeaturesLabel } from "../../utils/constants/postDetails/postDetails";
import DetailsView from "../../section/DetailView";

interface ItemProps {
  src: any;
  title: string;
  text: string;
}
interface RenderItemProps {
  item: ItemProps;
  index: number;
}

const AdDetails = () => {
  const { id } = useParams<any>();
  const [IndexItems, setIndexItems] = useState<any>([]);
  const [User, setUser] = useState<any>([]);
  const [Loader, setLoader] = useState(false);
  const history = useHistory();
  useEffect(() => {
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
  const [ToggleIndex, setToggleIndex] = useState(0);

  const ItemToggle = (i: React.SetStateAction<number>) => {
    setToggleIndex(i);
    console.log(i, "some");
  };
  const ImagerenderItem = useCallback(({ item, index }: RenderItemProps) => {
    return (
      <View style={styles.imageRandomItemView}>
        <Image style={styles.RandomItemImage} source={{ uri: `${item}` }} />
      </View>
    );
  }, []);

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
        title={AdsDetail}
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
          <DetailsView
            view={AdsDetail}
            EditOnPress={() => history.push(`/edit-details/${id}`)}
            ProfileImage={{ uri: `${User.image}` }}
            UserName={
              `${User.firstName} ${User.lastName}`.charAt(0).toUpperCase() +
              `${User.firstName} ${User.lastName} `.slice(1)
            }
            _City={
              `${IndexItems.city}`.charAt(0).toUpperCase() +
              `${IndexItems.city}`.slice(1)
            }
            _Price={getPrice()}
            _description={IndexItems.description}
            _engineType={IndexItems.engineType}
            _make={IndexItems.make}
            _milage={IndexItems.milage}
            _model={IndexItems.model}
            _modelYear={IndexItems.modelYear}
          />
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

export default AdDetails;
