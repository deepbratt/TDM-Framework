
import React, { FC, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Surface } from "react-native-paper";
import CustomHeader from '../../component/customHeader/CustomHeader';
import { openDrawer } from '../../navigation';
import { BookNow, Browse, categotryList, MostPopular, Par1, popularProduct, SearchedCars, SellYou } from "../../utils/constants/HomeConstant";
import { HomeStyle } from "./style";
import Category from "../../component/CategoryBox";
import CustomButton from "../../component/CustomButton";
import MyTabs from "../../navigation/TopBar";
import Hashback from "../../section/HashBack";
import { ScrollView } from "react-native-gesture-handler";
import TabTwoScreen from "../TabTwoScreen";
import { Dimensions } from "react-native";
import { globalStyle } from "../../Styles";
import  HeadingSection  from "../../section/CustomHeading/Heading";
import { COLOR } from "../../Theme/Colors";
import CustomSearch from "../../component/CustomSearch";
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const HomePage = () => {


  const { categoryBox, title, bannerimage, carsView, head,sellView, 
    buttonView, button, buttonText, paragraph,surfaceMargin,VerticalMargin, 
  divSize } = HomeStyle;
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
        headerStyle={{ backgroundColor: COLOR.primary }}
        color={COLOR.White} isHome={true} location
        onPress={() => openDrawer()} />
      <View style={globalStyle.container}>
        <View style={globalStyle.inputView}>
        <CustomSearch    value={searchQuery}
            onChange={onChangeSearch}/>
        </View>
        <HeadingSection Heading={Browse}>
        <View style={categoryBox}>
        {
              categotryList.map((i) => {
                return (
                  <Category linkTo={i.onPress}
                    key={i.id}
                    ProductImage={i.ProductImage}
                    ProductName={i.ProductName}
                    viewStyle={i.viewStyle}
                    divStyle={divSize}
                    />
                )
              })
            }
            </View>
        </HeadingSection>
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
              <CustomButton text={BookNow} buttonStyle={button} textStyle={buttonText} linkTo="/chat" />
            </View>
          </View>
        </View>      
        <HeadingSection Heading={SearchedCars}>
          <View style={surfaceMargin}>
            <MyTabs />
          </View>
          <Surface style={VerticalMargin}>
            <Hashback />
          </Surface>
          </HeadingSection>
        <HeadingSection Heading={MostPopular}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={globalStyle.flexRow}>
            {popularProduct.map((u, i) => {
              return (
                <CustomButton text={u.title}
                  onPress={()=>toggleButton(i)}
                  key={u.id} buttonStyle={i === ActiveIndex ? globalStyle.activeStyle : globalStyle.inActiveStyle}
                  textStyle={i === ActiveIndex ? globalStyle.activeText : globalStyle.inActiveText} />
              )
            })}
          </View>
        </ScrollView>
      {
        ActiveIndex== 0 ? (<Surface style={VerticalMargin}>
          <Hashback />
          </Surface>): null
      }  
     </HeadingSection>
      </View>
    </View>
  )
}
export default HomePage;