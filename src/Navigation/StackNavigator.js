import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import navigationStrings from '../utils/navigationStrings';
import UploadHealthTest from '../screens/addBioMaker/UploadHealthTest';
import ComponentsList from '../screens/ComponentsList';
const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={navigationStrings.UploadHealthTest}
        component={UploadHealthTest}
      />
      <Stack.Screen
        name={navigationStrings.ComponentsList}
        component={ComponentsList}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
