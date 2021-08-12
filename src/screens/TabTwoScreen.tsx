import React, { useState, FC, useCallback, useRef } from "react";

import { Button, StyleSheet, Image } from "react-native";
import { useDispatch } from "react-redux";
import { Text, View, TouchableOpacity } from "react-native";
import { logout } from "../redux/reducers/authSlice";
import { useHistory } from "react-router-native";
import CustomHeader from "../component/customHeader/CustomHeader";
import { openDrawer } from "../navigation";
import { COLOR } from "../Theme/Colors";
import CustomButton from "../component/CustomButton";
import CustomModal from "../component/customModal";
import CustomMessage from "../component/customMessage";
import {
  buttonText,
  donePayment,
  orderMessage,
} from "../utils/constants/confirmPayment/confirmPayment";
import {
  contactButton,
  detailErrorMessage,
  ErrorMessage,
  tryAgainButton,
} from "../utils/constants/paymentError/paymentError";
import {
  payTokenConfirmButton,
  payTokenLocationText,
  payTokenModelText,
} from "../utils/constants/tokenAmount/tokenAmount";
import {
  discountText,
  paiedLocation,
  payChatButton,
  payNowButton,
  payPriceText,
} from "../utils/constants/payTokenAmount/PayTokenAmount";
export default function TabTwoScreen() {
  const [paymentErrorVisible, setpaymentErrorVisible] = useState(false);
  const togglePaymentError = () => {
    setpaymentErrorVisible(!paymentErrorVisible);
  };
  const [confirmPaymentVisible, setConfirmPaymentVisible] = useState(false);
  const toggleConfirmPayment = () => {
    setConfirmPaymentVisible(!confirmPaymentVisible);
  };
  const [payTokenAmountVisible, setPayTokenAmountVisible] = useState(false);
  const togglePayTokenAmount = () => {
    setPayTokenAmountVisible(!payTokenAmountVisible);
  };
  const [tokenAmountVisible, setTokenAmountVisible] = useState(false);
  const toggleTokenAmount = () => {
    setTokenAmountVisible(!tokenAmountVisible);
  };
  let history = useHistory();
  const dispatch = useDispatch();
  const handle = () => {
    dispatch(logout());
    history.push("/SignIn");
  };

  return (
    <View>
      <CustomHeader
        headerStyle={{ backgroundColor: COLOR.primary }}
        color={COLOR.White}
        isHome={true}
        location={true}
        onPress={() => openDrawer()}
      />

      <View style={styles.container}>
        <Text style={styles.title}>Screen Two</Text>
        <Button onPress={handle} title="Logout" />
        <CustomButton
          linkTo="/notify"
          text="notification"
          buttonStyle={{
            marginVertical: 10,
            width: 100,
            height: 30,
            backgroundColor: "red",
          }}
          textStyle={{ color: "white" }}
        />
        <CustomButton
          linkTo="/token-amount"
          text="token"
          buttonStyle={{
            marginVertical: 10,
            width: 100,
            height: 30,
            backgroundColor: "red",
          }}
          textStyle={{ color: "white" }}
        />
        <CustomButton
          linkTo="/car-Details"
          text="car Detail"
          buttonStyle={{
            marginVertical: 10,
            width: 100,
            height: 30,
            backgroundColor: "red",
          }}
          textStyle={{ color: "white" }}
        />
        <CustomButton
          linkTo="/post-details"
          text="Post Details"
          buttonStyle={{
            marginVertical: 10,
            width: 100,
            height: 30,
            backgroundColor: "red",
          }}
          textStyle={{ color: "white" }}
        />
        <CustomButton
          linkTo="/add-Details"
          text="ADD Detail"
          buttonStyle={{
            marginVertical: 10,
            width: 100,
            height: 30,
            backgroundColor: "red",
          }}
          textStyle={{ color: "white" }}
        />
        {/* <CustomButton linkTo="/verify-num" text="verification" buttonStyle={{marginVertical:10,width:100,height:30,backgroundColor:"red"}} textStyle={{color:"white"}}/> */}
        <CustomButton
          linkTo="/request-accept"
          text="request Accept"
          buttonStyle={{
            marginVertical: 10,
            width: 100,
            height: 30,
            backgroundColor: "red",
          }}
          textStyle={{ color: "white" }}
        />
        <CustomButton
          linkTo="/pay-token"
          text="payMENT token"
          buttonStyle={{
            marginVertical: 10,
            width: 100,
            height: 30,
            backgroundColor: "red",
          }}
          textStyle={{ color: "white" }}
        />
        <CustomButton
          linkTo="/payment-error"
          text="payment error"
          buttonStyle={{
            marginVertical: 10,
            width: 100,
            height: 30,
            backgroundColor: "red",
          }}
          textStyle={{ color: "white" }}
        />
        <CustomButton
          linkTo="/confirm-payment"
          text="confirm payment"
          buttonStyle={{
            marginVertical: 10,
            width: 100,
            height: 30,
            backgroundColor: "red",
          }}
          textStyle={{ color: "white" }}
        />
        <TouchableOpacity onPress={toggleConfirmPayment}>
          <Text>Confirm payment</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={togglePaymentError}>
          <Text>payment error</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={togglePayTokenAmount}>
          <Text>Pay Token Amount</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleTokenAmount}>
          <Text>Token Amount</Text>
        </TouchableOpacity>
        <CustomModal
          isVisible={confirmPaymentVisible}
          onBackButtonPress={() => setConfirmPaymentVisible(false)}
        >
          <CustomMessage
            isBack={true}
            confirmpayment
            Title={donePayment}
            subTitle={orderMessage}
            singlebutton
            ButtonText={buttonText}
          />
        </CustomModal>

        <CustomModal
          isVisible={paymentErrorVisible}
          onBackButtonPress={() => setpaymentErrorVisible(false)}
        >
          <CustomMessage
            isBack={false}
            paymenterror
            Title={ErrorMessage}
            subTitle={detailErrorMessage}
            doublebutton
            ButtonText={tryAgainButton}
            ButtonText1={contactButton}
          />
        </CustomModal>

        <CustomModal
          isVisible={tokenAmountVisible}
          onBackButtonPress={() => setTokenAmountVisible(false)}
        >
          <CustomMessage
            isBack={true}
            tokenamount
            src={require("../../assets/images/car.jpg")}
            bName={"saim"}
            amount={payTokenModelText}
            location={payTokenLocationText}
            singlebutton
            ButtonText={payTokenConfirmButton}
          />
        </CustomModal>

        <CustomModal
          isVisible={payTokenAmountVisible}
          onBackButtonPress={() => setPayTokenAmountVisible(false)}
        >
          <CustomMessage
            isBack={true}
            paytokenamount
            src={require("../../assets/images/extra/Box.png")}
            Title={discountText}
            amount={payPriceText}
            location={paiedLocation}
            doublebutton
            ButtonText1={payChatButton}
            ButtonText={payNowButton}
          />
        </CustomModal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLOR.primary,
  },
});
