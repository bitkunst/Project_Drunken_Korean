import {
  View,
  Pressable,
  TouchableHighlight,
  Text,
  ImageBackground,
  Dimensions,
} from "react-native";
import { styles } from "../public/styles";
const { width, height } = Dimensions.get("screen");

const hardListBg = require("../../assets/img/hard_list.jpeg");
const easyListBg = require("../../assets/img/easy_list.jpeg");

const ToastBtn = ({ navigation }) => {
  return (
    <View writing style={styles.toastListWrap}>
      <>
        <TouchableHighlight
          onPress={() =>
            navigation.navigate("ToastDesc", {
              isEasy: false,
            })
          }
          underlayColor="#B1934B"
          activeOpacity={1}
        >
          <ImageBackground
            source={hardListBg}
            resizeMode="stretch"
            style={styles.toastList}
            imageStyle={{
              opacity: 0.7,
            }}
          >
            <Text style={{ ...styles.titleSt }}>회식 자리</Text>
          </ImageBackground>
        </TouchableHighlight>
        <View style={{ borderStyle: "solid", borderWidth: 1, width }}></View>
        <TouchableHighlight
          onPress={() =>
            navigation.navigate("ToastDesc", {
              isEasy: true,
            })
          }
          underlayColor="#B1934B"
          activeOpacity={1}
        >
          <ImageBackground
            source={easyListBg}
            resizeMode="stretch"
            style={styles.toastList}
            imageStyle={{
              opacity: 0.7,
            }}
          >
            <Text style={{ ...styles.titleSt }}>편한 자리</Text>
          </ImageBackground>
        </TouchableHighlight>
      </>
    </View>
  );
};

export default ToastBtn;
