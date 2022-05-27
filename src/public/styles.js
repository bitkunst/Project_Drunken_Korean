import { StyleSheet, Dimensions, Platform } from "react-native";
const { height, width } = Dimensions.get("screen");
let logoSize;
let logoPosition;
let btnLineHeight;

if (Platform.OS === "android") {
  logoSize = width * 0.7;
  logoPosition = height * 0.05;
  btnLineHeight = height * 0.09;
} else if (Platform.OS === "ios") {
  logoSize = width * 0.7;
  logoPosition = height * 0.08;
  btnLineHeight = height * 0.11;
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1,
  },
  mainLogoSt: {
    zIndex: 3,
    width: logoSize,
    top: logoPosition,
  },
  titleSt: {
    fontFamily: "Deogon",
    fontSize: width * 0.25,
  },
  contentSt: {
    fontFamily: "Eulyoo",
    fontSize: 30,
  },
  gameBtn: {
    zIndex: 100,
    marginBottom: height * 0.001,
    // borderStyle: "dashed",
    // borderWidth: 3,
    // borderRadius: 10,
    width: width * 0.85,
  },
  gameBtnText: {
    fontFamily: "Deogon",
    // height: 85,
    // width: 500,
    textAlign: "center",
    lineHeight: btnLineHeight,
    fontSize: width * 0.1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: height * 0.13,
  },
});

export const homeHeaderOptions = {
  headerShown: false,
};

export const headerOptions = {
  //   headerTransparent: true,
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  title: null,
  headerShadowVisible: false,
  headerBackTitleVisible: false,
  headerTransparent: true,
};
