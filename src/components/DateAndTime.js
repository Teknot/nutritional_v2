import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const DateAndTime = ({dateOnPress , timeOnPress , label , date , time}) => {
  return (
    <View >
      <Text style={styles.label}>Label</Text>
      <View style={styles.subContainer}>
        <View style={styles.button_view}>
          <TouchableOpacity style={styles.button}>
            <Image source={require('../assets/icons/CalendarBlank.png')} />
            <Text style={styles.button_text}>Select Date</Text>
            <Image source={require('../assets/icons/downArrow.png')} />
          </TouchableOpacity>
        </View>
        <View style={[styles.button_view , {marginLeft:11}]}>
          <TouchableOpacity style={styles.button}>
            <Image source={require('../assets/icons/CalendarBlank.png')} />
            <Text style={styles.button_text}>Select Time</Text>
            <Image source={require('../assets/icons/downArrow.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DateAndTime;

const styles = StyleSheet.create({
  subContainer: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom:3,
   
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  button_view: {
    // marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#D0D5DD',
    width: 172,
    height: 44,
    justifyContent: 'center',
    borderRadius: 8,
  },
  button_text: {
    fontSize: 16,
  },
  label: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '600',
    color: '#252B42',
    marginHorizontal: 3,
    // marginLeft:10
  },
});
