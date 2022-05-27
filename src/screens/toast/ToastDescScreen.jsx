import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Pressable,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";
import data from "../../../data/data";
import { randomSrc } from "../../../data/randomSrc";
import { styles } from "../../public/styles";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const toastBg = require("../../../assets/img/toast_desc_bg.png");
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
      {isEasy ? (
        <ImageBackground
          source={require("../../../assets/img/toast_bg.jpeg")}
          style={{ ...styles.container, width, height }}
        >
          <ImageBackground
            source={toastBg}
            style={{
              height: height * 0.8,
              width: width * 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            resizeMode="stretch"
          >
            <Text style={[styles.titleSt]}>{random.keyword}</Text>
            <Text style={[styles.contentSt]}>{random.content}</Text>
            <Pressable
              onPress={() => {
                pickToast(easyToast, randomSrc);
              }}
              style={{
                paddingVertical: height * 0.05,
              }}
            >
              <Text
                style={[
                  styles.contentSt,
                  {
                    borderWidth: 1,
                    borderRadius: 10,
                    backgroundColor: "#e2ce9dcc",
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    paddingVertical: height * 0.01,
                    width: width * 0.4,
                    textAlign: "center",
                    overflow: "hidden",
                  },
                ]}
              >
                다른거 하실?
              </Text>
            </Pressable>
          </ImageBackground>
          <Image
            source={srcRandom.pic}
            style={{
              width: width * 0.6,
              height: height * 0.3,
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
            resizeMode="stretch"
          />
          <View
            style={{
              position: "absolute",
              bottom: height * 0.07,
              left: width * 0.1,
              width: width * 0.4,
              height: height * 0.12,
              borderTopLeftRadius: "35",
              borderBottomLeftRadius: "40",
              borderBottomRightRadius: "5",
              borderTopRightRadius: "40",
              borderStyle: "solid",
              borderWidth: 1,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: 10,
              backgroundColor: "#e6e5e3cc",
            }}
          >
            <Text style={{ ...styles.contentSt, fontSize: width * 0.06 }}>
              {srcRandom.cmmt}
            </Text>
          </View>
        </ImageBackground>
      ) : (
        <View style={styles.container}>
          <Text style={styles.contentSt}>{random.keyword}</Text>
          <Text style={styles.contentSt}>{random.content}</Text>
          <Pressable
            onPress={() => {
              pickToast(hardToast);
            }}
          >
            <Text style={styles.titleSt}>다른거하실?</Text>
          </Pressable>
        </View>
      )}
    </>
  );
};

export default ToastDescScreen;
