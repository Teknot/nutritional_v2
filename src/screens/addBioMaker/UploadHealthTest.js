import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import HeaderWithLeftRightIcon from '../../components/HeaderWithLeftRightIcon';
import ArrowLeft from '../../assets/icons/ArrowLeft.png';
import question from '../../assets/icons/Question.png';
const UploadHealthTest = ({navigation}) => {
  return (
    <View>
      <Text>UploadHealthTes</Text>
      <Button
        title="Components"
        onPress={() => {
          navigation.navigate('ComponentsList');
        }}
      />
    </View>
  );
};

export default UploadHealthTest;

const styles = StyleSheet.create({});
