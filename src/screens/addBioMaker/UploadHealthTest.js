import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import HeaderWithLeftRightIcon from '../../components/HeaderWithLeftRightIcon';
import cross from '../../assets/icons/X.png';
import question from '../../assets/icons/Question.png';
import DropDownMenuWithLabel from '../../components/DropDownMenuWithLabel';
import FileUploaderWithLabel from '../../components/FileUploaderWithLabel';
import ButtonWithLeftIcon from '../../components/ButtonWithLeftIcon';
import CustomButton from '../../components/CustomButton';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import fonts from '../../utils/fonts';
const listData = [
  {label: 'hello', value: 'hello'},
  {label: 'hello', value: 'hello'},
  {label: 'hello', value: 'hello'},
];
const UploadHealthTest = ({navigation}) => {
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
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#ffffff"
        barStyle={'dark-content'}
      />
      <HeaderWithLeftRightIcon
        leftIcon={cross}
        rightIcon={question}
        leftOnPress={() => {
          console.warn('leftPressed');
        }}
        rightOnPress={() => {
          console.warn('rightPressed');
        }}
        title={'Import health record'}
        color={'#292724'}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <DropDownMenuWithLabel
          placeholder={'Select Category'}
          label={'Category'}
          value={selectCategory}
          setValue={setSelectCategory}
          data={listData}
        />

        <View style={styles.dateAndTime_view}>
          <Text style={styles.label}>Date and time of test</Text>
          <View style={styles.subContainer}>
            <View style={styles.button_view}>
              <TouchableOpacity style={styles.button} onPress={showDatePicker}>
                <Image
                  source={require('../../assets/icons/CalendarBlank.png')}
                />
                <Text style={styles.button_text}>{showDate}</Text>
                <Image source={require('../../assets/icons/downArrow.png')} />
              </TouchableOpacity>
            </View>
            <View style={[styles.button_view, {marginLeft: 11}]}>
              <TouchableOpacity style={styles.button} onPress={showTimePicker}>
                <Image
                  source={require('../../assets/icons/CalendarBlank.png')}
                />
                <Text style={styles.button_text}>{selectedTime}</Text>
                <Image source={require('../../assets/icons/downArrow.png')} />
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
        <ButtonWithLeftIcon />
        <CustomButton
          title={'Save'}
          onPres={() => {
            navigation.navigate('MyHealthRecordList');
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default UploadHealthTest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
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
    color: '#667085',
    fontFamily: fonts.InterRegular,
  },
  label: {
    fontSize: 14,
    color: '#344054',
    marginHorizontal: 3,
    fontFamily: fonts.InterMedium,
  },
  dateAndTime_view: {
    marginVertical: 8,
  },
});
