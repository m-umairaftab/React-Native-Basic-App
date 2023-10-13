import React from "react";
import { View } from "react-native";
import UserLoginScreen from "./App/Screens/auth/UserLoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShopTab from "./App/ShopTab";
import RegisterationScreen from "./App/Screens/auth/RegisterationScreen";
import SendPasswordResetEmailScreen from "./App/Screens/auth/SendPasswordResetEmailScreen";
import UserPanel from "./App/Screens/UserPanel";
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "purple" },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="ShopTab"
          component={ShopTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserLogin"
          component={UserLoginScreen}
          options={{ title: "User Login" }}
        />
        <Stack.Screen
          name="Registeration"
          component={RegisterationScreen}
          options={{ title: "Registeration", headerBackVisible: false }}
        />
        <Stack.Screen
          name="SendPasswordResetEmail"
          component={SendPasswordResetEmailScreen}
          options={{ title: "Forgot Password", headerBackVisible: false }}
        />
        <Stack.Screen
          name="UserPanel"
          component={UserPanel}
          options={{ headerShown: false, headerBackVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
