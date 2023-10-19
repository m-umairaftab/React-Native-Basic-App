import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import LandingImage from "../Photos/LandingImage.png";
const LandingScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={LandingImage}
        resizeMode="stretch"
        style={styles.image}
      >
        <View style={styles.dialog1}>
          <Text></Text>
        </View>
        <View style={styles.dialog2}>
          <LinearGradient
            colors={["#642ED7", "black"]}
            style={{
              height: "160%",
              borderTopRightRadius: 52,
              borderTopLeftRadius: 52,
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Text
                style={[styles.text, { color: "#F1CB04", paddingLeft: 93 }]}
              >
                My{" "}
              </Text>
              <Text style={[styles.text, { color: "white", paddingEnd: 93 }]}>
                Shop{" "}
              </Text>
            </View>
            <View>
              <Text style={styles.dummyText}>
                This is the dummy app for ecommerce shopping online products and
                this design is made by Umair Aftab
              </Text>
            </View>
            <View>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Get Started</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: "703px",
    width: "430",
  },
  dialog1: {
    backgroundColor: "#F1CB04",
    position: "absolute",
    paddingHorizontal: 90,
    paddingVertical: 50,
    top: 430,
    alignSelf: "flex-end",
    borderTopLeftRadius: 55,
  },
  dialog2: {
    position: "absolute",
    // backgroundColor: "#642ED7",
    bottom: 0,
    borderWidth: 1,
    borderTopRightRadius: 52,
    borderTopLeftRadius: 52,
    paddingBottom: 100,
  },
  text: {
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  },
  dummyText: {
    paddingStart: 40,
    paddingEnd: 20,
    fontSize: 15,
    color: "white",
    fontWeight: "700",
    lineHeight: 18,
  },
  btn: {
    backgroundColor: "#F1CB04",
    alignItems: "center",
    top: 40,
    padding: 10,
    borderRadius: 30,
    marginHorizontal: 50,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
});
export default LandingScreen;
