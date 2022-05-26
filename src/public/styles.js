import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("screen");

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
  titleSt: {
    fontFamily: "Deogon",
    fontSize: 100,
  },
  contentSt: {
    fontFamily: "Eulyoo",
    fontSize: 30,
  },
  gameBtn: {
    zIndex: 100,
    marginBottom: height * 0.02,
    borderStyle: "dashed",
    borderWidth: 3,
    borderRadius: 10,
    width: width * 0.85,
  },
  gameBtnText: {
    fontFamily: "Deogon",
    // height: 85,
    // width: 500,
    textAlign: "center",
    lineHeight: 60,
    fontSize: width * 0.1,
    paddingHorizontal: 10,
    paddingVertical: 10,
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
