import {
  View,
  Pressable,
  Text,
  Dimensions,
  ImageBackground,
} from "react-native";
import data from "../../data/data";
import { styles } from "../public/styles";

const gameArr = data["Game"];

const { height } = Dimensions.get("screen");
const gameBtnBg = require("../../assets/img/game_list_btn.png");

const getItems = (navigation) => {
  return gameArr.map((v, k) => {
    return (
      <Pressable
        key={k}
        onPress={() =>
          navigation.navigate("GameDesc", {
            content: v.content,
            rule: v.rule,
            keyword: v.keyword,
          })
        }
        style={styles.gameBtn}
      >
        <ImageBackground
          source={gameBtnBg}
          resizeMode="stretch"
          imageStyle={{ height: height * 0.13 }}
        >
          <Text style={styles.gameBtnText}>{v.keyword}</Text>
        </ImageBackground>
      </Pressable>
    );
  });
};

const Game = ({ navigation }) => {
  return (
    <View
      style={{
        marginTop: height * 0.15,
        marginBottom: height * 0.1,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: height * 0.1,
      }}
    >
      {getItems(navigation)}
    </View>
  );
};

export default Game;
