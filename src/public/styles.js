import { StyleSheet, Dimensions, Platform } from "react-native";
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
  mainLogoSt: {
    zIndex: 3,
    ...Platform.select({
      ios: {
        width: width * 0.7,
        top: height * 0.08,
      },
      android: {
        width: width * 0.7,
        top: height * 0.05,
      },
    }),
  },
  titleSt: {
    fontFamily: "Deogon",
    fontSize: width * 0.25,
  },
  contentSt: {
    fontFamily: "Deogon",
    fontSize: 30,
  },
  gameBtn: {
    zIndex: 100,
    marginBottom: height * 0.001,
    width: width * 0.85,
  },
  gameBtnText: {
    fontFamily: "Deogon",
    textAlign: "center",
    ...Platform.select({
      ios: {
        lineHeight: height * 0.11,
      },
      android: {
        lineHeight: height * 0.09,
      },
    }),
    fontSize: width * 0.1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: height * 0.13,
  },
  toastDescBg: {
    height: height * 0.8,
    width: width * 1.25,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  toastDescTxt: {
    fontFamily: "Deogon",
    fontSize: width * 0.15,
    width: width * 0.9,
    textAlign: "center",
  },
  toastDescCont: {
    fontFamily: "Deogon",
    fontSize: 27,
    width: width * 0.6,
    textAlign: "center",
  },
  toastNextBtn: {
    fontFamily: "Deogon",
    fontSize: width * 0.07,
    borderRadius: 10,
    backgroundColor: "#e2ce9dcc",
    paddingVertical: height * 0.01,
    width: width * 0.4,
    textAlign: "center",
    overflow: "hidden",
    shadowColor: "rgb(10,10,10)",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      height: 10,
      width: 40,
    },
  },
  srcRandomPic: {
    width: width * 0.45,
    height: height * 0.25,
    position: "absolute",
    bottom: height < 732 ? height * 0.05 : 0,
    right: 0,
  },
  srcRandomCmmtWrap: {
    position: "absolute",
    bottom: height * 0.12,
    left: width * 0.08,
    width: width * 0.45,
    ...Platform.select({
      ios: {
        borderTopLeftRadius: "30",
        borderTopRightRadius: "40",
        borderBottomLeftRadius: "40",
        borderBottomRightRadius: "1",
      },
      android: {
        borderRadius: 10,
      },
    }),
    padding: 15,
    backgroundColor: "#F9F3E7cc",
    shadowColor: "rgb(50, 50, 50)",
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: -1,
      width: 0,
    },
  },
  srcRandomCmmt: {
    ...Platform.select({
      ios: {
        fontSize: 20,
      },
      android: {
        fontSize: 17,
      },
    }),
    alignSelf: "center",
  },
  toastListWrap: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  toastList: {
    height: height * 0.5,
    width,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const homeHeaderOptions = {
  headerShown: false,
};

export const headerOptions = {
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
