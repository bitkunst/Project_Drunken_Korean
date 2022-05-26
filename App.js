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
import { Asset, useAssets } from "expo-asset";
import * as Font from "expo-font";

const Stack = createNativeStackNavigator();
let gameSrcBg;
let gameBtnBg;

const getImg = async () => {
  await Promise.all(
    Asset.loadAsync([
      require("./assets/img/game_list_bg.png"),
      require("./assets/img/game_list_paper.jpg"),
      require("./assets/img/game_desc_bg.png"),
      require("./assets/img/bg1.jpeg"),
    ])
  );
};

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        await getImg();
        await Font.loadAsync({
          Deogon: require("./src/public/font/DeogonPrincess.otf"),
          Eulyoo: require("./src/public/font/Eulyoo1945-Regular.otf"),
        });

        setAppIsReady(true);
      } catch (e) {
        console.log(e);
      }
    };

    prepare();
  }, []);

  return (
    <>
      {appIsReady && (
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
      )}
    </>
  );
}
