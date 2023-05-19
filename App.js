import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import AllExpensesScreen from "./screens/AllExpensesScreen";
import ManageExpensesScreen from "./screens/ManageExpensesScreen";
import RecentExpensesScreen from "./screens/RecentExpensesScreen";
import { GlobalStyles } from "./constants/styles";
import IconButton from "./components/UI/IconButton";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate("ManageExpensesScreen");
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="RecentExpensesScreen"
        component={RecentExpensesScreen}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="hourglass"
              size={size}
              color={color}
              onPress={() => {}}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpensesScreen"
        component={AllExpensesScreen}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ManageExpensesScreen"
            component={ManageExpensesScreen}
            options={{ presentation: "modal" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
