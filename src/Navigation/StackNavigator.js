import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import navigationStrings from '../utils/navigationStrings';
import UploadHealthTest from '../screens/addBioMaker/UploadHealthTest';
import MyHealthRecordList from '../screens/addBioMaker/MyHealthRecordList';
import UploadHealthTestMultiple from '../screens/addBioMaker/UploadHealthTestMultiple';
import DetailedBioMakerEntry from '../screens/addBioMaker/DetailedBioMakerEntry';
import AddBioMakerAll from '../screens/addBioMaker/AddBioMakerAll';
import CategoryDetailed from '../screens/addBioMaker/CategoryDetailed';
import MultipleDetailedBioMakerEntry from '../screens/addBioMaker/MultipleDetailedBioMakerEntry';
import AddBioMakerResult from '../screens/addBioMaker/AddBioMakerResult';
import MainDashboard from '../screens/dashboard/MainDashboard';


const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen
        name={navigationStrings.UploadHealthTest}
        component={UploadHealthTest}
      />
     
      <Stack.Screen
        name={navigationStrings.MyHealthRecordList}
        component={MyHealthRecordList}
      />
      <Stack.Screen
        name={navigationStrings.UploadHealthTestMultiple}
        component={UploadHealthTestMultiple}
      />
      <Stack.Screen
        name={navigationStrings.DetailedBioMakerEntry}
        component={DetailedBioMakerEntry}
      />
      <Stack.Screen
        name={navigationStrings.AddBioMakerAll}
        component={AddBioMakerAll}
      />
      <Stack.Screen
        name={navigationStrings.CategoryDetailed}
        component={CategoryDetailed}
      />
      <Stack.Screen
        name={navigationStrings.MultipleDetailedBioMakerEntry}
        component={MultipleDetailedBioMakerEntry}
      />
      <Stack.Screen
        name={navigationStrings.AddBioMakerResult}
        component={AddBioMakerResult}
      />
      <Stack.Screen
        name={navigationStrings.MainDashboard}
        component={MainDashboard}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
