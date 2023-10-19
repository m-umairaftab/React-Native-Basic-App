import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import { styles, toastConfig } from "../../styles";
import { Button } from "react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import Icon from "react-native-vector-icons/FontAwesome5";

const SendEmailResetLoginScreen = () => {
  const [email, setEmail] = useState("");
  const clearTextInput = () => {
    setEmail("");
  };
  const handleFormSubmit = () => {
    if (email) {
      // console.log("Email Succcess");
      const formData = { email };
      // console.log(formData);
      clearTextInput();
      Toast.show({
        type: "done",
        position: "top",
        topOffset: 0,
        text1: "Email send succcessfully.Please check your email.",
      });
    } else {
      // console.log("Email is required");
      Toast.show({
        type: "warning",
        position: "top",
        topOffset: 0,
        text1: "Email is required",
      });
    }
  };
  return (
    <SafeAreaView>
      <Toast config={toastConfig} />
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={{ marginHorizontal: 30 }}>
          <View
            style={{ alignSelf: "center", marginBottom: 10, marginTop: 30 }}
          >
            <Icon name="shopping-bag" size={100} color={"purple"} />
          </View>
          <View>
            <Text style={styles.labelText}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Write Your Email"
              // onPress={console.log(email)}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.loginButton}>
            <Button title="Login" onPress={handleFormSubmit} color="purple" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SendEmailResetLoginScreen;
