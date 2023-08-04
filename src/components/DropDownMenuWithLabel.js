import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Dropdown} from 'react-native-element-dropdown';
const DropDownMenuWithLabel = ({value, setValue, data, label, placeholder}) => {
  return (
    <View style={{marginVertical: 8}}>
      <Text style={styles.label}>{label}</Text>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
      />
    </View>
  );
};

export default DropDownMenuWithLabel;

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '600',
    color: '#252B42',
    marginHorizontal: 3,
    marginLeft:5
  },
  dropdown: {
    height: 44,
    borderColor: '#87878724',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 8,
    backgroundColor: '#ffffff',
    width: 358,
    marginTop: 8,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
