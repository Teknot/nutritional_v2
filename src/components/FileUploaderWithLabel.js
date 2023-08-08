import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import FileUploadItem from './FileUploadItem';
import DocumentPicker from 'react-native-document-picker';
import fonts from '../utils/fonts';

const FileUploaderWithLabel = () => {
  const [uploadFiles, setUploadFiles] = useState([]);

  const HandelAddFile = async () => {
    try {
      const doc = await DocumentPicker.pick();
      setUploadFiles(prevDocs => [...prevDocs, {id: Math.random(), doc}]);
      console.log('response from inside and direct function', doc);
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('user cancel the upload document', error);
      } else {
        console.log(error);
      }
    }
  };
  const handleDelete = index => {
    const arr = [...uploadFiles];
    arr.splice(
      arr.findIndex(value => value.id === index),
      1,
    );
    setUploadFiles(arr);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>FileUploaderWithLabel</Text>
      <TouchableOpacity
        style={styles.upload_button_container}
        onPress={HandelAddFile}>
        <View style={styles.uploadButtonView}>
          <Image source={require('../assets/icons/UploadSimple.png')} />
        </View>
        <View style={styles.upload_button_text_view}>
          <Text style={styles.upload_button_text}>Add File</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.file_list_container}>
        {uploadFiles?.map((file, index) => {
          return (
            <View key={file.id}>
              <FileUploadItem
                handelDelete={x => {
                  handleDelete(x);
                }}
                name={file?.doc[0]?.name}
                size={file?.doc[0]?.size}
                id={file.id}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default FileUploaderWithLabel;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#D0D5DD',
    width: 358,
    marginTop: 16,
    paddingBottom: 20,
    marginBottom: 20,
  },
  uploadButtonView: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#F4ECF6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  upload_button_container: {
    width: 358,
    height: 112,
    borderWidth: 1,
    borderColor: '#D0D5DD',
    borderRadius: 8,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  upload_button_text_view: {
    marginTop: 12,
  },
  upload_button_text: {
    color: '#8D43A4',
    fontSize: 14,
    fontFamily: fonts.MontserratMedium,
  },

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
  delete_button_view: {},
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
  label: {
    color: '#344054',
    fontSize: 14,
    fontFamily: fonts.InterMedium,
  },
});
