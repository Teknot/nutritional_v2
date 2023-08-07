import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import fonts from '../utils/fonts';

const CustomButton = ({title, onPres}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPres}>
      <Text style={styles.button_text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#8D43A4',
    width: 358,
    height: 44,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_text: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily:fonts.MontserratSemiBold
  },
});
