import {StyleSheet, Text, View , ScrollView} from 'react-native';
import React, {useState} from 'react';
import HeaderWithLeftRightIcon from '../components/HeaderWithLeftRightIcon';
import ArrowLeft from '../assets/icons/ArrowLeft.png';
import question from '../assets/icons/Question.png';
import DropDownMenuWithLabel from '../components/DropDownMenuWithLabel';
import CustomButton from '../components/CustomButton';
import InputWithDropDown from '../components/InputWithDropDown';
import DateAndTime from '../components/DateAndTime';
import ButtonWithLeftIcon from '../components/ButtonWithLeftIcon';
import FileUploaderWithLabel from '../components/FileUploaderWithLabel';
const listData = [
  {label: 'hello', value: 'hello'},
  {label: 'hello', value: 'hello'},
  {label: 'hello', value: 'hello'},
];
const ComponentsList = ({navigation}) => {
  const [value, setValue] = useState('');
  return (
    <View style={{alignItems: 'center', flex: 1, backgroundColor: '#ffffff'}}>
      <HeaderWithLeftRightIcon
        leftIcon={ArrowLeft}
        rightIcon={question}
        leftOnPress={() => {
          navigation.goBack();
        }}
        rightOnPress={() => {
          console.warn('rightPressed');
        }}
        title={'Import health record'}
      />
<ScrollView contentContainerStyle={{paddingBottom:250}}>
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
      <FileUploaderWithLabel/>
      </ScrollView>
    </View>
  );
};

export default ComponentsList;

const styles = StyleSheet.create({});
