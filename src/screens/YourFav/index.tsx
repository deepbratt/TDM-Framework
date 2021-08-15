import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useHistory } from "react-router-native";
import CustomHeader from "../../component/customHeader/CustomHeader";
import CustomSearch from "../../component/CustomSearch";
import ProductBox from "../../component/ProductBox";
import { openDrawer } from "../../navigation";
import { globalStyle } from "../../Styles";
import { COLOR } from "../../Theme/Colors";
import Toast from "react-native-simple-toast";
import CustomLoader from "../../component/CustomLoader";
import { allFavourites, removeFromFav } from "../../utils/api/CarsApi";
import { Itemremoved, NoItems } from "../../utils/constants/alertMsg";
import { Yourfavourite } from "../../utils/constants/HomeConstant";
import { KM } from "../../utils/form/validationForm";
const YourFav = () => {
  const [favorites, setfavorites] = useState([] as Array<number>);
  const [Items, setItems] = useState<any>([]);
  const [Loader, setLoader] = useState(false);
  const history = useHistory();

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setLoader(true);
    await allFavourites()
      .then((result) => {
        console.log("result");
        if (result.status === "success") {
          setLoader(false), setItems(result.data.result);
        } else {
          setLoader(false), console.log(result.message);
        }
      })
      .catch((error) => {
        if (error.status === 401) return alert(error);
      });
  };

  const SelectItem = (id: any) => {
    console.log("id", id);
    history.push(`/car-Details/${id}`);
  };

  const RemoveItem = async (props: any) => {
    const newProduct = Items.filter((i: { _id: any; }) => i._id !== props.id);
    await removeFromFav(props.id)
      .then((response) => {
        setLoader(true);
        if (response.status === "success") {
          setLoader(false), favorites.push(props.id);
          Toast.show(Itemremoved);
          console.log(newProduct.length, "sdd");
        } else if (response.status === "fail") {
          return setLoader(false), alert(`${response.message}`);
        }
      })
      .catch((error) => {
        if (error.status === 401) return alert(error);
      });
    setfavorites([...favorites]);
  };
  return (
    <View>
      <CustomHeader
        headerStyle={{ backgroundColor: COLOR.Cultured }}
        color={COLOR.DarkCharcoal}
        isHome={true}
        title={Yourfavourite}
        onPress={() => openDrawer()}
      />
      <View style={globalStyle.container}>
        <View style={globalStyle.inputView}>
          <CustomSearch
          // value={searchQuery}
          //     onChange={onChangeSearch}
          />
        </View>
        {Loader ? (
          <CustomLoader />
        ) : Items.length === 0 ? (
          <View style={globalStyle.loadingView}>
            <Text>{NoItems}</Text>
          </View>
        ) : (
          <>
            {Items.map((i: any) => {
              const strDate = new Date(i.createdAt).toLocaleString("en", {
                day: "numeric",
                month: "short",
              });
              return (
                <ProductBox
                  key={i._id}
                  Price={i.price}
                  Title={i.model}
                  KMeter={`${i.milage}${KM}`}
                  year={i.modelYear}
                  date={`${strDate.split(" ")[2]} ${strDate.split(" ")[1]}`}
                  Location={i.location.address}
                  status={"like"}
                  src={{ uri: `${i.image[0]}` }}
                  onSelect={() => SelectItem(i._id)}
                  onPress={() => RemoveItem(i)}
                  color={
                    favorites.includes(i._id) ? COLOR.secondary : COLOR.primary
                  }
                />
              );
            })}
          </>
        )}
      </View>
    </View>
  );
};
export default YourFav;
