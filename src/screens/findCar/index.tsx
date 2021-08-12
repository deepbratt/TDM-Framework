import React, { createRef, FC, useEffect, useState } from "react";
import { Button, ScrollView, View } from "react-native";
import CustomHeader from "../../component/customHeader/CustomHeader";
import { globalStyle } from "../../Styles";
import HeadingSection from "../../section/CustomHeading/Heading";
import { DreamCar, Products, Results } from "../../utils/constants/CarsText";
import ProductBox from "../../component/ProductBox";
import { useHistory } from "react-router-native";
import { COLOR } from "../../Theme/Colors";
import Toast from "react-native-simple-toast";
import CustomSearch from "../../component/CustomSearch";
import CustomLoader from "../../component/CustomLoader";
import {
  addToFav,
  allCars,
  allFavourites,
  myCarsApi,
  removeFromFav,
} from "../../utils/api/CarsApi";
import { Itemadded, Itemremoved } from "../../utils/constants/alertMsg";
import CustomButton from "../../component/CustomButton";
import { openDrawer } from "../../navigation";
const FindCar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setfavorites] = useState([] as Array<number>);
  const [Productss, setProducts] = useState<any>([]);
  const [Loader, setLoader] = useState(false);
  const [LoadMore, setLoadMore] = useState(false);
  const [pageNumber, setpageNumber] = useState(1);
  let limit = 10;

  useEffect(() => {
    fetchData(limit, false);
  }, []);

  const fetchData = async (limit: number, bool: boolean) => {
    setLoadMore(bool);
    setLoader(true);
    await allCars(pageNumber, limit)
      .then((result) => {
        // console.log(result,result.length)
        if (result.status === "success") {
          setLoader(false),
            setProducts([...Productss, ...result.data.result]),
            setLoadMore(false);
          console.warn("re", Productss.length, pageNumber);
        } else {
          setLoader(false), alert(result.message);
        }
        setpageNumber(pageNumber + 1);
      })
      .catch((error) => {
        if (error.status === 401) return alert(error);
      });
  };
 

  // const fetchData = async () => {
  //   setLoader(true);
  //   await myCarsApi()
  //     .then((result) => {
  //       console.log(result, "my car");
  //       if (result.status === "success") {
  //         setLoader(false), setProducts(result.data.result);
  //       } else {
  //         setLoader(false), alert(result.message);
  //       }
  //     })
  //     .catch((error) => {
  //       if (error.status === 401) return alert(error);
  //     });
  // };
  const selectItem = (id: any) => {
    console.log("id", id);
    history.push(`/car-Details/${id}`);
  };
  const onChangeSearch = (query: React.SetStateAction<string>) =>
    setSearchQuery(query);

  const addFav = async (props: any) => {
    let array = favorites;
    let addArray = true;

    addArray = true;
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
  const history = useHistory();
  const back = () => {
    history.goBack();
  };
  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: {
    layoutMeasurement: any;
    contentOffset: any;
    contentSize: any;
  }) => {
    const paddingToBottom = 20;
    console.log("scrollling");
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };
  var BOTTOM = 10;
  // const handlePagination = (event: any) => {
  //   const currentY = event.nativeEvent.contentOffset.y;
  //   if (currentY == BOTTOM) {
  //   console.log("pagescroll")
  //   }
  // };

  return (
    <View>
      <CustomHeader
        headerStyle={{ backgroundColor: COLOR.primary }}
        color={COLOR.White}
        isHome={true}
        location
        onPress={()=>openDrawer()}
      />
      <View style={globalStyle.container}>
        <View style={globalStyle.inputView}>
          <CustomSearch value={searchQuery} onChange={onChangeSearch} />
        </View>
        {Loader && pageNumber == 1 ? (
        <CustomLoader />
      ) : (
          <HeadingSection Heading={DreamCar} SubHeading={Results}>
          <ScrollView
          scrollEventThrottle={16}
          // onScroll={handlePagination}
          // onScroll={({ nativeEvent }) => {
          //   if (isCloseToBottom(nativeEvent)) {
          //     console.log("Reached end of page", nativeEvent);
          //     fetchData(limit, true);
          //   } else{
          //       console.log("Reached not end of page", nativeEvent);
          //   }
          // }}
          onContentSizeChange={(contentWidth, contentHeight) => {
            BOTTOM = contentHeight;
            console.warn("scroll", BOTTOM);
          }}
        >
            {Productss.map((i: any) => {
              const strDate = new Date(i.date).toLocaleString("en", {
                day: "numeric",
                month: "short",
              });
              const pr = `${i.price}`.toString();
              var lastThree = pr.substring(pr.length - 3);
              var otherNumbers = pr.substring(0, pr.length - 3);
              if (otherNumbers != "") lastThree = "," + lastThree;
              const Price =
                otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
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
                  src={{ uri: `${i.images[0]}` }}
                  onPress={() => addFav(i)}
                  onSelect={() => selectItem(i._id)}
                  color={
                    favorites.includes(i.id) ? COLOR.primary : COLOR.secondary
                  }
                  status={"like"}
                />
              );
            })}
            </ScrollView>
          </HeadingSection>
        )}
      {LoadMore ?  <CustomLoader />: <CustomButton text="loadMore" onPress={()=>fetchData(limit, true)}/>}
      </View>
 
    </View>
  );
};
export default FindCar;
