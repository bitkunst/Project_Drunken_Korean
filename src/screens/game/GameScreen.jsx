import React from "react";
import { ScrollView, Text, Button } from "react-native";
import Game from "../../components/Game";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const GameScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Entypo
          name="home"
          size={35}
          color="black"
          onPress={() => navigation.navigate("Home")}
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
    <ScrollView>
      <Game navigation={navigation} />
    </ScrollView>
  );
};

export default GameScreen;
