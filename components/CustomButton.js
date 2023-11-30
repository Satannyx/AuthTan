import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const CustomButton = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    backgroundColor: 'blue',
    padding: 5,
    margin: 5,
    borderRadius: 30,
    width: 250,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
};

export default CustomButton;
