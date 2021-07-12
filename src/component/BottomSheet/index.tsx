import React, { FC, useState } from 'react';
import { SafeAreaView, View, Button } from 'react-native';
import { styles } from './styles';
import { BottomSheet } from 'react-native-btr';
import CustomOTP from '../customOTP';

interface Props{
  visible: boolean;
  onBackButtonPress: ()=>void;
  onBackdropPress: ()=>void;
}
const BottomSheetComponent:FC<Props> = (Props) => {
  return (
        <BottomSheet
          visible={Props.visible}
          onBackButtonPress={Props.onBackButtonPress}
          onBackdropPress={Props.onBackdropPress}
        >
          <View style={styles.bottomNavigationView}>
            <CustomOTP/>
          </View>
        </BottomSheet>
  );
};


export default BottomSheetComponent;