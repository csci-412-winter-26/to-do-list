import { View, TextInput, StyleSheet, Text, Pressable } from 'react-native';
import { PropTypes } from 'prop-types';
import { useState } from 'react';

const InputArea = ({ setTasks }) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks((curTasks) => {
        return [...curTasks, task];
      });
      setTask('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setTask(text)}
        value={task}
        placeholder='Enter task'
      />
      <Pressable
        style={styles.addButton}
        onPress={handleAddTask}
        testID='buttonAdd'
      >
        <Text style={styles.addButtonText}>Add</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '80%',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

InputArea.propTypes = {
  setTasks: PropTypes.func,
};

export default InputArea;
