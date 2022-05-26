import React, { useState } from "react";
import { View, Text, Button, Pressable } from "react-native";
import data from "../../../data/data";
import { styles } from "../../public/styles";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const easyToast = data["Toast"]["easy"];
const hardToast = data["Toast"]["hard"];

const ToastDescScreen = ({ navigation, route }) => {
  const initialState = {
    keyword: "아래버튼",
    content: "눌러주세요",
  };

  const [random, setRandom] = useState(initialState);

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

  const pickToast = (toastArr) => {
    const idx = Math.floor(Math.random() * toastArr.length);

    const pickedOne = {
      keyword: toastArr[idx].keyword,
      content: toastArr[idx].content,
    };
    setRandom(pickedOne);
  };

  const { isEasy } = route.params;

  return (
    <>
      {isEasy ? (
        <View style={styles.container}>
          <Text style={styles.contentSt}>{random.keyword}</Text>
          <Text style={styles.contentSt}>{random.content}</Text>
          <Pressable
            onPress={() => {
              pickToast(easyToast);
            }}
          >
            <Text style={styles.titleSt}>다음</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.contentSt}>{random.keyword}</Text>
          <Text style={styles.contentSt}>{random.content}</Text>
          <Pressable
            onPress={() => {
              pickToast(hardToast);
            }}
          >
            <Text style={styles.titleSt}>다음</Text>
          </Pressable>
        </View>
      )}
    </>
  );
};

export default ToastDescScreen;
