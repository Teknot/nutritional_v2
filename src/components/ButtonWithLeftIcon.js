import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import fonts from '../utils/fonts';

const ButtonWithLeftIcon = ({onPress, disabled}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={disabled}>
      <Image source={require('../assets/icons/Plus.png')} tintColor={'black'} />
      <Text style={styles.button_text}>Add different test category result</Text>
    </TouchableOpacity>
  );
};

export default ButtonWithLeftIcon;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffffff',
    width: 358,
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D0D5DD',
    marginTop: 10,
    marginBottom: 20,
  },
  button_text: {
    fontSize: 16,
    marginLeft: 8,
    color: '#344054',
    fontFamily: fonts.InterMedium,
  },
});
