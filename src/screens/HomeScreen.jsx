import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Button,
  Pressable,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";
import { styles } from "../public/styles";

const { width, height } = Dimensions.get("screen");
const mainBg = require("../../assets/img/bg1.jpeg");
const logo = require("../../assets/img/logo.png");
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
        <Image
          source={logo}
          style={{ zIndex: 3, width: width * 0.7 }}
          resizeMode="contain"
        />
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
