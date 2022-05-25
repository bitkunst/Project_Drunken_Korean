import { View, Button } from "react-native";
import data from "../../data/data";

const gameArr = data["Game"];

const getItems = (navigation) => {
  return gameArr.map((v, k) => {
    return (
      <Button
        key={k}
        title={v.keyword}
        onPress={() =>
          navigation.navigate("GameDesc", {
            content: v.content,
          })
        }
      />
    );
  });
};

const Game = ({ navigation }) => {
  return <View>{getItems(navigation)}</View>;
};

export default Game;
