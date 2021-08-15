import { MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { connect, useDispatch } from "react-redux";
import CustomButton from "../../component/CustomButton";
import CustomHeader from "../../component/customHeader/CustomHeader";
import CustomLoader from "../../component/CustomLoader";
import CustomSearch from "../../component/CustomSearch";
import ProductBox from "../../component/ProductBox";
import { openDrawer } from "../../navigation";
import { compare, remove } from "../../redux/reducers/authSlice";
import HeadingSection from "../../section/CustomHeading/Heading";
import { globalStyle } from "../../Styles";
import { COLOR } from "../../Theme/Colors";
import { allCars } from "../../utils/api/CarsApi";
import { Itemadded, Itemremoved } from "../../utils/constants/alertMsg";
import { compareStyle } from "./style";
import Toast from "react-native-simple-toast";
const SearchCompare = ({ SelectedItem, activeCompare }) => {
  const { crossIcon, imageIcon, compareButton, compareText, chip, flexHeight } =
    compareStyle;
  const [searchQuery, setSearchQuery] = useState("");
  const [Loader, setLoader] = useState(false);
  const [cars, setCars] = useState<any>([]);
  const onChangeSearch = (query: any) => {
    setSearchQuery(query);
    console.log("serach", searchQuery);
  };
  const Submit = () => {
    console.log("submit", searchQuery);
  };
  const dispatch = useDispatch();
  const addToCompare = (item: any) => {
    dispatch(compare(item));
    Toast.show(Itemadded);
  };
  const removeFromCompare = (item: any) => {
    dispatch(remove(item));
    Toast.show(Itemremoved);
  };

  useEffect(() => {
    fetchCar();
  }, []);

  const fetchCar = async () => {
    setLoader(true);
    await allCars()
      .then((result) => {
        //  console.log(result,"copmareee")
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
        headerStyle={{ backgroundColor: COLOR.primary }}
        color={COLOR.White}
        isHome={true}
        location
        onPress={() => openDrawer()}
      />
      <View style={globalStyle.container}>
        <View style={globalStyle.inputView}>
          <CustomSearch value={searchQuery} onChange={onChangeSearch} />
        </View>

        {Loader ? (
          <CustomLoader />
        ) : (
          <>
            <HeadingSection
              Heading="Filter Items"
              SubHeading={`Select Items to be Compare: `}
            >
              {SelectedItem.length > 0 && (
                <View style={flexHeight}>
                  {SelectedItem.map((i: any) => {
                    return (
                      <TouchableOpacity
                        onPress={() => removeFromCompare(i)}
                        key={i.id}
                        style={chip}
                      >
                        <Image
                          style={imageIcon}
                          source={{ uri: `${i.images[0]}` }}
                        />
                        <MaterialIcons
                          name="cancel"
                          size={20}
                          color="black"
                          style={crossIcon}
                        />
                      </TouchableOpacity>
                    );
                  })}
                  {activeCompare === true && (
                    <CustomButton
                      text="Compare"
                      linkTo={`/compareProduct`}
                      buttonStyle={compareButton}
                      textStyle={compareText}
                    />
                  )}
                  {/* {
                       SelectedItem.length ===2 ? alert("only two items can be compare"):null
                    } */}
                </View>
              )}
              {cars.map((i: any, index: number) => {
                const strDate = new Date(i.date).toLocaleString("en", {
                  day: "numeric",
                  month: "short",
                });
                const pr = `${i.price}`.toString();
                var lastThree = pr.substring(pr.length - 3);
                var otherNumbers = pr.substring(0, pr.length - 3);
                if (otherNumbers != "") lastThree = "," + lastThree;
                const Price =
                  otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") +
                  lastThree;
                return (
                  <ProductBox
                    key={i._id}
                    Price={Price}
                    Title={i.model}
                    KMeter={i.milage}
                    year={i.year}
                    date={`${strDate.split(" ")[3]} ${strDate.split(" ")[1]}`}
                    Location={
                      `${i.city}`.charAt(0).toUpperCase() + `${i.city}`.slice(1)
                    }
                    // src={{ uri: `${i.images[0]}` }}
                    onSelect={() => addToCompare(i)}
                  />
                );
              })}
            </HeadingSection>
          </>
        )}
      </View>
    </View>
  );
};
const mapStateToProps = (state: {
  rootReducer: { auth: { SelectedItem: any; activeCompare: any } };
}) => ({
  SelectedItem: state.rootReducer.auth.SelectedItem,
  activeCompare: state.rootReducer.auth.activeCompare,
});
export default connect(mapStateToProps)(SearchCompare);
