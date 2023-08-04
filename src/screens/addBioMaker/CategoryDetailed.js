import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import HeaderWithDoubleTitleWithIcons from '../../components/HeaderWithDoubleTitleWithIcons';
import ArrowLeft from '../../assets/icons/ArrowLeft.png';
import Question from '../../assets/icons/Question.png';
import SearchBar from '../../components/SearchBar';
import AddBiomakerListCard from '../../components/AddBiomakerFilterComponents/AddBiomakerListCard';
const Data = [
  {id: 11, name: 'Insulin', testType: 'Urine'},
  {id: 12, name: 'Tryglicerides', testType: 'Blood'},
  {id: 13, name: 'HbC1', testType: 'Blood'},
  {id: 14, name: 'Ketones', testType: 'Blood'},
  {id: 15, name: 'Glucose', testType: 'Saliva'},
];
const CategoryDetailed = ({navigation, route}) => {
  const {headerTitle, headerSubTitle} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithDoubleTitleWithIcons
        title={headerTitle}
        subTitle={headerSubTitle}
        leftIcon={ArrowLeft}
        leftOnPress={() => {
          navigation.goBack();
        }}
        rightIcon={Question}
        rightOnPress={() => {
          console.warn('pressed');
        }}
      />
      <View style={styles.searchbar_view}>
        <SearchBar />
      </View>
      <ScrollView
        contentContainerStyle={styles.vertical_list_view}
        showsVerticalScrollIndicator={false}>
        {Data.map(item => (
          <AddBiomakerListCard childrenItem={item} key={item.id} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryDetailed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  searchbar_view: {
    height: 80,
    width: 400,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBlockColor: '#E5E5E5',
  },
  vertical_list_view: {
    marginTop: 24,
  },
});
