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
import { KM } from "../../utils/form/validationForm";
import { connect } from "react-redux";
const FindCar = (currentUser: { currentUser: any }) => {
  const _User = currentUser.currentUser;
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setfavorites] = useState([] as Array<any>);
  const [fav, setfav] = useState(false);
  const [Productss, setProducts] = useState<any>([]);
  const [Loader, setLoader] = useState(false);
  const [LoadMore, setLoadMore] = useState(false);
  const [pageNumber, setpageNumber] = useState(1);
  const [totalCount, settotalCount] = useState(1);
 

  let limit = 10;

  useEffect(() => {
    AlreadyFav();
    fetchData(limit, false);
  }, []);
 
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
  const fetchData = async (limit: number, bool: boolean) => {
    setLoadMore(bool);
    setLoader(true);
    await allCars(pageNumber, limit)
      .then((result) => {
        console.log(result.data,result.totalCount)
        settotalCount(result.totalCount)
        if (result.status === "success") {
          setLoader(false),
            setProducts([...Productss, ...result.data.result]),
            setLoadMore(false);
          console.log("re", Productss.totalCount, pageNumber);
        } else {
          setLoader(false), alert(result.message);
        }
        setpageNumber(pageNumber + 1);
      })
      .catch((error) => {
        if (error.status === 401) return alert(error);
      });
  };
  const selectItem = (id: any) => {
    console.log("id", id);
    history.push(`/car-Details/${id}`);
  };
  const onChangeSearch = (query: React.SetStateAction<string>) =>
    setSearchQuery(query);

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
// console.log(_User,"dd",Productss)
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
          <HeadingSection Heading={DreamCar} SubHeading={`${totalCount}${Results}`}>
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
              const strDate = new Date(i.createdAt).toLocaleString("en", {
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
                 _User._id === i.createdBy ? null :
                <ProductBox
                  key={i._id}
                  Price={Price}
                  Title={i.model}
                  KMeter={`${i.milage}${KM}`}
                  year={i.modelYear}
                  date={`${strDate.split(" ")[2]} ${strDate.split(" ")[1]}`}
                  Location={
                    `${i.city}`.charAt(0).toUpperCase() + `${i.city}`.slice(1)
                  }
                  src={{ uri: `${i.image[0]}` }}
                  onPress={() => addFav(i)}
                  onSelect={() => selectItem(i._id)}
                  color={
                    fav === true
                      ? COLOR.primary
                      : favorites.includes(i._id) === true
                      ? COLOR.primary
                      : COLOR.secondary
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
const mapStateToProps = (state: {
  rootReducer: { auth: { currentUser: any } };
}) => ({
  currentUser: state.rootReducer.auth.currentUser,
});
export default connect(mapStateToProps)(FindCar);
