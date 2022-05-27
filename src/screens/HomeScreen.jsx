import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import {
  Text,
  View,
  Button,
  Pressable,
  ImageBackground,
  Dimensions,
  Image,
  Animated,
  Easing,
} from "react-native";
// import { Easing } from "react-native-web";
import { styles } from "../public/styles";

const { width, height } = Dimensions.get("screen");
const mainBg = require("../../assets/img/bg1.jpeg");
const logo = require("../../assets/img/logo.png");

const HomeScreen = ({ navigation }) => {
  const state = { verticalVal: new Animated.Value(0) };

  const animationStyles = {
    transform: [{ translateY: state.verticalVal }],
  };

  useEffect(() => {
    Animated.timing(state.verticalVal, {
      toValue: 20,
      duration: 500,
      useNativeDriver: false,
      easing: Easing.inOut(Easing.quad),
    }).start();
    state.verticalVal.addListener(({ value }) => {
      if (value === 20) {
        Animated.timing(state.verticalVal, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
          easing: Easing.inOut(Easing.quad),
        }).start();
      } else if (value === 0) {
        Animated.timing(state.verticalVal, {
          toValue: 20,
          duration: 500,
          useNativeDriver: false,
          easing: Easing.inOut(Easing.quad),
        }).start();
      }
    });
  }, []);

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
          style={styles.mainLogoSt}
          resizeMode="contain"
          position="absolute"
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
          style={{ zIndex: 3, marginVertical: 30 }}
        >
          <Animated.View style={animationStyles}>
            <Text style={styles.titleSt}>건배사</Text>
          </Animated.View>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Game")}
          style={{ zIndex: 3 }}
        >
          <Animated.View style={animationStyles}>
            <Text style={styles.titleSt}>술게임</Text>
          </Animated.View>
        </Pressable>

        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
