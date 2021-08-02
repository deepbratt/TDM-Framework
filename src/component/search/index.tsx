import React,{useState} from 'react';
import { View, TextInput } from 'react-native';
import { styles } from './styles';
import CustomLinearGradient from '../customLinearGradient';
import CustomText from '../customText';
import DropDownSaim from '../dropDownSaim';
import {
    BrandLabel,
    BrandList,
    Date,
    Heading,
    SortLabel,
    subHeading,
    ModelHeading,
    BodyLabel,
    RunHeading,
    FromText,
    ToText,
    ButtonText,
} from '../../utils/constants/search';
import { COLOR } from '../../Theme/Colors';

const CustomFilter = () => {
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
                text={Heading}
                textStyle={styles.filterSearchText}
            />
            <CustomText
                text={subHeading}
                textStyle={styles.subHeading}
            />
            <View style={styles.MainViewDropDown}>
                <DropDownSaim
                    itemContainerStyle={styles.itemContainerDropDrown}
                    label={SortLabel}
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
                    label={BrandLabel}
                    itemTextStyle={styles.itemTextDropDown}
                    data={BrandList}
                    disableSort={true}
                    value={brand}
                    onChange={onChangeBrand}
                    textInputStyle={styles.textInputDropDown}
                    />
            </View>
            <CustomText
                text={ModelHeading}
                textStyle={styles.kilometerHeadingText}
            />
            <View style={styles.toFromView}>
                <TextInput
                    placeholder={FromText}
                    style={styles.fromText}
                    onChangeText={setYearFrom}
                    value={yearFrom}
                    keyboardType='numeric'
                />
                <TextInput
                    placeholder={ToText}
                    style={styles.fromText}
                    onChangeText={setYearTo}
                    value={yearTo}
                    keyboardType='numeric'
                />
            </View>
            <View style={styles.MainViewDropDown}>
                <DropDownSaim
                    itemContainerStyle={styles.itemContainerDropDrown}
                    label={BodyLabel}
                    itemTextStyle={styles.itemTextDropDown}
                    data={BrandList}
                    disableSort={true}
                    value={body}
                    onChange={onChangeBody}
                    textInputStyle={styles.textInputDropDown}
                    />
            </View>
            <CustomText
                text={RunHeading}
                textStyle={styles.kilometerHeadingText}
            />
            <View style={styles.toFromView}>
                <TextInput
                    placeholder={FromText}
                    style={styles.fromText}
                    onChangeText={setKilometerFrom}
                    value={kilometerFrom}
                    keyboardType='numeric'
                />
                <TextInput
                    placeholder={ToText}
                    style={styles.fromText}
                    onChangeText={setKilometerTo}
                    value={kilometerTo}
                    keyboardType='numeric'
                />
            </View>
            <CustomLinearGradient
                colors={['#F04148', COLOR.primary]}
                GradientButtonStyle={styles.gradientButtonStyle}
                text={ButtonText}
                textstyle={styles.gradientButtonText}
                onPress={() => console.log("Works!")}
            />
        </View>
    )
}
export default CustomFilter;