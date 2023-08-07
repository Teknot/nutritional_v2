import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import ArrowLeft from '../../assets/icons/ArrowLeft.png';
import MenuDot from '../../assets/icons/DotsThreeOutline.png';
import HeaderWithDoubleTitleWithIcons from '../../components/HeaderWithDoubleTitleWithIcons';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import Summary from '../../components/ResultBioMakerFilterComponent/Summary';
import fonts from '../../utils/fonts';

const DiagnosticFunction = [
  {id: 1, name: 'Diabetes'},
  {id: 2, name: 'Metabolic health'},
  {id: 3, name: 'Heart health'},
  {id: 4, name: 'Hormonal balance'},
  {id: 5, name: 'Longevity'},
];

const rangeData = [
  {
    id: 1,
    range: 'Very high',
    functional_ranges: '105-130',
    standard_ranges: '131-150',
  },
  {
    id: 2,
    range: 'High',
    functional_ranges: '91-120',
    standard_ranges: '100-130',
  },
  {
    id: 3,
    range: 'Optimal',
    functional_ranges: '75-90',
    standard_ranges: '65-99',
  },
  {id: 4, range: 'Low', functional_ranges: '60-74', standard_ranges: '50-64'},
  {
    id: 5,
    range: 'Very low',
    functional_ranges: '40-59',
    standard_ranges: '40-49',
  },
];
const AddBioMakerResult = ({navigation}) => {
  const [filterState, setFilterState] = useState('Summary');
  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithDoubleTitleWithIcons
        title={'Insulin'}
        subTitle={'Blood test'}
        leftIcon={ArrowLeft}
        leftOnPress={() => {
          navigation.goBack();
        }}
        rightIcon={MenuDot}
        rightOnPress={() => {
          console.warn('pressed');
        }}
      />
      <View
        style={{
          height: 60,
          borderBottomWidth: 1,
          borderBottomColor: '#E5E5E5',
        }}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filter_btn_view}
          horizontal={true}>
          <TouchableOpacity
            style={
              filterState === 'Summary'
                ? [styles.filter_btn, {backgroundColor: '#8D43A4'}]
                : styles.filter_btn
            }
            onPress={() => {
              setFilterState('Summary');
            }}>
            <Text
              style={
                filterState === 'Summary'
                  ? (styles.filter_btn_text, {color: '#ffffff'})
                  : styles.filter_btn_text
              }>
              Summary
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              filterState === 'Function'
                ? [styles.filter_btn, {backgroundColor: '#8D43A4'}]
                : styles.filter_btn
            }
            onPress={() => {
              setFilterState('Function');
            }}>
            <Text
              style={
                filterState === 'Function'
                  ? (styles.filter_btn_text, {color: '#ffffff'})
                  : styles.filter_btn_text
              }>
              Function
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              filterState === 'Defficiency'
                ? [styles.filter_btn, {backgroundColor: '#8D43A4'}]
                : styles.filter_btn
            }
            onPress={() => {
              setFilterState('Defficiency');
            }}>
            <Text
              style={
                filterState === 'Defficiency'
                  ? (styles.filter_btn_text, {color: '#ffffff'})
                  : styles.filter_btn_text
              }>
              Defficiency
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              filterState === 'Excess'
                ? [styles.filter_btn, {backgroundColor: '#8D43A4'}]
                : styles.filter_btn
            }
            onPress={() => {
              setFilterState('Excess');
            }}>
            <Text
              style={
                filterState === 'Excess'
                  ? (styles.filter_btn_text, {color: '#ffffff'})
                  : styles.filter_btn_text
              }>
              Excess
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              filterState === 'Relevant panels'
                ? [styles.filter_btn, {backgroundColor: '#8D43A4'}]
                : styles.filter_btn
            }
            onPress={() => {
              setFilterState('Relevant panels');
            }}>
            <Text
              style={
                filterState === 'Relevant panels'
                  ? (styles.filter_btn_text, {color: '#ffffff'})
                  : styles.filter_btn_text
              }>
              Relevant panels
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              filterState === 'Science'
                ? [styles.filter_btn, {backgroundColor: '#8D43A4'}]
                : styles.filter_btn
            }
            onPress={() => {
              setFilterState('Science');
            }}>
            <Text
              style={
                filterState === 'Science'
                  ? (styles.filter_btn_text, {color: '#ffffff'})
                  : styles.filter_btn_text
              }>
              Science
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View>
        {filterState === 'Summary' ? (
          <Summary />
        ) : filterState === 'Function' ? (
          <Text>function</Text>
        ) : filterState === 'Defficiency' ? (
          <Text>Defficiency</Text>
        ) : filterState === 'Excess' ? (
          <Text>Excess</Text>
        ) : filterState === 'Relevant panels' ? (
          <Text>Relevant panels</Text>
        ) : filterState === 'Science' ? (
          <Text>Science</Text>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default AddBioMakerResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  filter_btn_view: {
    height: 55,
    paddingVertical: 10,
  },
  filter_btn: {
    backgroundColor: '#F7F8FA',
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: 24,
    marginHorizontal: 5,
  },
  filter_btn_text: {
    fontSize: 16,
    fontFamily:fonts.MontserratMedium
  },
});
