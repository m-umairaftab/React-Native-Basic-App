import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import { styles, toastConfig } from "../../styles";
import { Button } from "react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";

const RegisterationScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [name, setName] = useState("");
  const [tc, setTc] = useState(false);
  const navigation = useNavigation();
  const clearTextInput = () => {
    setEmail("");
    setPassword("");
    setName("");
    setPassword_confirmation("");
    setTc(false);
  };
  const handleFormSubmit = () => {
    if (name && email && password && password_confirmation && tc) {
      if (password === password_confirmation) {
        // console.log("Registeration Success");
        const formData = { name, email, password, password_confirmation, tc };
        // console.log(formData);
        clearTextInput();
        Toast.show({
          type: "done",
          position: "top",
          topOffset: 0,
          text1: "Registeration Success",
        });
      } else {
        // console.log("Password and Confirm Password doesn't match");
        Toast.show({
          type: "warning",
          position: "top",
          topOffset: 0,
          text1: "Password and Confirm Password doesn't match",
        });
      }
    } else {
      // console.log("All fields are required");
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
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={{ marginHorizontal: 30 }}>
          <View>
            <Text style={styles.labelText}>Name</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Write Your Name"
              onPress={console.log(name)}
              keyboardType="email-address"
            />
          </View>
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
          <View>
            <Text style={styles.labelText}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              value={password_confirmation}
              onChangeText={setPassword_confirmation}
              placeholder="Write Your Password"
              onPress={console.log(password_confirmation)}
              secureTextEntry={true}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 15,
            }}
          >
            <Checkbox
              value={tc}
              onValueChange={setTc}
              color={tc ? "#4630EB" : undefined}
            />
            <Text>I agree to terms and condition.</Text>
          </View>
          <View style={styles.loginButton}>
            <Button
              title="Register"
              onPress={handleFormSubmit}
              color="purple"
            />
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate("UserLogin");
              }}
            >
              <Text style={{ fontWeight: "bold" }}>
                Already Registered ? Login
              </Text>
            </TouchableWithoutFeedback>
          </View>
          <View
            style={{ alignSelf: "center", marginBottom: 10, marginTop: 30 }}
          >
            <Icon name="shopping-bag" size={100} color={"purple"} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterationScreen;
