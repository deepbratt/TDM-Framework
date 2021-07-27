
// Flip Image View Horizontally Using Animation in React Native
// https://aboutreact.com/react-native-flip-image-horizontally-using-animation/

// import React in our code
import React from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Animated,
} from 'react-native';
import LogComponent from '.';
export default function SignIn()  {
  let animatedValue = new Animated.Value(0);
  let currentValue = 0;

  animatedValue.addListener(({ value }) => {
    currentValue = value;
  });

  const flipAnimation = () => {
    if (currentValue >= 90) {
      Animated.spring(animatedValue, {
        toValue: 0,
        tension: 10,
        friction: 8,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.spring(animatedValue, {
        toValue: 180,
        tension: 10,
        friction: 8,
        useNativeDriver: false,
      }).start();
    }
  };

  const  frontInterpolate=animatedValue.interpolate({
  inputRange:[0,180],
  outputRange:['0deg','180deg'],
})
const backInterpolate=animatedValue.interpolate({
  inputRange:[0,180],
  outputRange:['180deg','360deg'],
})
  const frontAnimatesStyle={

    transform:[
      {rotateY: frontInterpolate}
    ]
  }
  const backAnimatesStyle={

    transform:[
      {rotateY: backInterpolate}
    ]
  }
  return (
    <View style={styles.container}>
      <Animated.View
                style={[frontAnimatesStyle,styles.flipCard,]}
              >
             <LogComponent login={true} 
          onPress={() => console.log("hellox")} onClick={flipAnimation}/>
              </Animated.View>
              <Animated.View
          
                style={[backAnimatesStyle,styles.flipCard,styles.flipCardBack]}
              >
                <LogComponent login={false} 
          onPress={() => console.log("hellox")} onClick={flipAnimation}/>
           
              </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:"red"
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'green',
    padding: 5,
    marginTop: 190,
    minWidth: 250,
  },
  buttonTextStyle: {
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },
  imageStyle: {
    width: 150,
    height: 150,
    borderRadius: 6,
  },
  flipCard:{
  width:"100%",
  // height:"10%",
  justifyContent:"center",
  alignItems:"center",
  backfaceVisibility:'hidden',

},

flipCardBack:{
  position:"absolute",
  // top:"49%",
}

});

