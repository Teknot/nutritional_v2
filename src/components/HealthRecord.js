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
  
  import ArrowLeft from '../assets/icons/ArrowLeft.png';
  import cross from '../assets/icons/cross.png';
  import question from '../assets/icons/Question.png';
  import FileUploaderWithLabel from './FileUploaderWithLabel';
  import ButtonWithLeftIcon from './ButtonWithLeftIcon';
  import CustomButton from './CustomButton';
  import DateTimePickerModal from 'react-native-modal-datetime-picker';
  import DropDownMenuWithLabel from './/DropDownMenuWithLabel';
import HeaderWithLeftRightIcon from './HeaderWithLeftRightIcon';
  const listData = [
    {label: 'hello', value: 'hello'},
    {label: 'hello', value: 'hello'},
    {label: 'hello', value: 'hello'},
  ];
  

const HealthRecord = ({itemNo}) => {
    const [selectCategory, setSelectCategory] = useState('');
    const [DatePickerVisibility, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [showDate, setShowDate] = useState('Select Date');
    const [timePickerVisibility, setTimePickerVisibility] = useState(false);
    const [selectedTime, setSelectedTime] = useState('');
    const [showTime, setShowTime] = useState('Select Date');
  
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
  
    const handleTimeConfirm = date => {
      let NewDate = date.toISOString().split('T');
      let splitDate = NewDate[0].split('-');
      let finaldate = splitDate[2] + '/' + splitDate[1] + '/' + splitDate[0];
      setShowDate(finaldate);
      setSelectedDate(date);
      console.log(finaldate);
      console.log(date);
      hideDatePicker();
    };
  return (
    <View>
      <View style={styles.upper_View}>
        
        {itemNo === 1 ? (<Text>First Test Category</Text>) : itemNo === 2 ?(<Text>Second Test Category</Text>): itemNo === 3 ? (<Text>Third Test Category</Text>): itemNo === 4 ? (<Text>fourth Test Category</Text>): itemNo === 5 ? (<Text>Fifth Test Category</Text>): null}
        
      </View>
      <DropDownMenuWithLabel
        placeholder={'Select Category'}
        label={'Category'}
        value={selectCategory}
        setValue={setSelectCategory}
        data={listData}
      />

      <View>
        <Text style={styles.label}>Label</Text>
        <View style={styles.subContainer}>
          <View style={styles.button_view}>
            <TouchableOpacity style={styles.button} onPress={showDatePicker}>
              <Image
                source={require('../assets/icons/CalendarBlank.png')}
              />
              <Text style={styles.button_text}>{showDate}</Text>
              <Image source={require('../assets/icons/downArrow.png')} />
            </TouchableOpacity>
          </View>
          <View style={[styles.button_view, {marginLeft: 11}]}>
            <TouchableOpacity style={styles.button} onPress={showTimePicker}>
              <Image
                source={require('../assets/icons/CalendarBlank.png')}
              />
              <Text style={styles.button_text}>Select Time</Text>
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
  )
}

export default HealthRecord

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
      },
      scrollContainer: {
        alignItems: 'center',
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
      },
      label: {
        fontSize: 15,
        lineHeight: 24,
        fontWeight: '600',
        color: '#252B42',
        marginHorizontal: 3,
      },
      upper_View:{
        width:358,
        height:44,
        backgroundColor:'#787571',
        borderRadius:8,
        paddingHorizontal:16,
        justifyContent:'center'
      },
})