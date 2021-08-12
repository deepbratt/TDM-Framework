import React, { useEffect, useState } from "react";
import { FlatList, Image } from "react-native";
import { Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import { allCarsByPrice } from "../../utils/api";
import { Style } from "../HashBack/style";
import { COLOR } from "../../Theme/Colors";

interface ItemProps {
  src: any;
  title: string;
  text: string;
}
interface RenderItemProps {
  item: ItemProps;
  index: number;
}
export default function BetweenFiveToTenLakh() {
  const {
    container,
    images,
    titleText,
    detail,
    main,
    flatListView,
    loadingView,
    rate,
    rating,
    ratingView,
  } = Style;
  const [carlist, setCarList] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [page, SetPage] = useState(1);
  const [status, setStatus] = useState("success");
  useEffect(() => {
    fetchCarByPrice();
  }, [page]);
  const price = "[gt]=500000&price[lt]=1000000";
  const fetchCarByPrice = async () => {
    let url = "" + page;
    if (price) {
      url += "&price" + price;
    }
    setLoading(true);
    await allCarsByPrice(url)
      .then((result) => {
        console.log(result);
        console.log(result.status);
        if (result.status === "success") {
          setLoading(false), setCarList([...carlist, ...result.data.result]);
          let temp = [...carlist, ...result.data.result];
          console.log(temp.length);
        } else {
          setLoading(false), alert(result.message);
        }
      })
      .catch((error) => {
        if (error.status === 401) return alert(error);
      });
  };


  const renderFooter = () => {
    return loading ? (
      <View style={{ marginTop: 10, alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };

  const handleLoadMore = () => {
    if (!loading && status === "success") {
      SetPage(page + 1);
    }
  };

  return (
    <View>
      {loading ? (
        <View style={loadingView}>
          <ActivityIndicator size="large" color={COLOR.primary} />
        </View>
      ) : (
        <View>
          <FlatList
            style={flatListView}
            data={carlist}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={main}>
                <TouchableOpacity style={container}>
                  <Image
                    style={images}
                    source={
                      typeof item.images === "string" ? item.images : null
                    }
                  />
                  <Text style={detail}>{item.price}</Text>
                  <Text style={titleText}>{item.model}</Text>
                  {/* <View style={ratingView}>
              <Image
                style={rate}
                fadeDuration={0}
                source={require("../../../assets/images/slider/stars.png")}
              />
              <Text style={rating}>(3.8)</Text>
            </View> */}
                </TouchableOpacity>
              </View>
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ListFooterComponent={renderFooter}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.1}
          />
        </View>
      )}
    </View>
  );
}
