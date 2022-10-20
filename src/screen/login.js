import * as React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native";
// import { TextInput } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import CustomButton from "../component/Custombutton";

export default function Login({ navigation }) {
  const [name, setName] = React.useState("");
  const [pass, setPass] = React.useState("");

  // useEffect(() => {
  //   getData();
  // }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("UserData").then((value) => {
        if (value != null) {
          // let user = JSON.parse(value);
          // setName(user.Name);
          // setPass(user.Pass);
          // if (user.Name == name && user.Pas == pass) {
          //   navigation.navigate("Home");
          // }
          navigation.navigate("Home");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  // const setData = async () => {
  //   if (name.length == 0 || pass.length == 0) {
  //     Alert.alert("Warning!", "Please write your data.");
  //   } else {
  //     try {
  //       var user = {
  //         Name: name,
  //         Pass: pass,
  //       };
  //       await AsyncStorage.setItem("UserData", JSON.stringify(user));
  //       navigation.navigate("Home");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Login With Async Storage</Text>
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
      <CustomButton title="Login" color="#1eb900" onPressFunction={getData} />
      <CustomButton
        title="Register"
        color="#1eb900"
        // onPress={() => navigation.navigate("Register")}
        onPressFunction={() => navigation.navigate("Register")}
      />
    </View>
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
