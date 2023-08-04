import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {Dropdown} from 'react-native-element-dropdown';
const InputWithDropDown = ({
  value,
  setValue,
  data,
  label,
  DropDownPlaceholder,
  textPlaceholder,
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input_view}>
        <TextInput placeholder={textPlaceholder} style={styles.input} />
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
  },
  input_view: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  label: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '600',
    color: '#252B42',
    marginHorizontal: 3,
    marginTop:10
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
