// import * as React from "react";
import AppNavigation from "./src/navigation/AppNavigation";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { AuthScreen } from "./screens/AuthScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <AuthScreen />
      <StatusBar style="auto" />
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
});
// export default function App() {
//   return <AppNavigation></AppNavigation>;
// }
