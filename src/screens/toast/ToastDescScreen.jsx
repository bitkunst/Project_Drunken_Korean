import React from "react";
import { View, Text, Button } from "react-native";
import data from "../../../data/data";
import { styles } from "../../public/styles";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const easyToast = data["Toast"]["easy"];
const words = easyToast[0];

const ToastDescScreen = ({ navigation }) => {
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
      <Text style={styles.contentSt}>{words.keyword}</Text>
      <Text style={styles.contentSt}>{words.content}</Text>
    </View>
  );
};

export default ToastDescScreen;
