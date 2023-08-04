import { StyleSheet, Text, View , Image , TextInput } from 'react-native'
import React from 'react'

const SearchBar = () => {
  return (
    <View style={styles.searchBar_Container}>
          <Image source={require('../assets/icons/Icon.png')} />
          <TextInput placeholder="Search" style={styles.input} />
     </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    searchBar_Container: {
        width: 358,
        height: 44,
        // backgroundColor:'#D0D5DD',
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginTop:10
      },
      input: {
        marginLeft: 8,
      },
})