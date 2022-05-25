import React from "react";
import { View } from "react-native";
import ToastBtn from "../../components/ToastBtn";
import { Entypo } from "@expo/vector-icons";

const ToastScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Entypo
          name="home"
          size={40}
          color="black"
          onPress={() => navigation.navigate("Home")}
        />
      ),
    });
  }, [navigation]);
  return (
    <View>
      <ToastBtn navigation={navigation} />
    </View>
  );
};

export default ToastScreen;
