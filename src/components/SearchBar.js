import { StyleSheet, Text, View , Image , TextInput } from 'react-native'
import React from 'react'
import fonts from '../utils/fonts'

const SearchBar = ({placeholder}) => {
  return (
    <View style={styles.searchBar_Container}>
          <Image source={require('../assets/icons/Icon.png')} />
          <TextInput placeholder={placeholder} style={styles.input} placeholderTextColor={'#667085'} />
     </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    searchBar_Container: {
        width: 358,
        height: 44,
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginTop:10
      },
      input: {
        marginLeft: 8,
        fontFamily:fonts.InterRegular,
        fontSize:16
      },
})