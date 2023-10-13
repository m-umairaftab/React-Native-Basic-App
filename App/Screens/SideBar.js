import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import UserLoginScreen from "./auth/UserLoginScreen";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

const SideBar = (props) => {
  const navigation = useNavigation();
  const handleLogout = () => {
    navigation.navigate("Home");
    // console.log(`Logout`);
  };
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ margin: 15 }}>
        <Text style={{ fontSize: 18, marginBottom: 5, fontWeight: "bold" }}>
          Umair Aftab
        </Text>
        <Text style={{ fontSize: 16, marginBottom: 5 }}>Umair@gmail.com</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label="Logout" onPress={handleLogout} />
    </DrawerContentScrollView>
  );
};

export default SideBar;
