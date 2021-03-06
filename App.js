import { useState, useEffect, createContext, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ToastScreen from "./src/screens/toast/ToastScreen";
import ToastDescScreen from "./src/screens/toast/ToastDescScreen";
import GameScreen from "./src/screens/game/GameScreen";
import GameDescScreen from "./src/screens/game/GameDescScreen";
import { homeHeaderOptions, headerOptions } from "./src/public/styles";
import * as SplashScreen from "expo-splash-screen";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import Loading from "./src/components/Loading";

const Stack = createNativeStackNavigator();

const getImg = async () => {
  await Promise.all([
    Asset.loadAsync([
      require("./assets/img/game_list_bg.png"),
      require("./assets/img/game_list_btn.png"),
      require("./assets/img/game_desc_bg.png"),
      require("./assets/img/bg1.jpeg"),
      require("./assets/img/moving_logo.gif"),
      require("./assets/img/moving_char1.gif"),
      require("./assets/img/moving_char2.gif"),
      require("./assets/img/moving_char3.gif"),
      require("./assets/img/moving_char4.gif"),
      require("./assets/img/game_desc_title.png"),
      require("./assets/img/game_desc_bg.png"),
      require("./assets/img/toast_bg.jpeg"),
      require("./assets/img/toast_desc_bg.png"),
      require("./assets/img/logo.png"),
      require("./assets/img/hwang.png"),
      require("./assets/img/kimgoo.png"),
      require("./assets/img/sejong.png"),
      require("./assets/img/sinsa.png"),
      require("./assets/img/sunsin.png"),
      require("./assets/img/ee.png"),
      require("./assets/app_icon.png"),
      require("./assets/img/easy_list.jpeg"),
      require("./assets/img/hard_list.jpeg"),
      require("./assets/img/loading_bg.jpeg"),
      require("./assets/app_icon_loading.png"),
    ]),
  ]);
};

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const prepare = async () => {
      try {
        await getImg();
        await Font.loadAsync({
          Deogon: require("./src/public/font/DeogonPrincess.otf"),
          Eulyoo: require("./src/public/font/Eulyoo1945-Regular.otf"),
          Kyobo: require("./src/public/font/KyoboHandwriting2020pdy.otf"),
        });
        setTimeout(() => {
          setIsLoading(false);
        }, 3500);
        setAppIsReady(true);
      } catch (e) {
        console.log(e);
      }
    };

    prepare();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        appIsReady && (
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ ...homeHeaderOptions }}
              />
              <Stack.Screen
                name="Toast"
                component={ToastScreen}
                options={{ ...headerOptions }}
              />
              <Stack.Screen
                name="Game"
                children={({ navigation }) => (
                  <GameScreen navigation={navigation} />
                )}
                options={{ ...headerOptions }}
              />
              <Stack.Screen
                name="GameDesc"
                component={GameDescScreen}
                options={{ ...headerOptions }}
              />
              <Stack.Screen
                name="ToastDesc"
                component={ToastDescScreen}
                options={{ ...headerOptions }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        )
      )}
    </>
  );
}
