import React from "react";
import { ScrollView, ImageBackground, View } from "react-native";
import Game from "../../components/Game";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

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

  return (
    <View>
      <ImageBackground
        source={gameSrcBg}
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <View
          style={{
            position: "absolute",
            backgroundColor: "#C48836",
            height: "100%",
            width: "100%",
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
          <Game navigation={navigation} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default GameScreen;
