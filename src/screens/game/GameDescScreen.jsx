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
const gameDescTitleBg = require("../../../assets/img/game_desc_title.png");

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
        <Text
          style={{
            fontSize: 40,
            fontFamily: "Deogon",
            marginLeft: width * 0.027,
          }}
          key={k}
        >
          {v}
        </Text>
      );
    });
  };

  const setContent = () => {
    return content.map((v,k)=>{
      return (
        <Text key={k} style={{
          fontFamily: "Deogon",
          fontSize: 30,
          textAlign:"left",
          marginTop: height * 0.1,
          marginLeft: width * 0.1,
          marginRight: width * 0.1,
          marginBottom: height * 0.1,
        }}>
          {v}
        </Text>
      )
    })
  }

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
                  // borderColor: "black",
                  // borderWidth: 3,
                  fontFamily: "Deogon",
                  width: width * 0.12,
                }}
              >
                <ImageBackground
                  source={gameDescTitleBg}
                  style={{
                    // marginTop: height * 0.15,
                    // marginLeft: width * 0.1,
                    paddingVertical: 40,
                    paddingHorizontal: 15,
                    boxSizing: "border-box",
                    width: width * 0.2,
                  }}
                  resizeMode="stretch"
                >
                  {setKeyword()}
                </ImageBackground>
              </View>

              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  paddingTop: height * 0.15,
                  marginRight: width * 0.08,
                  width: width * 0.6,
                }}
              >
                <Text
                  style={{
                    fontSize: width * 0.06,
                    width: width * 0.5,
                    fontFamily: "Deogon",
                  }}
                >
                  {rule.howMany}
                </Text>
                <Text
                  style={{
                    fontSize: width * 0.08,
                    width: width * 0.5,
                    fontFamily: "Deogon",
                  }}
                >
                  {rule.level}
                </Text>
                <Text
                  style={{
                    fontSize: width * 0.06,
                    width: width * 0.5,
                    fontFamily: "Deogon",
                  }}
                >
                  {rule.class}
                </Text>
              </View>
            </View>
            <View>
              {setContent()}
            </View>
          </ScrollView>
        </Animated.View>
      </ImageBackground>
    </View>
  );
};

export default GameDescScreen;
