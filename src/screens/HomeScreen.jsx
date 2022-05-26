import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Button,
  Pressable,
  ImageBackground,
  Dimensions,
} from "react-native";
import { styles } from "../public/styles";

const { width, height } = Dimensions.get("screen");
const mainBg = require("../../assets/img/bg1.jpeg");

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={mainBg}
        style={{
          width,
          height,
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
            width,
            height,
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
