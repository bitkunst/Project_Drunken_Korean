import React from "react";
import { View, Text, Button } from "react-native";

const GameDescScreen = ({ navigation, route }) => {
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

  const { content } = route.params;
  return (
    <View>
      <Text>{content}</Text>
    </View>
  );
};

export default GameDescScreen;
