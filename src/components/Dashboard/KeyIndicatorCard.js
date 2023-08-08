import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import fonts from '../../utils/fonts';
const KeyIndicatorCard = ({
  title,
  days,
  centerTitle,
  centerTitleUnit,
  centerSubTitle,
  date,
  time,
  backgroundColor,
  centerTitleColor,
}) => {
  return (
    <View style={[styles.card_view, {backgroundColor: backgroundColor}]}>
      <View>
        <Text style={styles.card_upper_view_title}>{title}</Text>
        <Text style={styles.card_upper_view_text}>{days}</Text>
      </View>
      <View style={styles.card_center_view}>
        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
          <Text
            style={[styles.card_center_view_title, {color: centerTitleColor}]}>
            {centerTitle}
          </Text>
          <Text
            style={[
              styles.card_center_view_subTitle,
              {color: centerTitleColor},
            ]}>
            {centerTitleUnit}
          </Text>
        </View>
        <Text style={[styles.card_center_view_text, {color: centerTitleColor}]}>
          {centerSubTitle}
        </Text>
      </View>
      <View style={styles.card_bottom_view}>
        <View>
          <Text style={styles.card_bottom_view_text}>{date}</Text>
          <Text style={styles.card_bottom_view_text}>{time}</Text>
        </View>
        <View>
          <Image source={require('../../assets/images/Chart.png')} />
        </View>
      </View>
    </View>
  );
};

export default KeyIndicatorCard;

const styles = StyleSheet.create({
  card_view: {
    height: 198,
    width: 171,
    borderRadius: 16,
    padding: 16,
    marginVertical: 10,
    paddingBottom: 16,
  },
  card_center_view: {
    marginTop: 16,
  },
  card_upper_view_title: {
    fontSize: 16,
    fontFamily: fonts.MontserratSemiBold,
    color: '#292724',
  },
  card_upper_view_text: {
    fontSize: 13,
    color: '#292724',
    fontFamily: fonts.MontserratMedium,
  },
  card_center_view_title: {
    fontSize: 24,
    fontFamily: fonts.MontserratBold,
  },
  card_center_view_subTitle: {
    fontSize: 14,
    fontFamily: fonts.MontserratMedium,
    marginLeft: 3,
  },
  card_center_view_text: {
    fontSize: 14,
    fontFamily: fonts.MontserratSemiBold,
    height: 45,
  },
  card_bottom_view_text: {
    fontSize: 13,
    fontFamily: fonts.MontserratRegular,
  },
  card_bottom_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});
