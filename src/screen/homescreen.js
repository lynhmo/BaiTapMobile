import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
  TextInput,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomButton from "../component/Custombutton";

export default function HomeScreen({ navigation }) {
  const [name, setName] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [user, setUser] = useState(undefined);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    // getData();
    getUser();
  }, []);
  const getData = () => {
    try {
      AsyncStorage.getItem("UserData").then((value) => {
        if (value != null) {
          let user = JSON.parse(value);
          setName(user.Name);
          setPass(user.Pass);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogout = async () => {
    navigation.navigate("Login");
    setIsAuth(false);
  };
  const getUser = async () => {
    const auth = await AsyncStorage.getItem("currentUser");

    if (auth) {
      setIsAuth(true);
      setUser(JSON.parse(auth));
    }
  };
  // const updateData = async () => {
  //   if (name.length == 0) {
  //     Alert.alert("Warning!", "Please write your data.");
  //   } else {
  //     try {
  //       var user = {
  //         Name: name,
  //       };
  //       await AsyncStorage.mergeItem("UserData", JSON.stringify(user));
  //       Alert.alert("Success!", "Your data has been updated.");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

  // const removeData = async () => {
  //   try {
  //     await AsyncStorage.clear();
  //     navigation.navigate("Login");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <View style={styles.body}>
      {/* <Text style={[styles.text]}>Welcome {name} !</Text>
      <Text style={[styles.text]}>Your password is {pass}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={(value) => setName(value)}
      /> */}
      <Text style={[styles.text]}>Hello {user && user.name}</Text>
      {/* {isAuth && (
        // <Button color="#999" title="Logout" onPress={handleLogout} />
        <CustomButton
          title="Logout"
          color="#1eb900"
          onPressFunction={handleLogout}
        />
      )} */}
      <CustomButton
          title="Logout"
          color="#1eb900"
          onPressFunction={handleLogout}
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
