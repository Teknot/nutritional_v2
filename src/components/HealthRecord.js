import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import FileUploaderWithLabel from './FileUploaderWithLabel';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DropDownMenuWithLabel from './/DropDownMenuWithLabel';

import fonts from '../utils/fonts';
const listData = [
  {label: 'hello', value: 'hello'},
  {label: 'hello', value: 'hello'},
  {label: 'hello', value: 'hello'},
];

const HealthRecord = ({itemNo, key}) => {
  const [selectCategory, setSelectCategory] = useState('');
  const [DatePickerVisibility, setDatePickerVisibility] = useState(false);
  const [showDate, setShowDate] = useState('Select Date');
  const [timePickerVisibility, setTimePickerVisibility] = useState(false);
  const [selectedTime, setSelectedTime] = useState('Select Time');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = date => {
    let NewDate = date.toISOString().split('T');
    let splitDate = NewDate[0].split('-');
    let finaldate = splitDate[2] + '/' + splitDate[1] + '/' + splitDate[0];
    setShowDate(finaldate);
    hideDatePicker();
  };
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = time => {
    let newTime = new Date(time);
    let LocalTime = newTime.toLocaleTimeString();
    let timeArray = LocalTime.split(':');
    let Time =
      timeArray[0] + ':' + timeArray[1] + ':' + timeArray[2].split(' ')[1];
    setSelectedTime(Time);
    hideDatePicker();
  };
  return (
    <View key={key}>
      {itemNo > 1 ? (
        <View style={styles.upper_View}>
          {itemNo === 1 ? (
            <Text style={styles.upper_View_text}>First Test Category</Text>
          ) : itemNo === 2 ? (
            <Text style={styles.upper_View_text}>Second Test Category</Text>
          ) : itemNo === 3 ? (
            <Text style={styles.upper_View_text}>Third Test Category</Text>
          ) : itemNo === 4 ? (
            <Text style={styles.upper_View_text}>fourth Test Category</Text>
          ) : itemNo === 5 ? (
            <Text style={styles.upper_View_text}>Fifth Test Category</Text>
          ) : null}

          {itemNo > 1 ? (
            <TouchableOpacity>
              <Image
                source={require('../assets/icons/Trash.png')}
                tintColor={'black'}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      ) : null}
      <DropDownMenuWithLabel
        placeholder={'Select Category'}
        label={'Category'}
        value={selectCategory}
        setValue={setSelectCategory}
        data={listData}
      />

      <View style={styles.dateAndTime_view}>
        <Text style={styles.label}>Label</Text>
        <View style={styles.subContainer}>
          <View style={styles.button_view}>
            <TouchableOpacity style={styles.button} onPress={showDatePicker}>
              <Image source={require('../assets/icons/CalendarBlank.png')} />
              <Text style={styles.button_text}>{showDate}</Text>
              <Image source={require('../assets/icons/downArrow.png')} />
            </TouchableOpacity>
          </View>
          <View style={[styles.button_view, {marginLeft: 11}]}>
            <TouchableOpacity style={styles.button} onPress={showTimePicker}>
              <Image source={require('../assets/icons/CalendarBlank.png')} />
              <Text style={styles.button_text}>{selectedTime}</Text>
              <Image source={require('../assets/icons/downArrow.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <DateTimePickerModal
          isVisible={DatePickerVisibility}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={hideDatePicker}
        />
        <DateTimePickerModal
          isVisible={timePickerVisibility}
          mode="time"
          onConfirm={handleTimeConfirm}
          onCancel={hideTimePicker}
        />
      </View>
      <DropDownMenuWithLabel
        placeholder={'Select Day of Cycle'}
        label={'Day of Cycle'}
        value={selectCategory}
        setValue={setSelectCategory}
        data={listData}
      />
      <DropDownMenuWithLabel
        placeholder={'Select Provider'}
        label={'Provider'}
        value={selectCategory}
        setValue={setSelectCategory}
        data={listData}
      />
      <FileUploaderWithLabel />
      {/* <ButtonWithLeftIcon  onPress={()=>{console.warn('pressed')}}/>
      <CustomButton
        title={'Save'}
        onPres={() => {
          navigation.navigate('MyHealthRecordList');
        }}
      /> */}
    </View>
  );
};

export default HealthRecord;

const styles = StyleSheet.create({
  subContainer: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 3,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  button_view: {
    borderWidth: 1,
    borderColor: '#D0D5DD',
    width: 172,
    height: 44,
    justifyContent: 'center',
    borderRadius: 8,
  },
  button_text: {
    fontSize: 16,
    fontFamily: fonts.InterRegular,
    color: '#667085',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#344054',
    marginHorizontal: 3,
    fontFamily: fonts.InterMedium,
  },
  upper_View: {
    width: 358,
    height: 44,
    backgroundColor: '#E5E5E5',
    borderRadius: 8,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  upper_View_text: {
    fontSize: 16,
    fontFamily: fonts.MontserratSemiBold,
    color: '#22212A',
  },
  dateAndTime_view: {
    marginVertical: 8,
  },
});
