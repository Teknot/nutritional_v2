import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import HeaderWithLeftRightIcon from '../../components/HeaderWithLeftRightIcon';
import ArrowLeft from '../../assets/icons/ArrowLeft.png';
import CustomButton from '../../components/CustomButton';
import fonts from '../../utils/fonts';

const recordData = [
  {id: 1, name: 'Allergies', number_records: '4 records'},
  {id: 2, name: 'Family History', number_records: '4 records'},
  {id: 3, name: 'Diagnoses/Conditions', number_records: '4 records'},
  {id: 4, name: 'Medications & Supplements', number_records: '4 records'},
  {id: 5, name: 'Symptoms', number_records: '4 records'},
  {id: 6, name: 'Lab test', number_records: '4 records'},
  {id: 7, name: 'DNA test', number_records: '4 records'},
  {id: 8, name: 'Medical visits', number_records: '4 records'},
];
const MyHealthRecordList = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithLeftRightIcon
        leftIcon={ArrowLeft}
        leftOnPress={() => {
          navigation.goBack();
        }}
        rightOnPress={() => {
          console.warn('rightPressed');
        }}
        title={'My Health Record'}
        color={'#0F0E0F'}
      />
      <ScrollView
        contentContainerStyle={{paddingBottom: 20}}
        showsVerticalScrollIndicator={false}>
        {recordData.map(item => (
          <TouchableOpacity style={styles.record_item_view} key={item.id}>
            <Text style={styles.record_name}>{item.name}</Text>
            <Text style={styles.record_number}>{item.number_records}</Text>
          </TouchableOpacity>
        ))}
        <View style={{marginTop: 20}}>
          <CustomButton
            title={'Select Multiple Test Record'}
            onPres={() => {
              navigation.navigate('UploadHealthTestMultiple');
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyHealthRecordList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  record_item_view: {
    width: 358,
    height: 77,
    borderWidth: 1,
    borderColor: '#D0D5DD',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
  },
  record_name: {
    color: 'black',
    fontSize: 16,
    fontFamily: fonts.MontserratSemiBold,
  },
  record_number: {
    color: '#787571',
    fontSize: 14,
    marginTop: 8,
    fontFamily: fonts.MontserratRegular,
  },
});
