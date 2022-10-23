import LoginScreen from "./LoginScreen";
import AccountsScreen from "./AccountsScreen";
import MovementScreen from "./MovementScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Inicio de Sesion"
        component={LoginScreen}
        options={{
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="person-add-outline"
              color={"#FFA1CF"}
              size={20}
            ></Ionicons>
          ),
        }}
      />
      <Tab.Screen
        name="Cuenta"
        component={AccountsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="people-outline"
              color={"#FFA1CF"}
              size={20}
            ></Ionicons>
          ),
        }}
      />
      <Tab.Screen
        name="Movimientos"
        component={MovementScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="move-outline"
              color={"#FFA1CF"}
              size={20}
            ></Ionicons>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeTabs;
