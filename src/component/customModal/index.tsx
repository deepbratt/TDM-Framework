import React, { FC, Children } from "react";
import Modal from "react-native-modal";
import { CustomModalProps } from "../../../types";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const CustomModal: FC<CustomModalProps> = ({
  isVisible,
  onBackButtonPress,
  children,
}) => {
  return (
    <Modal
      style={{
        width: wp("97%"),
        alignSelf: "center",
        justifyContent: "center",
      }}
      animationIn={"fadeInUp"}
      animationInTiming={300}
      animationOut={"fadeOutUp"}
      animationOutTiming={300}
      isVisible={isVisible}
      onBackButtonPress={onBackButtonPress}
    >
      {children}
    </Modal>
  );
};
export default CustomModal;
