import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import fonts from '../../utils/fonts';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import LinearGradient from 'react-native-linear-gradient';
const DashboardHeader = () => {
  return (
    <LinearGradient
      colors={['#8D43A4', '#552862']}
      style={styles.container}
      angle={180}>
      <StatusBar
        animated={true}
        backgroundColor={'#8D43A4'}
        barStyle={'light-content'}
      />
      <View style={styles.main_title_view}>
        <Text style={styles.main_title}>My Dashboard</Text>
      </View>
      <View style={styles.itemCard_view}>
        <View style={[styles.itemCard, {backgroundColor: '#EEF7F5'}]}>
          <Text style={styles.itemCard_title}>Health Score</Text>
          <View style={styles.progress_view}>
            <AnimatedCircularProgress
              size={140}
              width={13}
              fill={75}
              tintColor="#3D7A6B"
              backgroundColor="#CBE5DE"
              rotation={360}
              lineCap={'round'}>
              {fill => (
                <>
                  <Text style={[styles.circle_inner_value, {color: '#3D7A6B'}]}>
                    {fill.toFixed(0)} / 100
                  </Text>
                  <Text
                    style={[styles.circle_inner_status, {color: '#4E9D89'}]}>
                    Optimal
                  </Text>
                </>
              )}
            </AnimatedCircularProgress>
          </View>
        </View>
        <View style={[styles.itemCard, {backgroundColor: '#FFEFF2'}]}>
          <Text style={styles.itemCard_title}>Fertility score</Text>
          <View style={styles.progress_view}>
            <AnimatedCircularProgress
              size={140}
              width={13}
              fill={35}
              tintColor="#B84A64"
              backgroundColor="#FDD4DD"
              rotation={360}
              lineCap={'round'}>
              {fill => (
                <>
                  <Text style={[styles.circle_inner_value, {color: '#D86C7F'}]}>
                    {fill.toFixed(0)} / 100
                  </Text>
                  <Text
                    style={[styles.circle_inner_status, {color: '#F0788D'}]}>
                    Low
                  </Text>
                </>
              )}
            </AnimatedCircularProgress>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default DashboardHeader;

const styles = StyleSheet.create({
  container: {
    height: 310,
    width: '100%',
    backgroundColor: 'yellow',
  },
  itemCard: {
    height: 209,
    width: 171,
    borderRadius: 16,
    backgroundColor: 'red',
    padding: 16,
  },
  main_title: {
    fontSize: 24,
    color: '#ffffff',
    fontFamily: fonts.MontserratBold,
  },
  main_title_view: {
    padding: 16,
  },
  itemCard_view: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemCard_title: {
    color: '#292724',
    fontSize: 18,
    fontFamily: fonts.MontserratSemiBold,
  },
  progress_view: {
    marginTop: 16,
  },
  circle_inner_value: {
    fontFamily: fonts.MontserratSemiBold,
    fontSize: 12,
  },
  circle_inner_status: {
    fontSize: 16,
    fontFamily: fonts.MontserratSemiBold,
  },
});
