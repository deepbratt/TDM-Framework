import React,{useState,useRef} from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BottomSheetComponent from '../../component/BottomSheet';
import CustomSearch from '../../component/search';

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
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
export default Search;



