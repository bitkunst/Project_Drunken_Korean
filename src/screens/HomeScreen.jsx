import { StatusBar } from "expo-status-bar";
import { Text, View, Button, Pressable, ImageBackground } from "react-native";
import { styles } from "../public/styles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/img/bg1.jpeg")}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <View
          style={{
            backgroundColor: "grey",
            width: "100%",
            height: "100%",
            position: "absolute",
            opacity: 0.5,
            zIndex: 2,
          }}
        ></View>
        <Text>술자리의 민족</Text>
        <Text>-조선주막사-</Text>
        <Pressable
          onPress={() => navigation.navigate("Toast")}
          style={{ zIndex: 3 }}
        >
          <Text style={styles.titleSt}>건배사</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Game")}
          style={{ zIndex: 3 }}
        >
          <Text style={styles.titleSt}>술게임</Text>
        </Pressable>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
