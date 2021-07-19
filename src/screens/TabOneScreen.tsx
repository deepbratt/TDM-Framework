import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import CustomHeader from '../component/customHeader/CustomHeader';
import { openDrawer } from '../navigation';

export default function TabOneScreen() {
  return (
   <View>
        <CustomHeader
         headerStyle={{  backgroundColor:"#F8F8F8"}}
           color="#313131" isHome={true} title="Home" 
        onPress={()=>openDrawer()} />
   <View style={styles.container}>
      <Text style={styles.title}>screen One</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"blue"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
 
});
