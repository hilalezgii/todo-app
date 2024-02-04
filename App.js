import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { useState } from 'react';
import CreateTodo from './components/CreateTodo';


export default function App() {
  const [todos, setTodos] = useState([])

  const createTodo = (title) => {
    setTodos([...todos, {
      title,
      id: todos.length + 1,
    }])
  };
  return (
    <View style={styles.container}>
      <View>
        <Header todoCount={todos.length} />
        <TodoList todos={todos} />
      </View>
      <CreateTodo createTodo={createTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f4f4f',
    padding: 10,
    paddingTop: 25,
    justifyContent: 'space-between'
  },
});
