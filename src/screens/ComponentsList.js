import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import HeaderWithLeftRightIcon from '../components/HeaderWithLeftRightIcon';
import ArrowLeft from '../assets/icons/ArrowLeft.png';
import question from '../assets/icons/Question.png';
import DropDownMenuWithLabel from '../components/DropDownMenuWithLabel';
import CustomButton from '../components/CustomButton';
import InputWithDropDown from '../components/InputWithDropDown';
import DateAndTime from '../components/DateAndTime';
import ButtonWithLeftIcon from '../components/ButtonWithLeftIcon';
const listData = [
  {label: 'hello', value: 'hello'},
  {label: 'hello', value: 'hello'},
  {label: 'hello', value: 'hello'},
];
const ComponentsList = () => {
  const [value, setValue] = useState('');
  return (
    <View style={{alignItems: 'center', flex: 1, backgroundColor: '#ffffff'}}>
      <HeaderWithLeftRightIcon
        leftIcon={ArrowLeft}
        rightIcon={question}
        leftOnPress={() => {
          console.warn('leftPressed');
        }}
        rightOnPress={() => {
          console.warn('rightPressed');
        }}
        title={'Import health record'}
      />

      <DropDownMenuWithLabel
        placeholder={'Select Item'}
        label={'Item'}
        value={value}
        setValue={setValue}
        data={listData}
      />

      <CustomButton />
      <InputWithDropDown
        DropDownPlaceholder={'Select..'}
        data={listData}
        value={value}
        setValue={setValue}
      />

      <DateAndTime />

      <ButtonWithLeftIcon />
    </View>
  );
};

export default ComponentsList;

const styles = StyleSheet.create({});
