import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

const MyModal = ({ isVisible, closeModal, handleAddTaskWithFrequency }) => {
  const [frequency, setFrequency] = useState('');

  const handleFrequencySelection = (selectedFrequency) => {
    setFrequency(selectedFrequency);
  };

  const handleConfirm = () => {
    handleAddTaskWithFrequency(frequency);
  };

  return (
    <Modal visible={isVisible} transparent animationType="slide">
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>How often do you want to complete this task?</Text>

          {/* Frequency Options */}
          <TouchableOpacity
            style={[
              styles.modalOption,
              frequency === 'Once' && styles.selectedOption,
            ]}
            onPress={() => handleFrequencySelection('Once')}
          >
            <Text
              style={[
                styles.modalOptionText,
                frequency === 'Once' && styles.selectedOptionText,
              ]}
            >
              Once
              </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.modalOption,
              frequency === 'Daily' && styles.selectedOption,
            ]}
            onPress={() => handleFrequencySelection('Daily')}
            >
            <Text
              style={[
                styles.modalOptionText,
                frequency === 'Daily' && styles.selectedOptionText,
              ]}
            >Daily
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.modalOption,
              frequency === 'Weekly' && styles.selectedOption,
            ]}
            onPress={() => handleFrequencySelection('Weekly')}
          >
            <Text
              style={[
                styles.modalOptionText,
                frequency === 'Weekly' && styles.selectedOptionText,
              ]}
            >
              Weekly
              </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.modalOption,
              frequency === 'Monthly' && styles.selectedOption,
            ]}
            onPress={() => handleFrequencySelection('Monthly')}
          >
            <Text
              style={[
                styles.modalOptionText,
                frequency === 'Monthly' && styles.selectedOptionText,
              ]}
            >Monthly</Text>
          </TouchableOpacity>

          {/* Confirm Button */}
          <TouchableOpacity style={styles.modalButton} onPress={handleConfirm}>
            <Text style={styles.modalButtonText}>Confirm</Text>
          </TouchableOpacity>

          {/* Close Modal Button */}
          <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
            <Text style={styles.modalButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxWidth: 300,
  },
  modalTitle: {
    fontsize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalOption: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  modalOptionText: {
    fontsize: 16,
    textAlign: 'center',
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
  selectedOption: {
    backgroundColor: '#e6e6e6',
  },
  selectedOptionText: {
    fontWeight: 'bold',
  },
});

export default MyModal;
