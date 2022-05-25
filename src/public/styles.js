import { StyleSheet, Button, Alert } from "react-native";
import * as Font from "expo-font";

export const getFont = async () => {
  await Font.loadAsync({
    title: require("./font/DeogonPrincessClassic.otf"),
  });
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "title",
  },
});

export const headerOptions = {
  headerShown: false,
};
