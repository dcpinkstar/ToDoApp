import React from 'react';
import { View, Text, FlatList } from 'react-native';

const DailyScreen = ({ route }) => {
  const { tasks } = route.params;

  const dailyTasks = tasks.filter((task) => task.frequency === 'Daily');

  return (
    <View>
      <Text>Daily Tasks:</Text>
      <FlatList
        data={dailyTasks}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default DailyScreen;
