import { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import InputArea from './components/InputArea';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleDeleteTask = (index) => {
    setTasks((curTasks) => { 
      return curTasks.filter((item, i) => i !== index);
    });
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>To-Do App</Text>

        <InputArea setTasks={setTasks}/>

        <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask} />
      </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  subContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
});

export default App;