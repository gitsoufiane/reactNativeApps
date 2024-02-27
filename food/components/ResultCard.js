import React from "react";
import { View, Text, Image } from "react-native";

export function ResultCard({ item }) {
  return (
    <View style={{ marginLeft: 15 }}>
      {item.image_url ? (
        <Image
          source={{ uri: item.image_url }}
          style={{ width: 250, height: 120, borderRadius: 4 }}
        />
      ) : null}
      <View>
        <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
        <Text>
          {item.rating} Stars, {item.review_count} Reviews
        </Text>
      </View>
    </View>
  );
}
