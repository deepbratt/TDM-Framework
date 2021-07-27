import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as ImagePicker from 'expo-image-picker';
import CustomText from '../customText';

const CustomImagePicker = () => {
    const [pickedImagePath, setPickedImagePath] = useState('');
    const showImagePicker = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            alert("You've refused to allow this appp to access your photos!");
            return;
        }
        const result = await ImagePicker.launchImageLibraryAsync();
        console.log(result);
        if (!result.cancelled) {
            setPickedImagePath(result.uri);
            console.log(result.uri);
        }
    }
    const openCamera = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        if (permissionResult.granted === false) {
            alert("You've refused to allow this appp to access your camera!");
            return;
        }
        const result = await ImagePicker.launchCameraAsync();
        console.log(result);
        if (!result.cancelled) {
            setPickedImagePath(result.uri);
            console.log(result.uri);
        }
    }
    return (
    // <View style={styles.screen}>
    //   <View style={styles.buttonContainer}>
    //     <Button onPress={showImagePicker} title="Select an image" />
    //     {/* <Button onPress={openCamera} title="Open camera" /> */}
    //   </View>

    //   <View style={styles.imageContainer}>
    //     {
    //       pickedImagePath !== '' && <Image
    //         source={{ uri: pickedImagePath }}
    //         style={styles.image}
    //       />
    //     }
    //   </View>
    // </View>
      <TouchableOpacity style={styles.screen} onPress={showImagePicker}>
        <Image style={{ alignSelf: 'center' }}
          source={require('../../../assets/images/postDetails/camera.png')} />
        <CustomText
          text="Add Photo"
          textStyle={{ fontSize: 12, textAlign: 'center', fontFamily: 'IBMPlexSans-Light', color: '#666666' }}
        />
         
      </TouchableOpacity>
  );
}

export default CustomImagePicker;
const styles = StyleSheet.create({
  screen: {
    height: hp('25%'),
    justifyContent: 'center',
    width: wp('95%'),
    alignSelf: 'center',
    marginTop: hp('5%'),
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'dashed',
    borderColor: '#FF3933',
    backgroundColor: '#E5E5E5',
    },
    buttonContainer: {
        marginTop: wp('1%'),
        alignSelf: 'center',
        width: wp('80%'),
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    imageContainer: {
        height: hp('23%'),
        marginTop: hp('1%'),
        width: wp('95%'),
        alignSelf: 'center',
    },
    image: {
        width: wp('90%'),
        alignSelf:'center',
        height: hp('23%'),
        resizeMode:'cover',
    }
});