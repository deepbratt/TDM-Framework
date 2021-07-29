import React, { useRef,FC } from 'react'
import { Modalize } from 'react-native-modalize';
import { NewBottomSheetProps } from '../../../types';
import CustomSearch from '../search';

 const CustomBottomSheet:FC<NewBottomSheetProps>=({ref})=> {
  // const CustomBottomSheet=()=>{
  // const modalizeRef = useRef<Modalize>(null);
  // const onOpen = () => {
  //   modalizeRef.current?.open();
  // };
    return (
      // <TouchableOpacity onPress={onOpen} style={{marginTop:200}}>
      //   <Text>Open the modal</Text>
      // </TouchableOpacity>

      <Modalize
      ref={ref}>
      <CustomSearch/>
        </Modalize>
  );
}
export default CustomBottomSheet;