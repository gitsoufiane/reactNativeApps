import { MaterialIcons, FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

import { BlogContext } from "../context/BlogContext";

export function Index({ navigation }) {
  const { state, deletePost } = React.useContext(BlogContext);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Create")}>
          <FontAwesome6 name="add" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderTopWidth: 1,
              borderColor: "gray",
              paddingVertical: 20,
              paddingHorizontal: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <Text style={{ fontSize: 18 }}>
                {item.title} : {item.content}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deletePost(item.id)}>
              <MaterialIcons name="delete" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
