import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import AddBiomakerListCard from './AddBiomakerListCard';
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
const MostPopular = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}
    showsVerticalScrollIndicator={false}>
      {demyData.map(item => (
        <View style={styles.list_view} key={item.id}>
          <Text style={styles.list_heading}>{item.name}</Text>
          {item.item.map(childrenItem => (
            <AddBiomakerListCard
              childrenItem={childrenItem}
              key={childrenItem.id}
            />
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

export default MostPopular;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom:240
  },
  list_heading: {
    fontSize: 18,
    color: 'black',
  },
});
