import React, { useEffect } from "react";
import {
  ScrollView,
  Text,
  ImageBackground,
  View,
  Dimensions,
  Animated,
} from "react-native";
import { styles } from "../../public/styles";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");
const gameDescBg = require("../../../assets/img/game_desc_bg.png");

const GameDescScreen = ({ navigation, route }) => {
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

  const { content, rule, keyword } = route.params;
  const temp = keyword.replace(/(\s*)/g, "");
  const keyArr = temp.split("");

  const setKeyword = () => {
    return keyArr.map((v, k) => {
      return (
        <Text style={{ fontSize: 30, fontFamily: "Deogon" }} key={k}>
          {v}
        </Text>
      );
    });
  };

  const state = {
    animation: new Animated.Value(0),
  };

  useEffect(() => {
    Animated.timing(state.animation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  const animationStyles = {
    opacity: state.animation,
  };

  return (
    <View>
      <ImageBackground source={gameDescBg} style={{ width, height }}>
        <Animated.View style={animationStyles}>
          <ScrollView>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: height * 0.15,
                  marginLeft: width * 0.1,
                  borderColor: "black",
                  borderWidth: 3,
                  fontFamily: "Deogon",
                  width: width * 0.12,
                }}
              >
                {setKeyword()}
              </View>

              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-end",
                  paddingTop: height * 0.15,
                  marginRight: width * 0.1,
                  width: width * 0.6,
                }}
              >
                <Text
                  style={{
                    fontSize: 30,
                    width: width * 0.5,
                    fontFamily: "Deogon",
                  }}
                >
                  인원수 : 인원수
                </Text>
                <Text
                  style={{
                    fontSize: 26,
                    width: width * 0.5,
                    fontFamily: "Deogon",
                  }}
                >
                  난이도 : ★★★★★
                </Text>
                <Text
                  style={{
                    fontSize: 30,
                    width: width * 0.5,
                    fontFamily: "Deogon",
                  }}
                >
                  유형 : 집갈거야
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: "Deogon",
                  fontSize: 25,
                  marginTop: height * 0.1,
                  marginLeft: width * 0.1,
                  marginRight: width * 0.1,
                }}
              >
                {content}
              </Text>
            </View>
          </ScrollView>
        </Animated.View>
      </ImageBackground>
    </View>
  );
};

export default GameDescScreen;
