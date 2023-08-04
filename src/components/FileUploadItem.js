import { StyleSheet, Text, View  , Image , TouchableOpacity} from 'react-native'
import React from 'react'



const FileUploadItem = ({text ,handelDelete , name }) => {

   
  return (
    <View style={styles.file_list_item} key={text}>
          <View style={styles.item_image_text_view}>
            <View style={styles.item_image}>
              <Image source={require('../assets/images/itemImage.png')} />
            </View>
            <View style={styles.item_text_view}>
              <Text style={styles.item_name}>{name}</Text>
              <Text style={styles.item_size}>200 Kb</Text>
            </View>
          </View>
          <View >
            <TouchableOpacity style={styles.delete_button}
            onPress={()=>{handelDelete(text)}}
            >
              <Image source={require('../assets/icons/Trash.png')} />
            </TouchableOpacity>
          </View>
        </View> 
  )
}

export default FileUploadItem

const styles = StyleSheet.create({
    file_list_container: {
        marginTop: 8,
      },
      file_list_item: {
        marginVertical: 8,
        width: 358,
        height: 80,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#D0D5DD',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
      },
    
      item_image: {
        width: 48,
        height: 48,
        borderRadius: 4,
      },
    
      item_image_text_view: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      delete_button: {
        width: 24,
        height: 24,
        marginTop: -15,
      },
      item_text_view: {
        marginLeft: 16,
        maxWidth: 220,
        flexWrap: 'wrap',
      },
      item_name: {
        fontSize: 14,
        color: '#344054',
      },
      item_size: {
        color: '#667085',
        fontSize: 14,
      },
})