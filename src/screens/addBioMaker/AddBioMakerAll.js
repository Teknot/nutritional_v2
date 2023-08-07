import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import cross from '../../assets/icons/X.png';
import question from '../../assets/icons/Question.png';
import HeaderWithLeftRightIcon from '../../components/HeaderWithLeftRightIcon';
import SearchBar from '../../components/SearchBar';
import AllBioMaker from '../../components/AddBiomakerFilterComponents/AllBioMaker';
import MostPopular from '../../components/AddBiomakerFilterComponents/MostPopular';
import Recently from '../../components/AddBiomakerFilterComponents/Recently';
import Recommended from '../../components/AddBiomakerFilterComponents/Recommended';
import fonts from '../../utils/fonts';
const AddBioMakerAll = ({navigation}) => {
  const [filterState, setFilterState] = useState('All');
  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithLeftRightIcon
        leftIcon={cross}
        rightIcon={question}
        leftOnPress={() => {
          navigation.goBack();
        }}
        rightOnPress={() => {
          navigation.navigate('MultipleDetailedBioMakerEntry');
        }}
        title={'Add biomaker result'}
        color={'#0F0E0F'}
      />
      <View style={{alignItems: 'center'}}>
        <SearchBar placeholder={'Search biomaker'} />
      </View>
      <View style={{height: 60}}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filter_btn_view}
          horizontal={true}>
          <TouchableOpacity
            style={
              filterState === 'All'
                ? [styles.filter_btn, {backgroundColor: '#8D43A4'}]
                : styles.filter_btn
            }
            onPress={() => {
              setFilterState('All');
            }}>
            <Text
              style={
                filterState === 'All'
                  ? (styles.filter_btn_text, {color: '#ffffff'})
                  : styles.filter_btn_text
              }>
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              filterState === 'Most popular'
                ? [styles.filter_btn, {backgroundColor: '#8D43A4'}]
                : styles.filter_btn
            }
            onPress={() => {
              setFilterState('Most popular');
            }}>
            <Text
              style={
                filterState === 'Most popular'
                  ? (styles.filter_btn_text, {color: '#ffffff'})
                  : styles.filter_btn_text
              }>
              Most popular
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              filterState === 'Recently'
                ? [styles.filter_btn, {backgroundColor: '#8D43A4'}]
                : styles.filter_btn
            }
            onPress={() => {
              setFilterState('Recently');
            }}>
            <Text
              style={
                filterState === 'Recently'
                  ? (styles.filter_btn_text, {color: '#ffffff'})
                  : styles.filter_btn_text
              }>
              Recently
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              filterState === 'Recommended'
                ? [styles.filter_btn, {backgroundColor: '#8D43A4'}]
                : styles.filter_btn
            }
            onPress={() => {
              setFilterState('Recommended');
            }}>
            <Text
              style={
                filterState === 'Recommended'
                  ? (styles.filter_btn_text, {color: '#ffffff'})
                  : styles.filter_btn_text
              }>
              Recommended
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View>
        {filterState === 'All' ? (
          <AllBioMaker navigation={navigation} />
        ) : //
        filterState === 'Most popular' ? (
          <MostPopular />
        ) : filterState === 'Recently' ? (
          <Recently />
        ) : filterState === 'Recommended' ? (
          <Recommended />
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default AddBioMakerAll;

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
    fontFamily: fonts.MontserratMedium,
  },
});
