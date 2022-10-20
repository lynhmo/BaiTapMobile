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

export default function Register({ navigation }) {
  const [name, setName] = React.useState("");
  const [pass, setPass] = React.useState("");
  // useEffect(() => {
  //   setData();
  // }, []);
  const setData = async () => {
    if (name.length == 0 || pass.length == 0) {
      Alert.alert("Warning!", "Please write your data.");
    } else {
      try {
        var user = {
          Name: name,
          Pass: pass,
        };
        await AsyncStorage.setItem("UserData", JSON.stringify(user));
        navigation.navigate("Login");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <Text style={styles.text}>Register With Async Storage</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          onChangeText={(value) => setName(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={true}
          onChangeText={(value) => setPass(value)}
        />
        <CustomButton
          title="Register"
          color="#1eb900"
          onPressFunction={setData}
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
