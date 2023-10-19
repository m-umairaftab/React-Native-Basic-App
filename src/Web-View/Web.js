import { View, Text, Alert, BackHandler, SafeAreaView } from "react-native";
import { useEffect } from "react";
import React from "react";
import WebView from "react-native-webview";
import { useNavigation } from "@react-navigation/native";
import { useRef } from "react";
import { Button } from "react-native";

const Web = () => {
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        { text: "YES", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  const ref = useRef(null);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          marginTop: 50,
          justifyContent: "space-around",
        }}
      >
        <Button
          title="Back"
          onPress={() => {
            ref.current.goBack();
          }}
        />
        <Button
          title="Reload"
          onPress={() => {
            ref.current.reload();
          }}
        />
        <Button
          title="Forward"
          onPress={() => {
            ref.current.goForward();
          }}
        />
      </View>
      <WebView
        ref={ref}
        source={{
          uri: "https://google.com",
        }}
        style={{ marginTop: 20 }}
      />
    </SafeAreaView>
  );
};

export default Web;
