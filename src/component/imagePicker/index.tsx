// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import * as ImagePicker from 'expo-image-picker';
// import CustomText from '../customText';

// const CustomImagePicker = () => {
//     const [pickedImagePath, setPickedImagePath] = useState('');
//     const showImagePicker = async () => {
//         const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
//         if (permissionResult.granted === false) {
//             alert("You've refused to allow this appp to access your photos!");
//             return;
//         }
//         const result = await ImagePicker.launchImageLibraryAsync();
//         console.log(result);
//         if (!result.cancelled) {
//             setPickedImagePath(result.uri);
//             console.log(result.uri);
//         }
//     }
//     const openCamera = async () => {
//         const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
//         if (permissionResult.granted === false) {
//             alert("You've refused to allow this appp to access your camera!");
//             return;
//         }
//         const result = await ImagePicker.launchCameraAsync();
//         console.log(result);
//         if (!result.cancelled) {
//             setPickedImagePath(result.uri);
//             console.log(result.uri);
//         }
//     }
//     return (
//     // <View style={styles.screen}>
//     //   <View style={styles.buttonContainer}>
//     //     <Button onPress={showImagePicker} title="Select an image" />
//     //     {/* <Button onPress={openCamera} title="Open camera" /> */}
//     //   </View>

//     //   <View style={styles.imageContainer}>
//     //     {
//     //       pickedImagePath !== '' && <Image
//     //         source={{ uri: pickedImagePath }}
//     //         style={styles.image}
//     //       />
//     //     }
//     //   </View>
//     // </View>
//         <TouchableOpacity style={styles.screen} onPress={showImagePicker}>
//             <Image style={{ alignSelf: 'center' }}
//                 source={require('../../../assets/images/postDetails/camera.png')} />
//             <CustomText
//                 text="Add Photo"
//                 textStyle={{ fontSize: 12, textAlign: 'center', fontFamily: 'IBMPlexSans-Light', color: '#666666' }}
//             />
//             { pickedImagePath!==''&& <Image source={{uri:pickedImagePath}} style={styles.image} />}
            
         
//       </TouchableOpacity>
//   );
// }

// export default CustomImagePicker;
// const styles = StyleSheet.create({
//   screen: {
//     height: hp('25%'),
//     justifyContent: 'center',
//     width: wp('95%'),
//     alignSelf: 'center',
//     marginTop: hp('5%'),
//     borderWidth: 1,
//     borderRadius: 8,
//     borderStyle: 'dashed',
//     borderColor: '#FF3933',
//     backgroundColor: '#E5E5E5',
//     },
//     buttonContainer: {
//         marginTop: wp('1%'),
//         alignSelf: 'center',
//         width: wp('80%'),
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//     },
//     imageContainer: {
//         height: hp('23%'),
//         marginTop: hp('1%'),
//         width: wp('95%'),
//         alignSelf: 'center',
//     },
//     image: {
//         width: wp('90%'),
//         alignSelf:'center',
//         height: hp('23%'),
//         resizeMode:'cover',
//     }
// });

import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as ImagePicker from 'expo-image-picker';
import CustomText from '../customText';

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
        textStyle={{ fontSize: 12, textAlign: 'center', fontFamily: 'IBMPlexSans-Light', color: '#666666' }}
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
    backgroundColor: '#E5E5E5',
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
