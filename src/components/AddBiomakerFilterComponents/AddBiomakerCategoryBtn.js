import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'

const AddBiomakerCategoryBtn = ({ backgroundColor , color , heading , subheading , onPress , subtitle}) => {
  return (
    <TouchableOpacity style={[styles.list_item , { backgroundColor:backgroundColor}]}
    onPress={()=>{onPress(heading , subtitle)}}
    >
    <Text style={[styles.list_item_heading , {color:color}]}>{heading}</Text>
    <Text style={[styles.list_item_subHeading , {color:color}]}>{subheading}</Text>
   </TouchableOpacity>
  )
}

export default AddBiomakerCategoryBtn

const styles = StyleSheet.create({
    list_item:{
        width:240,
        height:80,
        borderRadius:12,
        padding:16,
        margin:5,
    },
    list_item_heading:{
        
        fontSize:16
    },
    list_item_subHeading:{
        fontSize:16,
    },
})