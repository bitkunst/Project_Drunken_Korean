import React from "react";
import { ScrollView, Text, Button } from "react-native";
import { styles } from "../../public/styles";
import { Entypo } from "@expo/vector-icons";

const GameDescScreen = ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Entypo
          name="home"
          size={40}
          color="black"
          onPress={() => navigation.navigate("Home")}
        />
      ),
    });
  }, [navigation]);

  const { content } = route.params;
  return (
    <ScrollView>
      <Text style={styles.contentSt}>{content}</Text>
    </ScrollView>
  );
};

export default GameDescScreen;
