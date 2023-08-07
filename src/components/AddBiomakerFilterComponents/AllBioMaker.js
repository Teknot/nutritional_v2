import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import AddBiomakerCategoryBtn from './AddBiomakerCategoryBtn';
import AddBiomakerListCard from './AddBiomakerListCard';
import fonts from '../../utils/fonts';

const demyData = [
  {
    id: 1,
    name: 'Diabetes & Metabolism',
    item: [
      {id: 11, name: 'Insulin', testType: 'Urine'},
      {id: 12, name: 'Tryglicerides', testType: 'Blood'},
      {id: 13, name: 'HbC1', testType: 'Blood'},
      {id: 14, name: 'Ketones', testType: 'Blood'},
      {id: 15, name: 'Glucose', testType: 'Saliva'},
    ],
  },
  {
    id: 2,
    name: 'Hormones',
    item: [
      {id: 21, name: 'Estrogen', testType: 'Blood'},
      {id: 22, name: 'Estrogen', testType: 'Saliva'},
      {id: 23, name: 'Progesteron', testType: 'Blood'},
      {id: 24, name: 'Progesteron', testType: 'Saliva'},
      {id: 25, name: 'Corstisol', testType: 'Blood'},
    ],
  },
];

const AllBioMaker = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{paddingBottom: 230}}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.list_heading}>View per categories</Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.list_item_view}
          horizontal={true}>
          <AddBiomakerCategoryBtn
            backgroundColor={'#E6F2FA'}
            color={'#0062A6'}
            heading={'Metabolic health'}
            subheading={'20 biomarkers'}
            subtitle={'Add biomarker result'}
            onPress={(heading, subtitle) => {
              navigation.navigate('CategoryDetailed', {
                headerTitle: heading,
                headerSubTitle: subtitle,
              });
            }}
          />
          <AddBiomakerCategoryBtn
            backgroundColor={'#FBFDDF'}
            color={'#757A2F'}
            heading={'Hormones'}
            subheading={'15 biomarkers'}
            subtitle={'Add biomarker result'}
            onPress={(heading, subtitle) => {
              navigation.navigate('CategoryDetailed', {
                headerTitle: heading,
                headerSubTitle: subtitle,
              });
            }}
          />
          <AddBiomakerCategoryBtn
            backgroundColor={'#EEFADE'}
            color={'#678935'}
            heading={'Diabetes & Metabolism'}
            subheading={'30 biomarkers'}
            subtitle={'Add biomarker result'}
            onPress={(heading, subtitle) => {
              navigation.navigate('CategoryDetailed', {
                headerTitle: heading,
                headerSubTitle: subtitle,
              });
            }}
          />
          <AddBiomakerCategoryBtn
            backgroundColor={'#EEFADE'}
            color={'#678935'}
            heading={'Mineral & Vitamin'}
            subheading={'30 biomarkers'}
            subtitle={'Add biomarker result'}
            onPress={(heading, subtitle) => {
              navigation.navigate('CategoryDetailed', {
                headerTitle: heading,
                headerSubTitle: subtitle,
              });
            }}
          />
        </ScrollView>
        {demyData.map(item => (
          <View style={styles.list_view} key={item.id}>
            <Text style={styles.list_heading}>{item.name}</Text>
            <View style={styles.subList_view}>
              {item.item.map(childrenItem => (
                <AddBiomakerListCard
                  childrenItem={childrenItem}
                  key={childrenItem.id}
                />
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default AllBioMaker;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 10,
  },
  list_item_view: {
    marginTop: 16,
    width: 500,
    flexWrap: 'wrap',
  },
  list_view: {
    paddingVertical: 16,
  },
  list_heading: {
    fontSize: 18,
    color: '#292724',
    fontFamily: fonts.MontserratSemiBold,
  },
  subList_view: {
    marginTop: 10,
  },
});
