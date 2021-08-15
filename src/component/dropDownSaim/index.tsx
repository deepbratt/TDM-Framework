import React, { FC } from "react";
import { Dropdown } from "sharingan-rn-modal-dropdown";
import { COLOR } from "../../Theme/Colors";

interface Props {
  label?: any;
  data?: any;
  value?: any;
  onChange?: any;
  itemContainerStyle?: any;
  textInputStyle?: any;
  disableSort?: any;
  itemTextStyle?: any;
  enableSearch?: any;
  required?: boolean;
  error?: any;
  errorColor?: string;
  emptySelectionText?: any;
}
const DropDownSaim: FC<Props> = (Props) => {
  return (
    <Dropdown
      label={Props.label}
      data={Props.data}
      value={Props.value}
      onChange={Props.onChange}
      itemContainerStyle={Props.itemContainerStyle}
      enableSearch={Props.enableSearch}
      required={Props.required}
      // emptySelectionText={Props.emptySelectionText}
      error={Props.error}
      activityIndicatorColor={COLOR.secondary}
      rippleColor={COLOR.secondary}
      errorColor={Props.errorColor}
      textInputStyle={Props.textInputStyle}
      disableSort={Props.disableSort}
      itemTextStyle={Props.itemTextStyle}
    />
  );
};
export default DropDownSaim;
