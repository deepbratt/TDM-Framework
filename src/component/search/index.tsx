import React,{useState} from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BrandList, Date } from '../../utils/constants/search';
import DropDown from '../customDropDown/CustomDropDown';
import CustomLinearGradient from '../customLinearGradient';
import CustomText from '../customText';
import DropDownSaim40 from '../dropDown/CustomDropDown';
import DropDownSaim from '../dropDownSaim';

const CustomSearch = () => {
    const [sortBy, setSortBy] = useState('');
    const onChangeSortBy = (value: string) => {
        setSortBy(value);
    };
    const [brand, setBrand] = useState('');
    const onChangeBrand = (value: string) => {
        setBrand(value);
    };
    const [body, setBody] = useState('');
    const onChangeBody = (value: string) => {
        setBody(value);
    };
    const [yearFrom, setYearFrom] = useState("");
    const [yearTo, setYearTo] = useState("");
    const [kilometerFrom, setKilometerFrom] = useState("");
    const [kilometerTo, setKilometerTo] = useState("");
    return (
        <View style={styles.bottomNavigationView}>
            <CustomText
                text="Filter Search"
                textStyle={styles.filterSearchText}
            />
            <CustomText
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "
                textStyle={styles.subHeading}
            />
            <View style={styles.MainViewDropDown}>
                <DropDownSaim
                    itemContainerStyle={styles.itemContainerDropDrown}
                    label="Sort By"
                    itemTextStyle={styles.itemTextDropDown}
                    data={Date}
                    disableSort={true}
                    value={sortBy}
                    onChange={onChangeSortBy}
                    textInputStyle={styles.textInputDropDown}
                    />
            </View>
            <View style={styles.MainViewDropDown}>
                <DropDownSaim
                    itemContainerStyle={styles.itemContainerDropDrown}
                    label="Brand/Model"
                    itemTextStyle={styles.itemTextDropDown}
                    data={BrandList}
                    disableSort={true}
                    value={brand}
                    onChange={onChangeBrand}
                    textInputStyle={styles.textInputDropDown}
                    />
            </View>
            <CustomText
                text="Model Year"
                textStyle={styles.kilometerHeadingText}
            />
            <View style={styles.toFromView}>
                <TextInput
                    placeholder="From"
                    style={styles.fromText}
                    onChangeText={setYearFrom}
                    value={yearFrom}
                    keyboardType='numeric'
                />
                <TextInput
                    placeholder="To"
                    style={styles.fromText}
                    onChangeText={setYearTo}
                    value={yearTo}
                    keyboardType='numeric'
                />
            </View>
            <View style={styles.MainViewDropDown}>
                <DropDownSaim
                    itemContainerStyle={styles.itemContainerDropDrown}
                    label="Body Type"
                    itemTextStyle={styles.itemTextDropDown}
                    data={BrandList}
                    disableSort={true}
                    value={body}
                    onChange={onChangeBody}
                    textInputStyle={styles.textInputDropDown}
                    />
            </View>
            <CustomText
                text="Kilometers Run"
                textStyle={styles.kilometerHeadingText}
            />
            <View style={styles.toFromView}>
                <TextInput
                    placeholder="From"
                    style={styles.fromText}
                    onChangeText={setKilometerFrom}
                    value={kilometerFrom}
                    keyboardType='numeric'
                />
                <TextInput
                    placeholder="To"
                    style={styles.fromText}
                    onChangeText={setKilometerTo}
                    value={kilometerTo}
                    keyboardType='numeric'
                />
            </View>
            <CustomLinearGradient
                colors={['#F04148', '#C20000']}
                GradientButtonStyle={styles.gradientButtonStyle}
                text="Apply Filters"
                textstyle={styles.gradientButtonText}
                onPress={() => console.log("Works!")}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    bottomNavigationView: {
        backgroundColor: '#fff',
        width: wp('100%'),
        height: hp('65%'),
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    filterSearchText: {
        width: wp('95%'),
        alignSelf: 'center',
        fontSize: 20,
        fontFamily: 'IBMPlexSans-SemiBold',
        color: '#313131',
        textAlign: 'center',
        marginTop: hp('2%')
    },
    subHeading: {
        width: wp('95%'),
        alignSelf: 'center',
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Light',
        color: '#666666',
        textAlign: 'center',
        marginTop: hp('1%')
    },
    itemContainerDropDrown: {
        backgroundColor: '#FFFFFF'
    },
    MainViewDropDown: {
        width: wp('95%')
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
    kilometerHeadingText: {
        width: wp('95%'),
        alignSelf: 'center',
        fontSize: 14,
        color: '#313131',
        fontFamily: 'IBMPlexSans-Medium',
        marginTop: hp('1%')
    },
    toFromView: {
        width: wp('95%'),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: hp('0.5%')
    },
    fromText: {
        width: wp('46.5%'),
        paddingVertical: hp('0.5%'),
        paddingLeft: wp('2%'),
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Light',
        color: '#979797'
    },
    gradientButtonStyle: {
        width: wp('80%'),
        borderRadius: 6,
        marginTop: hp('3%'),
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingTop: hp('2%'),
        paddingBottom: hp('1.5%')
    },
    gradientButtonText: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        alignSelf: 'center',
        color: '#FFFFFF'
    },
})
export default CustomSearch;