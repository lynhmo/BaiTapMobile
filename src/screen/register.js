import * as React from "react";
import {
  View,
  Button,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import CustomButton from "../component/Custombutton";
import axios from "axios";

export default function Register({ navigation }) {
  const [username, setName] = React.useState("");
  const [password, setPass] = React.useState("");
  const [email, setemail] = React.useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // useEffect(() => {
  //   setData();
  // }, []);
  const setData = async () => {
    if (username.length == 0 || password.length == 0) {
      Alert.alert("Warning!", "Please write your data.");
    } else {
      try {
        var user = {
          Name: username,
          Email: email,
          Pass: password,
        };
        await AsyncStorage.setItem("UserData", JSON.stringify(user));
        navigation.navigate("Login");
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleRegister = async () => {
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Vui lòng nhập đầy đủ thông tin");
    } else {
      if (password === confirmPassword) {
        try {
          const { data } = await axios.post(
            "http://localhost:3000/api/register",
            {
              name: username,
              email: email,
              password: password,
            }
          );
          console.log(data);
          navigation.navigate("Login");
        } catch (error) {
          alert("Loi: " + error.message);
        }
      } else {
        alert("Mật khẩu nhập lại không đúng");
      }
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <Text style={styles.text}>Register With Async Storage</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          onChangeText={(value) => setName(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          onChangeText={(value) => setemail(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={true}
          onChangeText={(value) => setPass(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={true}
          onChangeText={(value) => setConfirmPassword(value)}
        />
        <CustomButton
          title="RegisterAsync"
          color="#1eb900"
          onPressFunction={setData}
        />
        <CustomButton
          title="Register API"
          color="#1eb900"
          onPressFunction={handleRegister}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 30,
    color: "#000",
    margin: 50,
    textAlign: "center",
  },
  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#ffffff",
    padding: 10,
    // textAlign: "center",
    fontSize: 15,
    marginBottom: 20,
  },
});
