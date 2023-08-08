import {StyleSheet, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import React, {useState} from 'react';
import cross from '../../assets/icons/X.png';
import question from '../../assets/icons/Question.png';
import ButtonWithLeftIcon from '../../components/ButtonWithLeftIcon';
import CustomButton from '../../components/CustomButton';
import HeaderWithLeftRightIcon from '../../components/HeaderWithLeftRightIcon';
import HealthRecord from '../../components/HealthRecord';
const listData = [
  {label: 'hello', value: 'hello'},
  {label: 'hello', value: 'hello'},
  {label: 'hello', value: 'hello'},
];

const UploadHealthTestMultiple = ({navigation}) => {
  const [uploadFiles, setUploadFiles] = useState([
    {
      id: Math.random(),
      category: '',
      date: '',
      time: '',
      cycle: '',
      provider: '',
      file_url: '',
    },
  ]);

  const handleAdd = () => {
    setUploadFiles(prev => [
      ...prev,
      {
        id: Math.random(),
        category: '',
        date: '',
        time: '',
        cycle: '',
        provider: '',
        file_url: '',
      },
    ]);
  };

  const handleDelete = index => {
    const arr = [...uploadFiles];
    arr.splice(
      arr.findIndex(value => value.id === index),
      1,
    );
    console.log(
      'index that deleted ',
      arr.findIndex(value => value.id === index),
    );
    setUploadFiles(arr);
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
          navigation.goBack();
        }}
        rightOnPress={() => {
          console.warn('rightPressed');
        }}
        title={'Import health Test Result'}
        color={'#292724'}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {uploadFiles.map((item, index) => (
          <HealthRecord
            key={index}
            uniqueKey={index}
            onPress={x => {
              handleDelete(x);
            }}
            item={item}
          />
        ))}

        <ButtonWithLeftIcon
          onPress={handleAdd}
          disabled={uploadFiles.length === 5 ? true : false}
        />
        <CustomButton
          title={'Save'}
          onPres={() => {
            navigation.navigate('DetailedBioMakerEntry');
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default UploadHealthTestMultiple;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
});
