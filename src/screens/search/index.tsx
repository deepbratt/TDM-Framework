import React,{useState} from 'react';
import { View, StyleSheet, TouchableOpacity,Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import SearchBottomSheetComponent from '../../component/searchBottomSheet';

const Search = () => {
    const [visible, setVisible] = useState(false);
  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };
    return (
      <View style={styles.main}>
        <TouchableOpacity onPress={toggleBottomNavigationView} style={{ marginTop: hp('4%') }}>
          <Text>
            Search Button
          </Text>
        </TouchableOpacity>
            {/* <SearchBottomSheetComponent
                visible={visible}
                onBackButtonPress={toggleBottomNavigationView}
                onBackdropPress={toggleBottomNavigationView}
            /> */}
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    bottomNavigationView: {
    backgroundColor: '#fff',
    width: wp('100%'),
    height: 263,
    borderTopLeftRadius: 24,
    borderTopRightRadius:24,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
})
export default Search;