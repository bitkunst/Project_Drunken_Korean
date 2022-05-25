import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ToastScreen from "./src/screens/toast/ToastScreen";
import ToastDescScreen from "./src/screens/toast/ToastDescScreen";
import GameScreen from "./src/screens/game/GameScreen";
import GameDescScreen from "./src/screens/game/GameDescScreen";
import { headerOptions } from "./src/public/styles";
import { getFont } from "./src/public/styles";

const Stack = createNativeStackNavigator();

export default function App() {
  getFont();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ ...headerOptions }}
        />
        <Stack.Screen name="Toast" component={ToastScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="GameDesc" component={GameDescScreen} />
        <Stack.Screen name="ToastDesc" component={ToastDescScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
