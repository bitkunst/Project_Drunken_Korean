import { View, ImageBackground, Text } from "react-native";
import { styles } from "../public/styles";

const Loading = () => {
  return (
    <View>
      <ImageBackground
        source={require("../../assets/img/bg1.jpeg")}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.titleSt}>술자리의 민족</Text>
        <Text>조선주막사</Text>
      </ImageBackground>
    </View>
  );
};

export default Loading;
