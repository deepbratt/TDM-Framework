import React, { FC } from 'react';
import { View} from 'react-native';
import { styles } from './styles';
import { BottomSheet } from 'react-native-btr';
import CustomOTP from '../customOTP';
import { BottomSheetProps } from '../../../types';

const BottomSheetComponent: FC<BottomSheetProps> = ({
  visible,
  onBackButtonPress,
  onBackdropPress
}) => {
  return (
        <BottomSheet
          visible={visible}
          onBackButtonPress={onBackButtonPress}
          onBackdropPress={onBackdropPress}
        >
          <View style={styles.bottomNavigationView}>
            <CustomOTP/>
          </View>
        </BottomSheet>
  );
};
export default BottomSheetComponent;