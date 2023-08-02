import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.button_text}>Save</Text>
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
  },
});
