import React, { useState } from 'react';
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

const Navigation = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home">
          {(props) => <HomeScreen {...props} tasks={tasks} setTasks={setTasks} />}
        </Drawer.Screen>
        <Drawer.Screen name="Once" component={OnceScreen} initialParams={{ tasks }} />
        <Drawer.Screen name="Daily" component={DailyScreen} initialParams={{ tasks }} />
        <Drawer.Screen name="Weekly" component={WeeklyScreen} initialParams={{ tasks }} />
        <Drawer.Screen name="Monthly" component={MonthlyScreen} initialParams={{ tasks }} />
        {/* Add more screens as needed */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
