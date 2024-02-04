import { View,Text } from "react-native";
import { styles } from "./Header.styles";

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>YAPILACAKLAR</Text>
            <Text style={styles.counter}>{props.todoCount}</Text>
        </View>
    );
};

export default Header;