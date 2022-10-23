import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View,TouchableOpacity,TextInput,} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTabs from "./components/HomeTabs";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={{ title: "SISTEMA BANCARIO" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

