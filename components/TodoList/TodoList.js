import { View, Text, FlatList } from "react-native";
import { styles } from "./TodoList.styles";

const TodoList = ({ todos }) => {
    const renderItem = ({ item }) => (
        <View style={styles.container}>
            <Text style={styles.text}>{item.title}</Text>
        </View>
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