import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './HomeScreen';
import OnceScreen from './OnceScreen';
import DailyScreen from './DailyScreen';
import WeeklyScreen from './WeeklyScreen';
import MonthlyScreen from './MonthlyScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const FrequencyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Once' component={OnceScreen} />
      <Stack.Screen name='Daily' component={DailyScreen} />
      <Stack.Screen name='Weekly' component={WeeklyScreen} />
      <Stack.Screen name='Monthly' component={MonthlyScreen} />
    </Stack.Navigator>
  )
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        {/* Add more screens as needed */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
