import React from 'react';
import { View, Text, FlatList } from 'react-native';

const WeeklyScreen = ({ route }) => {
  const { tasks } = route.params;

  const weeklyTasks = tasks.filter((task) => task.frequency === 'Weekly');

  return (
    <View>
      <Text>Weekly Tasks</Text>
      <FlatList
        data={weeklyTasks}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default WeeklyScreen;
