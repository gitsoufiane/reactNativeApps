import React from "react";
import { Text, View, FlatList, Image } from "react-native";
import { useQuery } from "@tanstack/react-query";
import yelp from "../api";

export function Detail({ route }) {
  const { id } = route.params;
  const { data, isSuccess, isError, error } = useQuery({
    queryKey: ["BusinessDetail", id],
    queryFn: async () => {
      const response = await yelp.get(`/${id}`);
      const data = response.data;
      return data;
    },
    enabled: !!id,
  });
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      {isError ? <Text>Error : {error.message} </Text> : null}
      {isSuccess ? (
        <View style={{ marginVertical: 10 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginLeft: 15,
              marginBottom: 5,
            }}
          >
            {data.name}
          </Text>
          <FlatList
            data={data.photos}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Image
                source={{ uri: item }}
                style={{ width: 300, height: 200, borderRadius: 4 }}
              />
            )}
          />
        </View>
      ) : null}
    </View>
  );
}
