import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import { styles, toastConfig } from "../../styles";
import { Button } from "react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";
// import { MaterialIcon } from "react-native-vector-icons/MaterialIcons";

const UserLoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const clearTextInput = () => {
    setEmail("");
    setPassword("");
  };
  const handleFormSubmit = () => {
    if (email && password) {
      console.log("Login Succcess");
      const formData = { email, password };
      console.log(formData);
      clearTextInput();
      Toast.show({
        type: "done",
        position: "top",
        topOffset: 0,
        text1: "Login Succcess",
      });
    } else {
      console.log("All fields are required");
      Toast.show({
        type: "warning",
        position: "top",
        topOffset: 0,
        text1: "All fields are required",
      });
    }
  };
  return (
    <SafeAreaView>
      <Toast config={toastConfig} />
      <View style={{ marginHorizontal: 30 }}>
        {/* <View>
          <MaterialIcon name="shopping-bag" />
        </View> */}
        <View>
          <Text style={styles.labelText}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Write Your Email"
            onPress={console.log(email)}
            keyboardType="email-address"
          />
        </View>
        <View>
          <Text style={styles.labelText}>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Write Your Password"
            onPress={console.log(password)}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.loginButton}>
          <Button title="Login" onPress={handleFormSubmit} color="purple" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserLoginScreen;
