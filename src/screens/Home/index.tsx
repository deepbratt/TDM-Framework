
import React, { FC, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Surface, TextInput } from "react-native-paper";
import CustomHeader from '../../component/customHeader/CustomHeader';
import CustomInput from "../../component/CustomInput/CustomInput";
import { openDrawer } from '../../navigation';
import { BookNow, categotryList, MostPopular, Par1, popularProduct, SearchedCars, SellYou } from "../../utils/constants/HomeConstant";
import { HomeStyle } from "./style";
import Category from "../../component/CategoryBox";
import CustomButton from "../../component/CustomButton";
import MyTabs from "../../navigation/TopBar";
import Hashback from "../../section/HashBack";
import { ScrollView } from "react-native-gesture-handler";
import TabTwoScreen from "../TabTwoScreen";
import { Dimensions } from "react-native";
import BottomSheetComponent from "../../component/BottomSheet";
import CustomSearch from "../../component/search";
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const HomePage = () => {
  const [visible, setVisible] = useState(false);
  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };
  const { container, searchStyle, inputView, categoryBox, title,
    bannerimage, carsView, head, sellView, buttonView, button, buttonText, paragraph,flexRow,VerticalMargin, activeStyle, inActiveStyle, activeText, inActiveText } = HomeStyle;
  const [searchQuery, setSearchQuery] = useState('');
  const [ActiveIndex, setActiveIndex] = useState(0);
const toggleButton=(i: React.SetStateAction<number>)=>{
  setActiveIndex(i);
console.log(i,"some")
}
  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
  return (
    <View>
      <CustomHeader
        headerStyle={{ backgroundColor: "#C20000" }}
        color="#fff" isHome={true} location
        onPress={() => openDrawer()} />
      <View style={container}>
        <View style={inputView}>
          <CustomInput
            placeholder="Search"
            style={searchStyle}
            value={searchQuery}
            onChange={onChangeSearch}
            leftIcon={
              <TextInput.Icon
                size={18}
                name={require('../../../assets/images/homepage/search.png')}
              />
            }
            rightIcon={
              <TextInput.Icon
                size={18}
                name={require('../../../assets/images/homepage/filter.png')}
                onPress={toggleBottomNavigationView}
              />
            }
          />

        </View>
        <View style={{ justifyContent: "space-between" }}>
          <View>
            <Text style={title}>Browse Categories</Text></View>
          <View style={categoryBox}>
            {
              categotryList.map((i) => {
                return (
                  <Category linkTo={i.onPress}
                    key={i.id}
                    ProductImage={i.ProductImage}
                    ProductName={i.ProductName}
                    viewStyle={i.viewStyle} />
                )
              })
            }
          </View>
        </View>
        <View style={carsView}>
          <View style={{ position: "relative" }}>
            <Image
              fadeDuration={0}
              style={bannerimage}
              source={require('../../../assets/images/homepage/cars.png')}
            /></View>
          <View style={sellView}>
            <Text style={head}>{SellYou}</Text>
            <Text style={paragraph}>{Par1}</Text>
            <View style={buttonView}>
              <CustomButton text={BookNow} buttonStyle={button} textStyle={buttonText} linkTo="/" />
            </View>
          </View>
        </View>
        <View style={{ justifyContent: "space-between" }}>

          <Text style={title}>{SearchedCars}</Text>
          <Surface style={{ elevation: 5, marginVertical: 10, justifyContent: "center", alignItems: "center", }}>
            <MyTabs />
          </Surface>
          <Surface style={VerticalMargin}>
            <Hashback />
          </Surface>
          <Surface style={VerticalMargin}>
            <Hashback />
          </Surface>
        </View>
        <Text style={title}>{MostPopular}</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={flexRow}>
            {popularProduct.map((u, i) => {
              return (
                <CustomButton text={u.title}
                  onPress={()=>toggleButton(i)}
                  key={u.id} buttonStyle={i === ActiveIndex ? activeStyle : inActiveStyle}
                  textStyle={i === ActiveIndex ? activeText : inActiveText} />
              )
            })}
          </View>
        </ScrollView>
      {
        ActiveIndex== 0 ? (<Surface style={VerticalMargin}>
          <Hashback />
          </Surface>): null
      }  
      </View>
      <BottomSheetComponent
          visible={visible}
          onBackButtonPress={toggleBottomNavigationView}
          onBackdropPress={toggleBottomNavigationView}
        >
          <CustomSearch/>
        </BottomSheetComponent>
    </View>
  )
}
export default HomePage;