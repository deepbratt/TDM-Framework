import React,{useState} from 'react';
import { View, StyleSheet, } from 'react-native';
import CustomText from '../customText';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomDropDown from '../customDropDown';

const SearchSheet = () => {
      const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Select an Item");
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);
    const handleButton = (i: { (i: any): any; value?: any; }) => {
        setValue(i.value)
    }
    return (
        <View style={styles.mainView}>
            <CustomText
                text="Filter Search"
                textStyle={{ width: wp('95%'), alignSelf: 'center',fontSize: 20, fontWeight: '500', color: '#313131', textAlign:'center' ,marginTop: hp('3%') }}
            />
            <CustomText
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "
                textStyle={{width:wp('95%'),alignSelf:'center',fontSize:14,fontWeight:'300',color:'#666666',textAlign:'center',marginTop:hp('1%')}}
            />
            <CustomDropDown
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                containerStyle={{width:wp('90%'),alignSelf:'center',backgroundColor:'red',borderRadius:0,borderWidth:0, borderColor:'#FFFFFF'}}
                style={{ width: wp('90%'), alignSelf: 'center', backgroundColor: 'red', borderRadius: 0, borderColor: '#FFFFFF' }}
                disabledStyle={{ width: wp('90%'), alignSelf: 'center', backgroundColor: 'red', borderRadius: 0, borderWidth: 0, borderColor: '#FFFFFF' }}
                labelProps="saim"
                placeholder={value}
                onChangeValue={handleButton(i)}
                
            />
        </View>
    )
}
const styles = StyleSheet.create({
    mainView: {
        flex:1
    }
})
export default SearchSheet;

function i(i: any): any {
    throw new Error('Function not implemented.');
}
