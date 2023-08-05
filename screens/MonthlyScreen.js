import React from 'react';
import { View, Text, FlatList } from 'react-native';

const MonthlyScreen = ({ route }) => {
  const { tasks } = route.params;

  const monthlyTasks = tasks.filter((task) => task.frequency === 'Monthly');

  return (
    <View>
      <Text>Monthly Tasks</Text>
      <FlatList
        data={monthlyTasks}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MonthlyScreen;
