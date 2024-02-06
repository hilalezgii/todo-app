import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./CreateTodo.styles";
import { useState } from "react";

const CreateTodo = ({createTodo}) => {
    const [text,setText] = useState('');
    const onCreateTodo = () => {
        if (text.length<=0) return ;
        createTodo(text)
        setText('')
    };
    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
            value={text}
            onChangeText={newText => setText(newText)}

            placeholder="Yapılacak..."
            />
            <TouchableOpacity onPress={onCreateTodo} style={styles.button}>
                <Text style={styles.button_text}>KAYDET</Text>
            </TouchableOpacity>
        </View>
    );
};
export default CreateTodo;