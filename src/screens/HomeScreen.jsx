import { StatusBar } from "expo-status-bar";
import { Text, View, Button, Pressable } from "react-native";
import { styles } from "../public/styles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("Toast")}>
        <Text style={styles.titleSt}>건배사</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Game")}>
        <Text style={styles.titleSt}>술게임</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;
