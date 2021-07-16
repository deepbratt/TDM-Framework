import React, { FC } from 'react';
import { View} from 'react-native';
import { styles } from './styles';
import { BottomSheet } from 'react-native-btr';
import CustomOTP from '../customOTP';
import { BottomSheetProps } from '../../../types';

const BottomSheetComponent: FC<BottomSheetProps> = ({
  visible,
  onBackButtonPress,
  onBackdropPress,
  children,
}) => {
  return (
        <BottomSheet
          visible={visible}
          onBackButtonPress={onBackButtonPress}
          onBackdropPress={onBackdropPress}
    >
      {children}
        </BottomSheet>
  );
};
export default BottomSheetComponent;