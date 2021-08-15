import React, { FC, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useHistory } from "react-router-native";
import CustomHeader from "../../../component/customHeader/CustomHeader";
import CustomLoader from "../../../component/CustomLoader";
import ProductBox from "../../../component/ProductBox";
import { openDrawer } from "../../../navigation";
import HeadingSection from "../../../section/CustomHeading/Heading";
import { COLOR } from "../../../Theme/Colors";
import { myCarsApi } from "../../../utils/api/CarsApi";
import { YourAdsTitle } from "../../../utils/constants/HomeConstant";
import { KM } from "../../../utils/form/validationForm";

const YourAds: FC = () => {
  const [Productss, setProducts] = useState<any>([]);
  const [Loader, setLoader] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoader(true);
    await myCarsApi()
      .then((result) => {
        console.log(result);
        if (result.status === "success") {
          setLoader(false), setProducts(result.data.result);
        } else {
          setLoader(false), alert(result.message);
        }
      })
      .catch((error) => {
        if (error.status === 401) return alert(error);
      });
  };
  const history = useHistory();
  const selectItem = (id: any) => {
    console.log("id", id);
    history.push(`/add-Details/${id}`);
  };
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader
        headerStyle={{ backgroundColor: COLOR.Cultured }}
        color={COLOR.DarkCharcoal}
        isHome={true}
        title={YourAdsTitle}
        onPress={() => openDrawer()}
      />
      {Loader ? (
        <CustomLoader />
      ) : (
        <HeadingSection>
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
                onSelect={() => selectItem(i._id)}
              />
            );
          })}
        </HeadingSection>
      )}
    </View>
  );
};
export default YourAds;
