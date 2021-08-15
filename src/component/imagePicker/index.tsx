import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as ImagePicker from 'expo-image-picker';
import CustomText from '../customText';
import { COLOR } from '../../Theme/Colors';

export default function Example() {
  let [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
    console.log(pickerResult);
  };
  if (selectedImage !== null) {
    return (
      <TouchableOpacity style={styles.container} onPress={openImagePickerAsync}>
        <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={styles.main} onPress={openImagePickerAsync}>
      <Image style={{ alignSelf: 'center' }}
        source={require('../../../assets/images/postDetails/camera.png')} />
      <CustomText
        text="Add Photo"
        textStyle={{ fontSize: 12, textAlign: 'center', fontFamily: 'IBMPlexSans-Light', color: COLOR.GraniteGray }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  main: {
    height: hp('25%'),
    width: wp('95%'),
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'dashed',
    borderColor: '#FF3933',
    backgroundColor: COLOR.background,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: hp('2%'),
  },
  container: {
    height: hp('25%'),
    justifyContent: 'center',
    width: wp('95%'),
    alignSelf: 'center',
    marginTop: hp('5%'),
  },
  thumbnail: {
    width: wp('95%'),
    height: hp('25%'),
    alignSelf: 'center',
    resizeMode: 'cover',
    borderRadius: 8
  },
});
