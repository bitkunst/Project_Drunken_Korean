import { View, Pressable, Text } from "react-native";
import data from "../../data/data";
import { styles } from "../public/styles";

const gameArr = data["Game"];

const getItems = (navigation) => {
  return gameArr.map((v, k) => {
    return (
      <Pressable
        key={k}
        onPress={() =>
          navigation.navigate("GameDesc", {
            content: v.content,
            rule:v.rule,
            keyword:v.keyword
          })
        }
      >
        <Text style={styles.gameBtn}>{v.keyword}</Text>
      </Pressable>
    );
  });
};

const Game = ({ navigation }) => {
  return <View>{getItems(navigation)}</View>;
};

export default Game;
