import * as React from 'react';
import { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker'
interface Props{
    open: any;
    value: any;
    items: any;
    setOpen: any;
    setValue: any;
    setItems: any;
    containerStyle: any;
    style: any;
    disabledStyle: any;
  labelProps: any;
  onChangeValue: any;
  placeholder: any;
}
const CustomDropDown: FC<Props>= (Props)=> {
    return (
        //   <DropDownPicker
        //       items={Props.items}
        //       defaultIndex={Props.defaultIndex}
        //       containerStyle={Props.containerStyle}
        //       onChangeItem={Props.onChangeItem}
        //   />
        <DropDownPicker
            open={Props.open}
            value={Props.value}
            items={Props.items}
            setOpen={Props.setOpen}
            setValue={Props.setValue}
            setItems={Props.setItems}
            containerStyle={Props.containerStyle}
            style={Props.style}
            disabledStyle={Props.disabledStyle}
        labelProps={Props.labelProps}
        onChangeValue={Props.onChangeValue}
        placeholder={Props.placeholder}
    />
  );
}
export default CustomDropDown;
const styles = StyleSheet.create({

});
