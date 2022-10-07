import * as React from "react";
import { View, Button, Text } from "react-native";
import { TextInput } from "react-native-paper";
const Login = ({ navigation }) => {
  const [text, setText] = React.useState("");

  return (
    <View>
      {/* <Text style={{ fontFamily: "Roboto" }}>Login</Text> */}
      <Text>{"\n"}</Text>
      <TextInput
        label="Email or Phone Number"
        value={text}
        onChangeText={(text) => setText(text)}
        // placeholder="Email or Phone Number"
        selectionColor="orange"
        activeUnderlineColor="orange"
        // outlineColor="orange"
        // activeOutlineColor="orange"
      />
      <Text>{"\n"}</Text>
      <TextInput
        label="Password"
        value={text}
        onChangeText={(text) => setText(text)}
        color="orange"
        selectionColor="orange"
        activeUnderlineColor="orange"
        // placeholder="Password"
      />
      <Text>{"\n"}</Text>
      <Button
        title="Login"
        color="#fc7f03"
        accessibilityLabel="Basicly Login"
        width="100px"
      />
      <Text>{"\n"}</Text>
      <View style={[{ width: "50%" ,marginLeft:"25%"}]}>
        <Button
          title="Home"
          color="#fc7f03"
          accessibilityLabel="Basicly Login"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </View>
  );
};

export default Login;
