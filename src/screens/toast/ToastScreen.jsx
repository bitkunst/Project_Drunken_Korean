import React from "react";
import { View, Text, Button } from "react-native";
import ToastBtn from "../../components/ToastBtn";

const ToastScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate("Home")}
          title="HOME"
          color="#000000"
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
