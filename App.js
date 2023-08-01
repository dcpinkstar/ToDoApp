import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const TodoListApp = () => {
  const [newTask, setNewTask] = useState(''); // State for the user's input
  const [tasks, setTasks] = useState([]);     // State for the list of tasks

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask(''); // Clear the input field after adding the task
    }
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const renderItem = ({ item }) => (
    <View style={styles.task}>
      <Text style={styles.taskText}>{item.text}</Text>
      <Button title={item.completed ? 'Undo' : 'Done'} onPress={() => toggleTask(item.id)} />
      <Button title="Remove" onPress={() => removeTask(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a task"
        value={newTask}              // Bind the input value to the newTask state
        onChangeText={setNewTask}   // Update the state when the user types
      />
      <Button
        title="Add Task"
        onPress={addTask} // Call the addTask function when the button is pressed
      />
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  taskText: {
    flex: 1,
  },
});

export default TodoListApp;
