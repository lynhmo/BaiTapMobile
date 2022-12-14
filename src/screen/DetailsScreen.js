import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
// import User from "./User";
const Users = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const API_URL = "http://localhost:3000";
  getUsers = () => {
    fetch(`${API_URL}/Users`)
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    setLoading(true);
    getUsers();
  }, []);
  return (
    <View style={{ padding: 20 }}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={users}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => <Text>{item.name} </Text>}
        />
      )}
    </View>
  );
};
export default Users;
