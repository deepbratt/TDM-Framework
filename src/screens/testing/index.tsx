import React from 'react';
import { View, SafeAreaView, ScrollView } from "react-native";
import CustomMessage from '../../component/customMessage';

const Testing = () => {
    return (
      <SafeAreaView style={{ marginTop: 50 }}>
        <ScrollView>
          <View>
            <CustomMessage
              isBack={true}
              tokenamount
              src={require("../../../assets/images/car.jpg")}
              bName={"saim"}
              amount={"RS. 50 Lakh"}
              location={"Islamabad"}
              singlebutton
              ButtonText={"Login"}
            />
            <View style={{ marginTop: 20 }}>
              <CustomMessage
                isBack={false}
                paymenterror
                Title={"Payment Error !"}
                subTitle={
                  "Something went wrong with the payment. Try again or contact support."
                }
                doublebutton
                ButtonText={"Try Again"}
                ButtonText1={"Contact Support"}
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <CustomMessage
                isBack={true}
                confirmpayment
                Title={"Payment Successful!"}
                subTitle={
                  "Your order was placed successfully. We’re working hard to get it to you soon."
                }
                singlebutton
                ButtonText={"Chat With Seller"}
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <CustomMessage
                isBack={true}
                paytokenamount
                src={require("../../../assets/images/extra/Box.png")}
                            Title={"Pay 10% Token Amount"}
                            amount={"RS. 50 Lakh"}
                            location={"Islamabad"}
                            doublebutton
                            ButtonText1={"Chat With Seller"}
                            ButtonText={"Pay Now"}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}
export default Testing