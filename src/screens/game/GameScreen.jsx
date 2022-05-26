import React, { useEffect } from "react";
import {
  ScrollView,
  ImageBackground,
  View,
  Dimensions,
  Animated,
} from "react-native";
import Game from "../../components/Game";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const { width, height } = Dimensions.get("screen");

const gameSrcBg = require("../../../assets/img/game_list_bg.png");

const GameScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Entypo
          name="home"
          size={35}
          color="black"
          onPress={() => navigation.popToTop()}
        />
      ),
      headerLeft: () => (
        <Ionicons
          name="arrow-back"
          size={35}
          color="black"
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation]);

  const state = {
    animation: new Animated.Value(width),
  };

  const animationStyles = {
    transform: [{ translateX: state.animation }],
  };

  useEffect(() => {
    Animated.timing(state.animation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View>
      <ImageBackground
        source={gameSrcBg}
        resizeMode="cover"
        style={{
          width,
          height,
        }}
      >
        <View
          style={{
            position: "absolute",
            backgroundColor: "#C48836",
            width,
            height,
            zIndex: 2,
            opacity: 0.25,
          }}
        />
        <ScrollView
          style={{
            position: "relative",
            zIndex: 3,
          }}
        >
          <Animated.View style={animationStyles}>
            <Game navigation={navigation} />
          </Animated.View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default GameScreen;
