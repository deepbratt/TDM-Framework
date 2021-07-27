import React,{useState} from 'react';
import { View, StyleSheet,SafeAreaView,ScrollView,Image, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomImagePicker from '../../component/imagePicker';
import DropDownSaim from '../../component/dropDownSaim';
import { bodyColor, CarModel, Condition, locationList, Milage, PriceRange } from '../../utils/constants/postDetails/postDetails';
import CustomLinearGradient from '../../component/customLinearGradient';

const PostDetails = () => {
    const [description, setDescription] = useState("");
    const [location, setlocation] = useState('');
    const onchangeLocation = (value: string) => {
        setlocation(value);
    };
    const [carModel, setCarModel] = useState('');
    const onchangeCarModel = (value: string) => {
        setCarModel(value);
    };
    const [carMake, setCarMake] = useState('');
    const onchangeCarMake = (value: string) => {
        setCarMake(value);
    };
    const [year, setYear] = useState('');
    const onchangeYear = (value: string) => {
        setYear(value);
    };
    const [condition, setCondition] = useState('');
    const onchangeCondition = (value: string) => {
        setCondition(value);
    };
    const [registrationCity, setRegistrationCity] = useState('');
    const onchangeRegistrationCity = (value: string) => {
        setRegistrationCity(value);
    };
    const [bodycolor, setBodyColor] = useState('');
    const onchangeBodyColor = (value: string) => {
        setBodyColor(value);
    };
    const [milage, setMilage] = useState('');
    const onchangeMilage = (value: string) => {
        setMilage(value);
    };
    const [priceRange, setPriceRange] = useState('');
    const onchangePriceRange = (value: string) => {
        setPriceRange(value);
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <CustomImagePicker />
                <View style={styles.borderView}></View>
                <View style={styles.dropdownContainer}>
                    <View style={styles.iconView}>
                        <Image style={styles.buttonIcon}
                            source={require('../../../assets/images/postDetails/location.png')} />
                    </View>
                    <View style={styles.MainViewDropDown}>
                        <DropDownSaim
                            itemContainerStyle={styles.itemContainerDropDrown}
                            label="Location"
                            itemTextStyle={styles.itemTextDropDown}
                            data={locationList}
                            disableSort={true}
                            value={location}
                            onChange={onchangeLocation}
                            textInputStyle={styles.textInputDropDown}
                        />
                    </View>
                </View>
                <View style={styles.dropdownContainer}>
                    <View style={styles.iconView}>
                        <Image style={styles.buttonIcon}
                            source={require('../../../assets/images/postDetails/carmodel.png')} />
                    </View>
                    <View style={styles.MainViewDropDown}>
                        <DropDownSaim
                            itemContainerStyle={styles.itemContainerDropDrown}
                            label="Car Model"
                            itemTextStyle={styles.itemTextDropDown}
                            data={CarModel}
                            disableSort={true}
                            value={carModel}
                            onChange={onchangeCarModel}
                            textInputStyle={styles.textInputDropDown}
                        />
                    </View>
                </View>
                <View style={styles.dropdownContainer}>
                    <View style={styles.iconView}>
                        <Image style={styles.buttonIcon}
                            source={require('../../../assets/images/postDetails/carmodel.png')} />
                    </View>
                    <View style={styles.MainViewDropDown}>
                        <DropDownSaim
                            itemContainerStyle={styles.itemContainerDropDrown}
                            label="Car Make"
                            itemTextStyle={styles.itemTextDropDown}
                            data={CarModel}
                            disableSort={true}
                            value={carMake}
                            onChange={onchangeCarMake}
                            textInputStyle={styles.textInputDropDown}
                        />
                    </View>
                </View>
                <View style={styles.dropdownContainer}>
                    <View style={styles.iconView}>
                        <Image style={styles.buttonIcon}
                            source={require('../../../assets/images/postDetails/atm.png')} />
                    </View>
                    <View style={styles.MainViewDropDown}>
                        <DropDownSaim
                            itemContainerStyle={styles.itemContainerDropDrown}
                            label="Year"
                            itemTextStyle={styles.itemTextDropDown}
                            data={CarModel}
                            disableSort={true}
                            value={year}
                            onChange={onchangeYear}
                            textInputStyle={styles.textInputDropDown}
                        />
                    </View>
                </View>
                <View style={styles.dropdownContainer}>
                    <View style={styles.iconView}>
                        <Image style={styles.buttonIcon}
                            source={require('../../../assets/images/postDetails/carcondition.png')} />
                    </View>
                    <View style={styles.MainViewDropDown}>
                        <DropDownSaim
                            itemContainerStyle={styles.itemContainerDropDrown}
                            label="Condition"
                            itemTextStyle={styles.itemTextDropDown}
                            data={Condition}
                            disableSort={true}
                            value={condition}
                            onChange={onchangeCondition}
                            textInputStyle={styles.textInputDropDown}
                        />
                    </View>
                </View>
                <View style={styles.dropdownContainer}>
                    <View style={styles.iconView}>
                        <Image style={styles.buttonIcon}
                            source={require('../../../assets/images/postDetails/apartment.png')} />
                    </View>
                    <View style={styles.MainViewDropDown}>
                        <DropDownSaim
                            itemContainerStyle={styles.itemContainerDropDrown}
                            label="Registration City"
                            itemTextStyle={styles.itemTextDropDown}
                            data={locationList}
                            disableSort={true}
                            value={registrationCity}
                            onChange={onchangeRegistrationCity}
                            textInputStyle={styles.textInputDropDown}
                        />
                    </View>
                </View>
                <View style={styles.dropdownContainer}>
                    <View style={styles.iconView}>
                        <Image style={styles.buttonIcon}
                            source={require('../../../assets/images/postDetails/palette.png')} />
                    </View>
                    <View style={styles.MainViewDropDown}>
                        <DropDownSaim
                            itemContainerStyle={styles.itemContainerDropDrown}
                            label="Body Color"
                            itemTextStyle={styles.itemTextDropDown}
                            data={bodyColor}
                            disableSort={true}
                            value={bodycolor}
                            onChange={onchangeBodyColor}
                            textInputStyle={styles.textInputDropDown}
                        />
                    </View>
                </View>
                <View style={styles.dropdownContainer}>
                    <View style={styles.iconView}>
                        <Image style={styles.buttonIcon}
                            source={require('../../../assets/images/postDetails/milage.png')} />
                    </View>
                    <View style={styles.MainViewDropDown}>
                        <DropDownSaim
                            itemContainerStyle={styles.itemContainerDropDrown}
                            label="Mileage (KM)"
                            itemTextStyle={styles.itemTextDropDown}
                            data={Milage}
                            disableSort={true}
                            value={milage}
                            onChange={onchangeMilage}
                            textInputStyle={styles.textInputDropDown}
                        />
                    </View>
                </View>
                <View style={styles.dropdownContainer}>
                    <View style={styles.iconView}>
                        <Image style={styles.buttonIcon}
                            source={require('../../../assets/images/postDetails/atm.png')} />
                    </View>
                    <View style={styles.MainViewDropDown}>
                        <DropDownSaim
                            itemContainerStyle={styles.itemContainerDropDrown}
                            label="Price Range"
                            itemTextStyle={styles.itemTextDropDown}
                            data={PriceRange}
                            disableSort={true}
                            value={priceRange}
                            onChange={onchangePriceRange}
                            textInputStyle={styles.textInputDropDown}
                        />
                    </View>
                </View>
                <View style={styles.dropdownContainer}>
                    <View style={styles.iconView}>
                        <Image style={styles.buttonIcon}
                            source={require('../../../assets/images/postDetails/description.png')} />
                    </View>
                    <TextInput
                        placeholder="Description"
                        style={styles.descriptionInput}
                        maxLength={100}
                        multiline={true}
                        onChangeText={setDescription}
                        value={description}
                    />
                </View>
                <CustomLinearGradient
                    colors={['#F04148', '#C20000']}
                    GradientButtonStyle={styles.gradientStyle1}
                    text="Post Your Add"
                    textstyle={styles.gradientTextStyle}
                    onPress={() => console.log("Works!")}
                />
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        height: hp('100%'),
        width: wp('100%'),
        backgroundColor: '#E5E5E5',
    },
    borderView: {
        width: wp('100%'),
        backgroundColor: '#EBEBEB',
        borderWidth: 0.5,
        marginTop: hp('1%')
    },
    dropdownContainer: {
        width: wp('95%'),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: hp('1%')
    },
    iconView: {
        width: wp('10%'),
        height: hp('5%'),
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: '#F9F9F9'
    },
    buttonIcon: {
        alignSelf: 'center',
        resizeMode: 'contain',
        tintColor: '#313131',
    },
    itemContainerDropDrown: {
        backgroundColor: '#FFFFFF'
    },
    MainViewDropDown: {
        width: wp('80%'),
    },
    itemTextDropDown: {
        fontSize: 14, 
        fontFamily: 'IBMPlexSans-Light',
        color: '#979797'
    },
    textInputDropDown: {
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Medium',
        color: '#313131'
    },
    gradientStyle1: {
        width:wp('80%'),
        borderRadius: 6,
        marginTop:hp('2%'),
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingTop: hp('1.5%'),
        paddingBottom: hp('1.5%'),
        marginBottom:hp('2%')
    },
    gradientTextStyle: {
        fontSize: 16,
        fontFamily: 'IBMPlexSans-Medium',
        textAlign: 'center',
        alignSelf: 'center',
        color: '#FFFFFF'
    },
    descriptionInput: {
        width: wp('80%'),
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Light',
        paddingLeft: wp('2.5%')
    }
})
export default PostDetails;