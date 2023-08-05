import React from 'react';
import { View, Text, FlatList } from 'react-native';

const OnceScreen = ({ route }) => {
  const { tasks } = route.params;

  const onceTasks = tasks.filter((task) => task.frequency === 'Once');


  return (
    <View>
      <Text>Once Tasks:</Text>
      <FlatList
        data={onceTasks}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default OnceScreen;
