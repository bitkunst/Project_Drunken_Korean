import { StatusBar } from "expo-status-bar";
import { Text, View, Button } from "react-native";
import { styles } from "../public/styles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="건배사" onPress={() => navigation.navigate("Toast")} />
      <Button title="술게임" onPress={() => navigation.navigate("Game")} />
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;
