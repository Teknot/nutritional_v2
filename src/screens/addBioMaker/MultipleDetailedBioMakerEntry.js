import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import ArrowLeft from '../../assets/icons/ArrowLeft.png';
import question from '../../assets/icons/Question.png';
import HeaderWithIconsAndProgressbar from '../../components/HeaderWithIconsAndProgressbar';
import SearchBar from '../../components/SearchBar';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import InputWithDropDown from '../../components/InputWithDropDown';
import DropDownMenuWithLabel from '../../components/DropDownMenuWithLabel';

import CustomButton from '../../components/CustomButton';
import fonts from '../../utils/fonts';

const listData = [
  {label: 'hello', value: 'hello'},
  {label: 'hello', value: 'hello'},
  {label: 'hello', value: 'hello'},
];

const MultipleDetailedBioMakerEntry = ({navigation}) => {
  const [DatePickerVisibility, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [showDate, setShowDate] = useState('Select Date');
  const [timePickerVisibility, setTimePickerVisibility] = useState(false);
  const [showTime, setShowTime] = useState('Select Date');
  const [value, setValue] = useState('');
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
    setSelectedDate(date);
    hideDatePicker();
  };
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = time => {
    const NewTime = new Date(time);
    const Time = NewTime.toLocaleTimeString();
    setShowTime(Time);

    hideDatePicker();
  };
  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithIconsAndProgressbar
        leftIcon={ArrowLeft}
        rightIcon={question}
        leftOnPress={() => {
          navigation.goBack();
        }}
        rightOnPress={() => {}}
        title={'Input Hormone Test Result'}
        titleColor={'#292724'}
      />
      <ScrollView
        contentContainerStyle={{alignItems: 'center', paddingBottom: 20}}>
        <SearchBar placeholder={'hormones'} />
        <View style={styles.content_container}>
          <Text style={styles.heading}>Progesterone</Text>
          <View style={styles.dateAndTime_view}>
            <Text style={styles.label}>Date And Time of Test</Text>
            <View style={styles.subContainer}>
              <View style={styles.button_view}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={showDatePicker}>
                  <Image
                    source={require('../../assets/icons/CalendarBlank.png')}
                  />
                  <Text style={styles.button_text}>{showDate}</Text>
                  <Image source={require('../../assets/icons/downArrow.png')} />
                </TouchableOpacity>
              </View>
              <View style={[styles.button_view, {marginLeft: 11}]}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={showTimePicker}>
                  <Image
                    source={require('../../assets/icons/CalendarBlank.png')}
                  />
                  <Text style={styles.button_text}>Select Time</Text>
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
          <InputWithDropDown
            DropDownPlaceholder={'Select'}
            label={'Value'}
            textPlaceholder={'Enter Value'}
            data={listData}
            value={value}
            setValue={setValue}
          />
          <DropDownMenuWithLabel
            placeholder={'Select Day of cycle'}
            label={'Day of cycle'}
            value={value}
            setValue={setValue}
            data={listData}
          />
          <DropDownMenuWithLabel
            placeholder={'Select Provider'}
            label={'Provider'}
            value={value}
            setValue={setValue}
            data={listData}
          />
        </View>
        <View style={styles.content_container}>
          <Text style={styles.heading}>Estrogen</Text>
          <View style={styles.dateAndTime_view}>
            <Text style={styles.label}>Date And Time of Test</Text>
            <View style={styles.subContainer}>
              <View style={styles.button_view}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={showDatePicker}>
                  <Image
                    source={require('../../assets/icons/CalendarBlank.png')}
                  />
                  <Text style={styles.button_text}>{showDate}</Text>
                  <Image source={require('../../assets/icons/downArrow.png')} />
                </TouchableOpacity>
              </View>
              <View style={[styles.button_view, {marginLeft: 11}]}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={showTimePicker}>
                  <Image
                    source={require('../../assets/icons/CalendarBlank.png')}
                  />
                  <Text style={styles.button_text}>Select Time</Text>
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
          <InputWithDropDown
            DropDownPlaceholder={'Select'}
            label={'Value'}
            textPlaceholder={'Enter Value'}
            data={listData}
            value={value}
            setValue={setValue}
          />
          <DropDownMenuWithLabel
            placeholder={'Select Day of cycle'}
            label={'Day of cycle'}
            value={value}
            setValue={setValue}
            data={listData}
          />
          <DropDownMenuWithLabel
            placeholder={'Select Provider'}
            label={'Provider'}
            value={value}
            setValue={setValue}
            data={listData}
          />
        </View>

        <CustomButton
          title={'Save'}
          onPres={() => {
            navigation.navigate('AddBioMakerResult');
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MultipleDetailedBioMakerEntry;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  content_container: {
    borderTopWidth: 1,
    borderColor: '#D0D5DD',
    marginTop: 19,
    width: 390,
    padding: 16,
  },
  label: {
    fontSize: 14,
    color: '#344054',
    marginHorizontal: 3,
    fontFamily: fonts.InterMedium,
  },
  subContainer: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 3,
  },
  button_view: {
    borderWidth: 1,
    borderColor: '#D0D5DD',
    width: 172,
    height: 44,
    justifyContent: 'center',
    borderRadius: 8,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  button_text: {
    fontSize: 16,
    color: '#667085',
    fontFamily: fonts.InterRegular,
  },
  heading: {
    color: '#292724',
    fontSize: 18,
    fontFamily: fonts.MontserratSemiBold,
  },
  dateAndTime_view: {
    marginVertical: 8,
  },
});
