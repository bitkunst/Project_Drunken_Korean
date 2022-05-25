import React from "react";
import { View, Text, Button } from "react-native";
import data from "../../../data/data";

const easyToast = data["Toast"]["easy"];
const words = easyToast[0];

const ToastDescScreen = ({ navigation }) => {
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
      <Text>{words.keyword}</Text>
      <Text>{words.content}</Text>
    </View>
  );
};

export default ToastDescScreen;
