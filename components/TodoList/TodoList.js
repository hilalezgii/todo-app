import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./TodoList.styles";

const TodoList = ({ todos, complatedTodo }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => complatedTodo(item.id)} style={item.complated ? styles.complated : styles.container}>
            <Text style={item.complated ? styles.complatedText : styles.text}>{item.title}</Text>
        </TouchableOpacity>
    );
    const keyExtractor = (item) => item.id;
    return (
        <View>
            <FlatList
                keyExtractor={keyExtractor}
                data={todos}
                renderItem={renderItem}
            />
        </View>
    );
};
export default TodoList;