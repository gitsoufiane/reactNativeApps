import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { BlogContext } from "../context/BlogContext";

export function Show({ route, navigation }) {
  const { state } = React.useContext(BlogContext);
  const { id } = route.params;

  const post = state.find((st) => st.id === id);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Edit", { id })}>
          <MaterialIcons name="edit" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View
      style={{ borderWidth: 1, borderColor: "gray", margin: 10, padding: 10 }}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{post.title}</Text>
      <Text>{post.content}</Text>
    </View>
  );
}
