import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal } from 'react-native';

import MyModal from '../Modal/MyModal';

const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { title: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Do List</Text>

      {/* Task Input */}
      <View style={styles.taskInputContainer}>
        <TextInput
          style={styles.taskInput}
          placeholder="Add a new task"
          value={newTask}
          onChangeText={setNewTask}
          onSubmitEditing={handleAddTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* List of Tasks */}
      {tasks.map((task, index) => (
        <View key={index} style={styles.taskContainer}>
          <TouchableOpacity
            onPress={() => handleToggleComplete(index)}
            style={[styles.task, task.completed && styles.completedTask]}
          >
            <Text style={[styles.taskText, task.completed && styles.completedTaskText]}>
              {task.title}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDeleteTask(index)}>
            <Text style={styles.deleteButton}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}

      {/* Open Modal Button */}
      <TouchableOpacity style={styles.modalButton} onPress={openModal}>
        <Text style={styles.modalButtonText}>Open Modal</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal visible={isModalVisible} transparent>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Task Frequency</Text>
            <TouchableOpacity style={styles.modalOption} onPress={() => closeModal()}>
              <Text>Daily</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOption} onPress={() => closeModal()}>
              <Text>Weekly</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOption} onPress={() => closeModal()}>
              <Text>Monthly</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  taskInputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  taskInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  task: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  taskText: {
    fontSize: 16,
  },
  completedTask: {
    backgroundColor: 'lightgreen',
    borderColor: 'green',
  },
  completedTaskText: {
    textDecorationLine: 'line-through',
  },
  deleteButton: {
    color: 'red',
    marginLeft: 10,
  },
  modalButton: {
    paddingVertical: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    marginTop: 20,
  },
  modalButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalOption: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});

export default HomeScreen;
