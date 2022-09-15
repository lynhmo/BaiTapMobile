import * as React from "react";
import { View, Button, Text } from "react-native";
import { TextInput } from "react-native-paper";
const Login = () => {
  const [text, setText] = React.useState("");

  return (
    <View>
      <h1 style={{ fontFamily: "Roboto" }}>Login</h1>

      <TextInput
        label="Email or Phone Number"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <hr />
      <TextInput
        label="Password"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <hr />
      <Button
        title="Login"
        color="#fc7f03"
        accessibilityLabel="Basicly Login"
      />
    </View>
  );
};

export default Login;
