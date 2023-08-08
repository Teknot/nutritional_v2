import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useRef} from 'react';
import DashboardHeader from '../../components/Dashboard/DashboardHeader';
import fonts from '../../utils/fonts';
import KeyIndicator from '../../components/Dashboard/KeyIndicator';
import RBSheet from 'react-native-raw-bottom-sheet';
const MainDashboard = () => {
  const [filterState, setFilterState] = useState('Key indicator');
  const refRBSheet = useRef();
  const handelBottomSheet = () => {
    refRBSheet.current.open();
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        <DashboardHeader />
        <View style={styles.upper_banner_view}>
          <View style={styles.info_container}>
            <View style={styles.info_view}>
              <Image
                source={require('../../assets/icons/Info.png')}
                tintColor={'#B06912'}
              />
            </View>
            <View style={styles.banner_text_view}>
              <Text style={styles.banner_text}>
                You haven't done any health test in a long time. Please retake
                or take another test to improve health accuracy.
              </Text>
            </View>
          </View>
          <View style={styles.upper_button_container}>
            <TouchableOpacity style={styles.upper_button}>
              <View style={styles.upper_button_icon_view}>
                <Image source={require('../../assets/icons/AllTest.png')} />
              </View>
              <View style={{marginLeft: 16}}>
                <Text style={styles.upper_button_text}>All Test</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.upper_button, {backgroundColor: '#FBFDDF'}]}>
              <View
                style={[
                  styles.upper_button_icon_view,
                  {backgroundColor: '#E8ECAD'},
                ]}>
                <Image source={require('../../assets/icons/wave.png')} />
              </View>
              <View style={{marginLeft: 16}}>
                <Text style={[styles.upper_button_text, {color: '#707715'}]}>
                  Panels & Records
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            height: 60,
          }}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filter_btn_view}
            horizontal={true}>
            <TouchableOpacity
              style={
                filterState === 'Key indicator'
                  ? [styles.filter_btn, {backgroundColor: '#8D43A4'}]
                  : styles.filter_btn
              }
              onPress={() => {
                setFilterState('Key indicator');
              }}>
              <Text
                style={
                  filterState === 'Key indicator'
                    ? (styles.filter_btn_text, {color: '#ffffff'})
                    : styles.filter_btn_text
                }>
                Key indicator
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                filterState === 'Health indicators'
                  ? [styles.filter_btn, {backgroundColor: '#8D43A4'}]
                  : styles.filter_btn
              }
              onPress={() => {
                setFilterState('Health indicators');
              }}>
              <Text
                style={
                  filterState === 'Health indicators'
                    ? (styles.filter_btn_text, {color: '#ffffff'})
                    : styles.filter_btn_text
                }>
                Health indicators
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                filterState === 'Articles for you'
                  ? [styles.filter_btn, {backgroundColor: '#8D43A4'}]
                  : styles.filter_btn
              }
              onPress={() => {
                setFilterState('Articles for you');
              }}>
              <Text
                style={
                  filterState === 'Articles for you'
                    ? (styles.filter_btn_text, {color: '#ffffff'})
                    : styles.filter_btn_text
                }>
                Articles for you
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                filterState === 'Health Library'
                  ? [styles.filter_btn, {backgroundColor: '#8D43A4'}]
                  : styles.filter_btn
              }
              onPress={() => {
                setFilterState('Health Library');
              }}>
              <Text
                style={
                  filterState === 'Health Library'
                    ? (styles.filter_btn_text, {color: '#ffffff'})
                    : styles.filter_btn_text
                }>
                Health Library
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View>
          {filterState === 'Key indicator' ? (
            <KeyIndicator onPress={handelBottomSheet} />
          ) : filterState === 'Health indicators' ? (
            <Text>Health indicators</Text>
          ) : filterState === 'Articles for you' ? (
            <Text>Articles for you</Text>
          ) : filterState === 'Health Library' ? (
            <Text>Health Library</Text>
          ) : null}
        </View>
      </ScrollView>
      <RBSheet
        ref={refRBSheet}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: '#00000069',
          },
          container: {
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <View style={{paddingHorizontal: 16}}>
          <View style={styles.bottom_sheet_upper_view}>
            <Text style={styles.bottom_sheet_upper_view_text}>
              Add lab test result
            </Text>
            <TouchableOpacity
              onPress={() => {
                refRBSheet.current.close();
              }}>
              <Image source={require('../../assets/icons/X.png')} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.bottom_sheet_button}>
            <View style={styles.bottom_sheet_button_view}>
              <Image
                source={require('../../assets/icons/ListPlus.png')}
                tintColor={'#8D43A4'}
              />
            </View>
            <View style={{marginLeft: 16}}>
              <Text style={styles.bottom_sheet_button_title}>Add manually</Text>
              <Text style={styles.bottom_sheet_button_text}>
                Add your biomarker test result manually.
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottom_sheet_button}>
            <View style={styles.bottom_sheet_button_view}>
              <Image
                source={require('../../assets/icons/AllTest.png')}
                tintColor={'#8D43A4'}
              />
            </View>
            <View style={{marginLeft: 16}}>
              <Text style={styles.bottom_sheet_button_title}>
                Import lab test result
              </Text>
              <Text style={styles.bottom_sheet_button_text}>
                Import test result files or images.
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </SafeAreaView>
  );
};

export default MainDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  upper_banner_view: {
    alignItems: 'center',
    marginTop: 16,
  },
  info_container: {
    width: 358,
    height: 80,
    backgroundColor: '#FFE4C4',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  info_view: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#FED9AB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner_text: {
    color: '#B06912',
    fontSize: 14,
    fontFamily: fonts.MontserratMedium,
  },
  banner_text_view: {
    marginLeft: 12,
    width: 290,
  },
  upper_button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF6FB',
    borderRadius: 16,
    width: 171,
    paddingHorizontal: 16,
    paddingVertical: 10,
    elevation: 0.4,
  },
  upper_button_text: {
    fontFamily: fonts.MontserratSemiBold,
    fontSize: 14,
  },
  upper_button_icon_view: {
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: '#CDE5F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  upper_button_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 358,
    marginVertical: 8,
  },

  // filter btn

  filter_btn_view: {
    height: 55,
    paddingVertical: 10,
  },
  filter_btn: {
    backgroundColor: '#F7F8FA',
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: 24,
    marginHorizontal: 5,
  },
  filter_btn_text: {
    fontSize: 16,
    fontFamily: fonts.MontserratMedium,
  },
  bottom_sheet_upper_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  bottom_sheet_upper_view_text: {
    color: '#292724',
    fontSize: 20,
    fontFamily: fonts.MontserratSemiBold,
  },
  bottom_sheet_button: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E4E7EC',
    borderRadius: 12,
    padding: 16,
    width: 358,
    marginVertical: 10,
  },
  bottom_sheet_button_title: {
    color: '#292724',
    fontSize: 14,
    fontFamily: fonts.MontserratSemiBold,
  },
  bottom_sheet_button_text: {
    color: '#667085',
    fontSize: 14,
    fontFamily: fonts.InterRegular,
    marginTop: 5,
  },
  bottom_sheet_button_view: {
    width: 44,
    height: 44,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4ECF6',
  },
});
