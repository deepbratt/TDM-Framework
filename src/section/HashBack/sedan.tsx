import React, { useEffect, useState } from "react";
import { FlatList, Image } from "react-native";
import { Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import { allCarsByBody } from "../../utils/api/CarsApi";
import { Style } from "./style";
import { COLOR } from "../../Theme/Colors";
import { useHistory } from "react-router-native";

interface ItemProps {
  src: any;
  title: string;
  text: string;
}
interface RenderItemProps {
  item: ItemProps;
  index: number;
}
export default function Sedan() {
  const {
    container,
    images,
    titleText,
    detail,
    main,
    flatListView,
    loadingView,
    emptyText,
    emptyView,
    rate,
    rating,
    ratingView,
  } = Style;
  const [carlist, setCarList] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [page, SetPage] = useState(1);
  const [status, setStatus] = useState("success");

  useEffect(() => {
    fetchAllCars();
  }, [page]);
  const bodyType = "Sedan";
  const fetchAllCars = async () => {
    let url = "" + page;
    if (bodyType) {
      url += "&bodyType=" + bodyType;
    }
    setLoading(true);
    await allCarsByBody(url)
      .then((result) => {
        // console.log(result);
        // console.log(result.status)
        console.log(url);
        setStatus(result.status);
        if (result.status === "success") {
          setLoading(false);
          setCarList([...carlist, ...result.data.result]);
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
  const ListEmptyView = () => {
    return (
      <View style={emptyView}>
        <Text style={emptyText}>No Cars Available</Text>
      </View>
    );
  };
  const history = useHistory();
  const selectItem = (id: any) => {
    console.log("id", id);
    history.push(`/car-Details/${id}`);
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
            keyExtractor={(item, index) => item._id + index}
            renderItem={({ item }) => (
              <View style={main} key={item._id}>
                <TouchableOpacity
                  style={container}
                  onPress={() => selectItem(item.id)}
                >
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
              ListEmptyComponent={ListEmptyView}
          />
        </View>
      )}
    </View>
  );
}
