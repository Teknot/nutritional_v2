import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import KeyIndicatorCard from './KeyIndicatorCard';
import fonts from '../../utils/fonts';

const KeyIndicator = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card_view}>
        <View>
          <Image source={require('../../assets/icons/watch.png')} />
        </View>
        <View>
          <Text style={styles.device_connect_view_text}>Connect to device</Text>
        </View>
      </TouchableOpacity>

      <KeyIndicatorCard
        title={'Blood Pressure'}
        days={'Day 25'}
        centerTitle={'115/75'}
        centerTitleUnit={'mmHg'}
        centerSubTitle={'Optimal'}
        centerTitleColor={'#3D7A6B'}
        date={'10/10/2022'}
        time={'02.00 AM'}
        backgroundColor={'#EEF7F5'}
      />
      <KeyIndicatorCard
        title={'Weight'}
        days={'Day 25'}
        centerTitle={'21'}
        centerSubTitle={'At risk'}
        centerTitleColor={'#B84A64'}
        date={'10/10/2022'}
        time={'02.00 AM'}
        backgroundColor={'#FFEFF2'}
      />
      <KeyIndicatorCard
        title={'Blood Pressure'}
        days={'Day 25'}
        centerTitle={'60'}
        centerTitleUnit={'Kg'}
        centerSubTitle={'At risk'}
        centerTitleColor={'#B84A64'}
        date={'10/10/2022'}
        time={'02.00 AM'}
        backgroundColor={'#FFEFF2'}
      />
      <KeyIndicatorCard
        title={'Total Cholesterol'}
        days={'Day 25'}
        centerTitle={'150'}
        centerTitleUnit={'mg/dL'}
        centerSubTitle={'Optimal'}
        centerTitleColor={'#3D7A6B'}
        date={'10/10/2022'}
        time={'02.00 AM'}
        backgroundColor={'#EEF7F5'}
      />
      <KeyIndicatorCard
        title={'Calcium'}
        days={'Day 25'}
        centerTitle={'8.5'}
        centerTitleUnit={'mg/dL'}
        centerSubTitle={'Optimal'}
        centerTitleColor={'#3D7A6B'}
        date={'10/10/2022'}
        time={'02.00 AM'}
        backgroundColor={'#EEF7F5'}
      />
      <KeyIndicatorCard
        title={'Glucose'}
        days={'Day 25'}
        centerTitle={'101'}
        centerTitleUnit={'mg/dL'}
        centerSubTitle={'Functional borderline'}
        centerTitleColor={'#D28629'}
        date={'10/10/2022'}
        time={'02.00 AM'}
        backgroundColor={'#FFF3E8'}
      />
      <TouchableOpacity style={styles.addBio_card_view}>
        <View>
          <Text style={styles.device_connect_view_text}>
            Add biomarker to dashboard
          </Text>
        </View>
        <View style={styles.addBio_button_view}>
          <Image
            source={require('../../assets/icons/Plus.png')}
            tintColor={'#8D43A4'}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.add_result_button_view}>
        <TouchableOpacity style={styles.add_result_button}
        onPress={onPress}
        >
          <Image source={require('../../assets/icons/Plus.png')} />
          <Text style={styles.add_result_button_text}>Add Result</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default KeyIndicator;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  card_view: {
    height: 198,
    width: 171,
    borderRadius: 16,
    padding: 16,
    marginVertical: 10,
    backgroundColor: '#F9F7F9',
    justifyContent: 'space-between',
  },
  device_connect_view_text: {
    color: '#6A616D',
    fontSize: 16,
    fontFamily: fonts.MontserratSemiBold,
  },
  addBio_card_view: {
    height: 198,
    width: 171,
    borderRadius: 16,
    padding: 16,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addBio_button_view: {
    width: 44,
    height: 44,
    borderRadius: 100,
    backgroundColor: '#F4ECF6',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  add_result_button: {
    backgroundColor: '#8D43A4',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  add_result_button_text: {
    color: '#ffffff',
    marginLeft: 5,
    fontSize: 16,
    fontFamily: fonts.InterMedium,
  },
  add_result_button_view: {
    alignItems: 'center',
    width: '100%',
    marginTop: 35,
  },
});
