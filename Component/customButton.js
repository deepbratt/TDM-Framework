
import {StyleSheet, TouchableOpacity, Text, ViewPropTypes,Image,View} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';


const CustomButton = function(props) {
  const style = {};
  if (props.type === 'default') {
    style.backgroundColor = "white";
    style.borderWidth = 0;
  } else if (props.type === 'link') {
    style.borderWidth = 0;
  }
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.buttonStyle,
        style,
        props.buttonStyle,
        props.disabled ? styles.disabled : {},
      ]}>
     {props.leftImg &&
     <Image fadeDuration={0} style={{marginHorizontal:20}} source={props.Img}  />
     }
      <Text style={props.textStyle}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
  },
  disabled: {
    opacity: 0.5,
  },
});

CustomButton.defaultProps = {
  type: 'default',
  disabled: false,
  leftImg:false,
};

CustomButton.propTypes = {
  type: PropTypes.oneOf(['default', 'link']).isRequired,
  buttonStyle: ViewPropTypes.style,

  textStyle: Text.propTypes.style,
  Img: Image.propTypes.source.isRequired,
  leftImg: PropTypes.bool,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  text: PropTypes.string.isRequired,
 
};

export default CustomButton;