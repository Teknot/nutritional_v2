import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
import fonts from '../utils/fonts';
const HeaderWithIconsAndProgressbar = ({
  leftIcon,
  rightIcon,
  title,
  leftOnPress,
  rightOnPress,
  titleColor,
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
      <View style={styles.progressBar_view}>
        <Progress.Bar
          progress={0.4}
          width={358}
          height={7}
          color="#8D43A4"
          borderWidth={0}
          unfilledColor="#c0b1c6c9"
        />
      </View>
      <Text style={[styles.header_title, {color: titleColor}]}>{title}</Text>
    </View>
  );
};

export default HeaderWithIconsAndProgressbar;

const styles = StyleSheet.create({
  container: {
    height: 140,
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
    fontFamily: fonts.MontserratMedium,
  },
  progressBar_view: {
    marginTop: 24,
  },
});
