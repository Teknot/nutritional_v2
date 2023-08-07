import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import fonts from '../utils/fonts';
const InputWithDropDown = ({
  value,
  setValue,
  data,
  label,
  DropDownPlaceholder,
  textPlaceholder,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input_view}>
        <TextInput
          placeholder={textPlaceholder}
          style={styles.input}
          placeholderTextColor={'#667085'}
        />
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
          placeholder={DropDownPlaceholder}
          searchPlaceholder="Search..."
          value={value}
          onChange={item => {
            setValue(item.value);
          }}
        />
      </View>
    </View>
  );
};

export default InputWithDropDown;

const styles = StyleSheet.create({
  input: {
    width: 247,
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D0D5DD',
    backgroundColor: '#ffffff',
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
    fontFamily: fonts.InterRegular,
  },
  input_view: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  label: {
    fontSize: 14,
    color: '#292724',
    marginHorizontal: 3,
    fontFamily: fonts.InterMedium,
  },
  dropdown: {
    height: 44,
    borderColor: '#87878724',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: '#ffffff',
    width: 99,
    marginLeft: 12,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#667085',
    fontFamily: fonts.InterRegular,
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
  container: {
    marginVertical: 8,
  },
});
