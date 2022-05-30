import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Pressable,
  ImageBackground,
  Dimensions,
  Image,
  TouchableHighlight,
} from "react-native";
import data from "../../../data/data";
import { randomSrc } from "../../../data/randomSrc";
import { styles } from "../../public/styles";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const toastBg = require("../../../assets/img/toast_bg.jpeg");
const toastDescBg = require("../../../assets/img/toast_desc_bg.png");
const sejong = require("../../../assets/img/sejong.png");

const easyToast = data["Toast"]["easy"];
const hardToast = data["Toast"]["hard"];

const { width, height } = Dimensions.get("screen");

const ToastDescScreen = ({ navigation, route }) => {
  const initialState = {
    keyword: "아래버튼",
    content: "눌러주세요",
  };

  const initialCmmt = {
    pic: sejong,
    cmmt: "눌러보거라",
  };

  const [random, setRandom] = useState(initialState);
  const [srcRandom, setSrcRandom] = useState(initialCmmt);

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

  const pickToast = (toastArr, randomSrcArr) => {
    const idx = Math.floor(Math.random() * toastArr.length);
    const srcIdx = Math.floor(Math.random() * randomSrcArr.length);

    const pickedOne = {
      keyword: toastArr[idx].keyword,
      content: toastArr[idx].content,
    };

    const pickedSrc = randomSrcArr[srcIdx];

    setRandom(pickedOne);
    setSrcRandom(pickedSrc);
  };

  const { isEasy } = route.params;

  return (
    <>
      <ImageBackground
        source={toastBg}
        style={{
          alignItems: "center",
          paddingTop: height * 0.08,
          width,
          height,
        }}
      >
        <ImageBackground
          source={toastDescBg}
          style={styles.toastDescBg}
          resizeMode="stretch"
        >
          <Text style={styles.toastDescTxt}>{random.keyword}</Text>
          <Text style={styles.toastDescCont}>{random.content}</Text>
          {isEasy ? (
            <Pressable
              onPress={() => {
                pickToast(easyToast, randomSrc);
              }}
              style={{
                paddingTop: height * 0.05,
                paddingBottom: height * 0.08,
              }}
            >
              <Text style={styles.toastNextBtn}>다른거 하쉴?</Text>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                pickToast(hardToast, randomSrc);
              }}
              style={{
                paddingTop: height * 0.05,
                paddingBottom: height * 0.08,
              }}
            >
              <Text style={styles.toastNextBtn}>다른거 하쉴?</Text>
            </Pressable>
          )}
        </ImageBackground>
        <Image
          source={srcRandom.pic}
          style={styles.srcRandomPic}
          resizeMode="contain"
        />
        <View style={styles.srcRandomCmmtWrap}>
          <Text style={styles.srcRandomCmmt}>{srcRandom.cmmt}</Text>
        </View>
      </ImageBackground>
    </>
  );
};

export default ToastDescScreen;
