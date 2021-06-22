import React from 'react'
import { View, Text,StyleSheet,  StatusBar } from "react-native";




export const BeforeLogin = ({children,header,footer,HeadText,text1,text2,ByContinuingyou,TermsOfuse,PrivacyPolicy,And}) => {
    return (
        <>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
        {header &&
       <View style={styles.topHeader}>
       <Text  style={styles.head}>{HeadText}</Text>
       <Text style={styles.detail}>{text1}</Text>
       <Text style={styles.detail}> {text2}</Text>
       </View>}
      
       <View >
       {children}
       </View>
      
     {footer &&   <View style={styles.footer}>
      <Text style={styles.detail}>{ByContinuingyou}</Text> 
      <Text><Text style={styles.underline}>{TermsOfuse}</Text> <Text style={styles.detail}>{And }</Text><Text style={styles.underline}>{PrivacyPolicy}</Text> </Text>
</View>}
       </View>
       </>
    )
}
const styles = StyleSheet.create({
 
    container: {
        flex:1,
       backgroundColor:"red"
    },
    topHeader: {
  flex:1/2,
        justifyContent: "flex-start",
        marginTop: 56,
      },
      mid: {
       
        justifyContent: "center",
        marginTop: 0,
      },
      footer: {
  flex:1,
    height:100,
        justifyContent: "flex-end",
        alignItems:"center",
      marginBottom:10,
      },
      img: {
        marginHorizontal: 30,
        marginVertical: 20,
        width: 300,
        aspectRatio:1*1.4,
        padding: 0,
      },
      head: {
        // fontFamily: "IBMPlexSans-Bold",
        color: "rgba(49, 49, 49, 1)",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 35,
        textAlign: "center",
      },
      detail: {
        // fontFamily: "IBMPlexSans-Light",
        textAlign: "center",
        color: "rgba(102, 102, 102, 1)",
        letterSpacing: 1,
        fontSize: 12,
      },
  
      underline: {
        borderBottomWidth: 1,
        color: "rgba(49, 49, 49, 1)",
        textDecorationLine:"underline",
        fontWeight: "500",
        letterSpacing: 1,
        fontSize: 12,
      },
  });
