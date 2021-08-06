import React, { useState,FC } from 'react';
import { Image, ScrollView, StyleSheet, View, } from 'react-native';
import { Dropdown, } from 'sharingan-rn-modal-dropdown';

interface Props {
  label: string;
  data: any;
  value: any;
  onChange: any;
  itemContainerStyle: any;
  textInputStyle: any;
  disableSort: any;
  itemTextStyle: any;
  enableSearch?: any;
  required?: boolean;
  error?: any;
  errorColor?: string;
}
const DropDownSaim: FC<Props> = (Props) => {

  return (
    <ScrollView>
      <View>
        <Dropdown
          label={Props.label}
          data={Props.data}
          value={Props.value}
          onChange={Props.onChange}
          itemContainerStyle={Props.itemContainerStyle}
          textInputStyle={Props.textInputStyle}
          disableSort={Props.disableSort}
          itemTextStyle={Props.itemTextStyle}
          enableSearch={Props.enableSearch}
          required={Props.required}
          error={Props.error}
          errorColor={Props.errorColor}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
  },
  buttonView: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
});

export default DropDownSaim;