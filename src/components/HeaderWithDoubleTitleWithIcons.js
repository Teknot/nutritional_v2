import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import fonts from '../utils/fonts';

const HeaderWithDoubleTitleWithIcons = ({
  leftIcon,
  rightIcon,
  title,
  subTitle,
  leftOnPress,
  rightOnPress,
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
      <Text style={styles.header_subtitle}>{subTitle}</Text>
      <Text style={styles.header_title}>{title}</Text>
    </View>
  );
};

export default HeaderWithDoubleTitleWithIcons;

const styles = StyleSheet.create({
  container: {
    height: 133,
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
    color: '#292724',
    fontFamily: fonts.MontserratSemiBold,
  },
  header_subtitle: {
    marginTop: 24,
    fontSize: 14,
    color: '#292724',
    fontFamily: fonts.MontserratMedium,
  },
});
