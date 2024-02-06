import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';
import CreateTodo from './components/CreateTodo';


export default function App() {
  const [todos, setTodos] = useState([])
  const [activeTodosCount,setActiveTodosCount] = useState(0)

  const createTodo = (title) => {
    setTodos([...todos, {
      title,
      id: todos.length + 1,
      complated: false,
    }])
  };


  const complatedTodo = (id) => {
    const findedTodo = todos.find(todo => todo.id == id)
    const filteredTodo = todos.filter(todo => todo.id != id)
    if (filteredTodo.length > 0) {
      setTodos([...filteredTodo, { ...findedTodo, complated: true }])
    }
    else {
      setTodos([{ ...findedTodo, complated: true }])
    }
  };

  useEffect(() => {
    const findActiveTodosCount = todos?.filter(todo => todo.complated == false )?.length || 0;
    setActiveTodosCount(findActiveTodosCount); 
  }, [todos])

  return (
    <View style={styles.container}>
      <View>
        <Header todoCount={activeTodosCount} />
        <TodoList complatedTodo={complatedTodo} todos={todos} />
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
