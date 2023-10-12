import { View, Text, StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  labelText: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 10,
    marginTop: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 15,
    fontSize: 15,
    color: "grey",
  },
  loginButton: {
    width: 200,
    alignSelf: "center",
    margin: 20,
  },
});
const toastConfig = {
  warning: ({ text1, props }) => (
    <View
      style={{
        height: 30,
        width: "100%",
        backgroundColor: "orange",
        padding: 4,
      }}
    >
      <Text> {text1} </Text>
      <Text> {props.uuid} </Text>
    </View>
  ),
  done: ({ text1, props }) => (
    <View
      style={{
        height: 30,
        width: "100%",
        backgroundColor: "#1affc6",
        padding: 4,
      }}
    >
      <Text> {text1} </Text>
      <Text> {props.uuid} </Text>
    </View>
  ),
};
export { styles, toastConfig };
