import React from "react";
import { Button, StatusBar, StyleSheet, Text, View, Alert } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.box} >
        <Text>Hello, World!</Text>
      </View> */}
      <View>
        <Button
          title="button"
          color="skyblue"
          onPress={() => Alert.alert("hello")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  box: {
    backgroundColor: "skyblue",
    width: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
});
