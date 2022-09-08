import React from "react";
import { Button, StatusBar, StyleSheet, Text, View, Alert } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box} >
        <Text>Square 1</Text>
      </View>
      <View style={styles.box} >
        <Text>Square 2</Text>
      </View>
      <View style={styles.box} >
        <Text>Square 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: "space-evenly",
  },
  box: {
    backgroundColor: "skyblue",
    width: 100,
    height: 100,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  box1:{
    backgroundColor: 'red'
  },
  box2:{
    backgroundColor: 'blue'
  },
  box3:{
    backgroundColor: 'yellow'
  }
});
