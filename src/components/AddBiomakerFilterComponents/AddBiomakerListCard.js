import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import fonts from '../../utils/fonts';

const AddBiomakerListCard = ({childrenItem}) => {
  return (
    <View style={styles.vertical_list_view} key={childrenItem.id}>
      <View>
        <Text style={styles.children_item_name}>{childrenItem.name}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 120,
          alignItems: 'center',
        }}>
        <Text style={styles.children_item_type}>{childrenItem.testType}</Text>
        <Image source={require('../../assets/icons/Info.png')} />
        <TouchableOpacity
          style={styles.children_item_add_button}
          onPress={() => {
            console.warn('add', childrenItem.id);
          }}>
          <Image source={require('../../assets/icons/Plus.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddBiomakerListCard;

const styles = StyleSheet.create({
  vertical_list_view: {
    width: 358,
    height: 68,
    borderRadius: 12,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  children_item_name: {
    fontSize: 16,
    color: '#000000',
    fontFamily:fonts.MontserratMedium
  },
  children_item_type: {
    color: '#787571',
    fontSize: 13,
    fontFamily:fonts.MontserratRegular
  },
  children_item_add_button: {
    backgroundColor: '#8D43A4',
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list_view: {
    paddingVertical: 16,
  },
});
