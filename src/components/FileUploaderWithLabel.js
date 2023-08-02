import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FileUploaderWithLabel = () => {
  return (
    <View style={styles.container}>
      <Text>FileUploaderWithLabel</Text>
    </View>
  );
};

export default FileUploaderWithLabel;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D0D5DD',
    width: 390,
    height: 390,
  },
});
