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
  // const [uploadFiles, setUploadFiles] = useState(1);
  const [uploadFiles, setUploadFiles] = useState([
    <HealthRecord key={Math.random()} />,
  ]);

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
    // setUploadFiles(prevDocs => [...prevDocs, {id: fileId, doc:<HealthRecord/>}]);
  };

  console.log('array of component', uploadFiles);

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
});
