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
  const [countComponent, setCountComponent] = useState(1);
  const [uploadFiles, setUploadFiles] = useState([<HealthRecord />]);

  const handleAdd = () => {
    const fileId = Math.random();
    const newComponent = (
      <HealthRecord
        itemNo={uploadFiles.length + 1}
        key={fileId}
        text={fileId}
      />
    );
    setUploadFiles([...uploadFiles, newComponent]);
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
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {uploadFiles.map(component => component)}

        <ButtonWithLeftIcon onPress={handleAdd} />
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
});
