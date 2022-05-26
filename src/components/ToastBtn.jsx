import { View, Pressable, Text } from "react-native";
import { styles } from "../public/styles";

const ToastBtn = ({ navigation }) => {
  return (
    <View
      writing
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <>
        <Pressable onPress={() => navigation.navigate("ToastDesc")}>
          <Text style={styles.titleSt}>회식 자리</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("ToastDesc")}>
          <Text style={styles.titleSt}>편한 자리</Text>
        </Pressable>
      </>
    </View>
  );
};

export default ToastBtn;
