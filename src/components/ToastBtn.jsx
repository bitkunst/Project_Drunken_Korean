import { View, Button } from "react-native";

const ToastBtn = ({ navigation }) => {
  return (
    <View>
      <Button
        title="회식 자리"
        onPress={() => navigation.navigate("ToastDesc")}
      />
      <Button
        title="편한 자리"
        onPress={() => navigation.navigate("ToastDesc")}
      />
    </View>
  );
};

export default ToastBtn;
