import * as React from 'react';
import { Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { Text, View } from 'react-native';
import { login} from "../redux/reducers/authSlice";

export default function LoginScreen() {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LoginScreen</Text>

      <Button onPress={() => dispatch(login())} title='Login'/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
