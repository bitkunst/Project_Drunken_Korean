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
    fontFamily: "Deogon",
    borderStyle: "dashed",
    borderWidth: 2,
    borderRadius: 5,
    // flex: 1,
    height: 70,
    fontSize: 50,
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
