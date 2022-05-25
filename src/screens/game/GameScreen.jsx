import React from "react";
import { View, Text, Button } from "react-native";
import Game from "../../components/Game";

const GameScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate("Home")}
          title="HOME"
          color="#000000"
        />
      ),
    });
  }, [navigation]);
  return (
    <View>
      <Game navigation={navigation} />
    </View>
  );
};

export default GameScreen;
