import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import fonts from '../utils/fonts';
const HeaderWithLeftRightIcon = ({
  leftIcon,
  rightIcon,
  title,
  leftOnPress,
  rightOnPress,
  color,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View>
          <TouchableOpacity style={styles.button} onPress={leftOnPress}>
            <Image source={leftIcon} style={styles.button_image} />
          </TouchableOpacity>
        </View>
        {rightIcon && (
          <View>
            <TouchableOpacity
              style={{width: 28, height: 28}}
              onPress={rightOnPress}>
              <Image source={rightIcon} style={styles.button_image} />
            </TouchableOpacity>
          </View>
        )}
      </View>
      <Text style={[styles.header_title, {color: color}]}>{title}</Text>
    </View>
  );
};

export default HeaderWithLeftRightIcon;

const styles = StyleSheet.create({
  container: {
    height: 113,
    backgroundColor: '#FFFFFF',
    padding: 16,
    width: 400,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 28,
    height: 28,
  },
  button_image: {
    width: '100%',
    height: '100%',
  },
  header_title: {
    fontSize: 24,
    fontWeight: '500',
    marginTop: 24,
    fontFamily: fonts.MontserratSemiBold,
  },
});
