import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import LottieView from 'lottie-react-native';
import { Avatar, Title } from "react-native-paper";
import { Link, useHistory } from "react-router-native";
import { styles } from "./style";
import { drawerItem, Islamabad } from "../../utils/constants/drawerContent";
import { Ionicons } from "@expo/vector-icons";
import { COLOR } from "../../Theme/Colors";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/reducers/authSlice";
import { getcurrentUser } from "../../utils/api";

const Settings = (props:any) => {
  const {
    container,
    Images,
    Intro,
    Name,
    lottie,
    titleName,
    flexRow,
    Row,
    section1,
    locationText,
    chngLocation,
    DrawerButton,
    LinearImage,
    loadingView
  } = styles;

  let history = useHistory();
  const dispatch = useDispatch();
  const handle = () => {
    dispatch(logout());
    history.push("/SignIn");
    console.log("logout")

  }
  const [name,setName]=useState<any>([]);
  const [notVerify,setVerify]=useState<any>(false);
  const [Loader, setLoader] = useState(false);
  useEffect(() => {
    user()
   }, [])
   const user=async()=>{
     setLoader(true);
    await getcurrentUser().then(res=>{
      if(res.user.isVerified=== true){
        setLoader(false)
        setVerify(false);
        console.log(res.user.isVerified)
     setName(res.user) 
  }
     else if (res.user.isVerified=== false){
      setLoader(false)
       setVerify(true);
     }
    }).catch(error=>{
      if (error.status === 401) return alert(error); 
     })
   }
  return (
    <View style={{ flex: 1, zIndex: 1 }}>
      <ScrollView>
        <View style={container}>
          {Loader ? 
        <View style={loadingView}><Text></Text>
        <ActivityIndicator size="large" color={COLOR.primary}/>
     </View>
          : notVerify ===true ? 
          <> 
          <View style={section1}>
          <Text style={chngLocation}></Text> 
            </View>
            </> 
            :
             <> 
          <View style={section1}>
            <View style={Images}>
              <Avatar.Image
                source={require('../../../assets/images/drawer/profile.png')}
              ></Avatar.Image>
            </View>
            <View style={Intro}>
              <View style={Row }>
              <Title style={Name}>{`${name.firstName} ${name.lastName}`.charAt(0).toUpperCase() + `${name.firstName} ${name.lastName} `.slice(1)}</Title>
                <LottieView
          style={lottie}
          autoPlay
          source={require('../../../assets/tick.json')}
                />
              </View>
              <View style={flexRow}>
              <Ionicons style={{marginTop: 3 }} name="location-sharp" size={14} color="black" />
                <Text style={locationText}>{Islamabad}</Text>
              </View>
              {/* <Text style={chngLocation}>Change location</Text> */}
            </View>
          </View>
          </>
          }
         
        </View>
        <View style={{ marginTop: 15 }}>
          {drawerItem.map((item) => {
            return (
              <Link
                key={item.id}
                style={DrawerButton}
                component={TouchableOpacity}
                to={item.link}
                onPress={item.onPress}
              >
                <LinearGradient
                  colors={[COLOR.CarminePink, COLOR.primary]}
                  start={{ x: 0, y: 0.4 }}
                  end={{ x: 0, y: 1 }}
                  style={LinearImage}
                 
                >
                  <Image
                    style={{
                      marginHorizontal: 7,
                      width: item.width,
                      height: item.height,
                    }}
                    source={item.img}
                  />
                </LinearGradient>
                <View style={{ width: "50%" }}>
                  <View style={Row}>
                    <Title style={titleName}>{item.name}</Title>
                  </View>
                </View>
              </Link>
            );
          })}
            <Link
                to=""
                style={DrawerButton}
                component={TouchableOpacity}
                onPress={handle}
              >
                <LinearGradient
                  colors={[COLOR.CarminePink, COLOR.primary]}
                  start={{ x: 0, y: 0.4 }}
                  end={{ x: 0, y: 1 }}
                  style={LinearImage}
                 
                >
                  <Image
                    style={{
                      marginHorizontal: 7,
                      width:"58%",height:"57%",
                    }}
                    source={require('../../../assets/images/drawer/logout.png')}
                  />
                </LinearGradient>
                <View style={{ width: "50%" }}>
                  <View style={Row}>
                    <Title style={titleName}>Logout</Title>
                  </View>
                </View>
              </Link>
        </View>
      </ScrollView>
    </View>
  );
};
export default Settings;
