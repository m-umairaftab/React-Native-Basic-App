import React from "react";
import { View } from "react-native";
import UserLoginScreen from "./App/Screens/auth/UserLoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShopTab from "./App/ShopTab";
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
