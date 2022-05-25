import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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

export const headerOptions = {
  headerShown: false,
};
