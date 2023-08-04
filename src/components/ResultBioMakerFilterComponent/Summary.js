import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
const DiagnosticFunction = [
  {id: 1, name: 'Diabetes'},
  {id: 2, name: 'Metabolic health'},
  {id: 3, name: 'Heart health'},
  {id: 4, name: 'Hormonal balance'},
  {id: 5, name: 'Longevity'},
];

const rangeData = [
  {
    id: 1,
    range: 'Very high',
    functional_ranges: '105-130',
    standard_ranges: '131-150',
  },
  {
    id: 2,
    range: 'High',
    functional_ranges: '91-120',
    standard_ranges: '100-130',
  },
  {
    id: 3,
    range: 'Optimal',
    functional_ranges: '75-90',
    standard_ranges: '65-99',
  },
  {id: 4, range: 'Low', functional_ranges: '60-74', standard_ranges: '50-64'},
  {
    id: 5,
    range: 'Very low',
    functional_ranges: '40-59',
    standard_ranges: '40-49',
  },
];
const Summary = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content_view}>
        <View style={styles.add_result_view}>
          <Text style={styles.add_result_text}>
            Enter your test to improve your health
          </Text>
          <TouchableOpacity style={styles.add_result_button}>
            <Image source={require('../../assets/icons/Plus.png')} />
            <Text style={styles.add_result_button_text}>Add Result</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.upper_card_view}>
          <View style={styles.upper_card}>
            <View style={styles.upper_card_inner_view}>
              <Text style={styles.upper_card_inner_text}>
                Manage your health to get to optimal ranges
              </Text>
              <Text style={{marginTop: 10, color: '#24483F'}}>
                5 suggested activities
              </Text>
            </View>
            <View style={styles.arrow_button}>
              <Image source={require('../../assets/icons/ArrowRight.png')} />
            </View>
          </View>
          <View style={styles.upper_progress_card}>
            <View style={styles.progress_view}>
              <AnimatedCircularProgress
                size={140}
                width={13}
                fill={70}
                tintColor="#56AC96"
                backgroundColor="#56ac9765"
                arcSweepAngle={180}
                rotation={270}
              />
            </View>
            <View style={styles.progress_text_view}>
              <Text style={styles.progress_upper_text}>70%</Text>
            </View>
            <View style={styles.progress_bottom_text_view}>
              <Text style={styles.progress_bottom_text}>
                Health score relevance
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.bottom_subContent_view}>
          <View style={styles.learn_more_view}>
            <Text style={styles.learn_more_heading}>About Insulin</Text>
            <TouchableOpacity>
              <Text style={styles.learn_more_button_text}>Learn more</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.learn_more_paragraph_view}>
            <Text numberOfLines={6} style={styles.learn_more_paragraph}>
              Insulin is a hormone created by your pancreas that controls the
              amount of glucose in your bloodstream at any given moment. It also
              helps store glucose in your liver, fat, and muscles. Finally, it
              regulates your body’s metabolism of carbohydrates, fats, and
              proteins.
            </Text>
          </View>
          <View style={styles.diagnostic_function_view}>
            <Text style={styles.diagnostic_heading}>Diagnostic function</Text>
            <View style={styles.function_item_view}>
              {DiagnosticFunction.map(item => (
                <View style={styles.function_item} key={item.id}>
                  <Text>{item.name}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.range_view}>
            <Text style={styles.range_heading}>Ranges</Text>
            <View style={styles.range_table_view}>
              <Text style={{width: 103, color: '#292724', fontSize: 12}}>
                Ranges
              </Text>
              <Text style={{width: 103, color: '#292724', fontSize: 12}}>
                Functional ranges (mg/dL)
              </Text>
              <Text style={{width: 103, color: '#292724', fontSize: 12}}>
                Standard ranges (mg/dL)
              </Text>
            </View>
            {rangeData.map(item => (
              <View
                style={
                  item.id % 2 === 0
                    ? styles.range_item_figure
                    : [styles.range_item_figure, {backgroundColor: '#F7F8FA'}]
                }
                key={item.id}>
                <Text style={{width: 103, color: '#22212A', fontSize: 14}}>
                  {item.range}
                </Text>
                <Text style={{width: 103, color: '#22212A', fontSize: 14}}>
                  {item.functional_ranges}
                </Text>
                <Text style={{width: 103, color: '#22212A', fontSize: 14}}>
                  {item.standard_ranges}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Summary;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 220,
  },
  content_view: {
    alignItems: 'center',
  },
  add_result_view: {
    width: 358,
    height: 77,
    backgroundColor: '#EBE7ED',
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 24,
  },

  add_result_text: {
    fontSize: 16,
    marginTop: 15,
  },
  add_result_button: {
    backgroundColor: '#8D43A4',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 100,
    flexDirection: 'row',
    position: 'absolute',
    bottom: -20,
  },
  add_result_button_text: {
    color: '#ffffff',
    marginLeft: 8,
  },
  upper_card: {
    width: 171,
    height: 163,
    borderRadius: 16,
    backgroundColor: '#EEF7F5',
  },
  upper_progress_card: {
    width: 171,
    height: 163,
    borderRadius: 16,
    backgroundColor: '#F4ECF6',
  },
  upper_card_view: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 358,
  },
  upper_card_inner_view: {
    width: 139,
    height: 83,
    margin: 16,
  },
  upper_card_inner_text: {
    color: '#24483F',
    fontSize: 14,
  },
  arrow_button: {
    width: 32,
    height: 32,
    borderRadius: 24,
    backgroundColor: '#CBE5DE',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  progress_view: {
    width: 139,
    height: 77,
    margin: 16,
  },
  progress_text_view: {
    position: 'absolute',
    bottom: 75,
    left: 65,
  },
  progress_bottom_text_view: {
    width: 139,
    height: 36,
    marginLeft: 20,
    marginTop: -10,
  },
  progress_bottom_text: {
    color: '#8D43A4',
    fontSize: 14,
    textAlign: 'center',
  },
  progress_upper_text: {
    color: '#8D43A4',
    fontSize: 24,
    fontWeight: 'bold',
  },
  learn_more_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 358,
    alignItems: 'flex-end',
    paddingHorizontal: 16,
  },
  learn_more_heading: {
    color: '#2b2b2b',
    fontSize: 18,
  },
  learn_more_button_text: {
    color: '#8D43A4',
    fontSize: 14,
  },
  bottom_subContent_view: {
    marginTop: 20,
  },
  learn_more_paragraph: {
    color: '#2b2b2b',
    fontSize: 16,
  },
  learn_more_paragraph_view: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  function_item: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 100,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    margin: 8,
  },
  function_item_view: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  diagnostic_function_view: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  range_table_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 16,
  },
  range_view: {
    // paddingHorizontal:16,
    marginTop: 20,
  },
  range_item_figure: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  range_heading: {
    paddingHorizontal: 16,
    fontSize: 18,
    color: '#2b2b2b',
  },
  diagnostic_heading: {
    fontSize: 18,
    color: '#2b2b2b',
  },
});
