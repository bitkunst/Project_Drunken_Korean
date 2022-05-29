import { useState } from "react";
import { View, Image, Text, Dimensions, ImageBackground } from "react-native";
import { styles } from "../public/styles";

const { width, height } = Dimensions.get("screen");

const movingLogo = require("../../assets/img/moving_logo.gif");
const movingChar1 = require("../../assets/img/moving_char1.gif");
const movingChar2 = require("../../assets/img/moving_char2.gif");
const movingChar3 = require("../../assets/img/moving_char3.gif");
const movingChar4 = require("../../assets/img/moving_char4.gif");

const Loading = () => {
  return (
    <View
      style={{
        width,
        height,
        alignItems: "center",
        backgroundColor: "#e2cf9d",
      }}
    >
      <Image
        source={movingLogo}
        style={{ flex: 1, width: "80%" }}
        resizeMode="contain"
      />
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <Image
          source={movingChar4}
          resizeMode="contain"
          style={{ width: width * 0.24, height: height * 0.35 }}
        />
        <Image
          source={movingChar2}
          resizeMode="contain"
          style={{ width: width * 0.24, height: height * 0.35 }}
        />
        <Image
          source={movingChar1}
          resizeMode="contain"
          style={{ width: width * 0.24, height: height * 0.35 }}
        />
        <Image
          source={movingChar3}
          resizeMode="contain"
          style={{ width: width * 0.26, height: height * 0.35 }}
        />
      </View>
    </View>
  );
};

export default Loading;
