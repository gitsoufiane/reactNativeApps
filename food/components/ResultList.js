import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { ResultCard } from "./ResultCard";
import { useNavigation } from "@react-navigation/native";

export function ResultList({ title, data }) {
  const navigation = useNavigation();
  return data.length ? (
    <View style={{ marginVertical: 10 }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginLeft: 15,
          marginBottom: 5,
        }}
      >
        {title}
      </Text>
      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Detail", { id: item.id })}
          >
            <ResultCard item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  ) : null;
}
