import React, { FC } from 'react';
import { View} from 'react-native';
import { styles } from './styles';
import { BottomSheet } from 'react-native-btr';
import CustomOTP from '../customOTP';
import { SearchBottomSheetProps } from '../../../types';
import SearchSheet from '../searchSheet';

const SearchBottomSheetComponent: FC<SearchBottomSheetProps> = ({
  visible,
  onBackButtonPress,
  onBackdropPress,
}) => {
  return (
        <BottomSheet
          visible={visible}
          onBackButtonPress={onBackButtonPress}
          onBackdropPress={onBackdropPress}
        >
          <View style={styles.bottomNavigationView}>
            <SearchSheet/>
          </View>
        </BottomSheet>
  );
};
export default SearchBottomSheetComponent;