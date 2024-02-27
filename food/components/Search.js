import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SearchBar } from "./SearchBar";
import { useQuery } from "@tanstack/react-query";
import yelp from "../api";
import { ResultList } from "./ResultList";

export function Search() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const {
    data = [],
    isSuccess,
    isError,
    error,
  } = useQuery({
    queryKey: ["Search", searchTerm],
    queryFn: async () => {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm || "chinese",
          location: "vancouver",
        },
      });
      const data = response.data;
      return data;
    },
    select: (data) => data.businesses,
  });

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={(text) => setSearchTerm(text)}
      />
      {isError ? <Text>Error : {error.message} </Text> : null}
      {isSuccess ? (
        <ScrollView style={{ marginTop: 20 }}>
          <ResultList
            title="Cost Effective"
            data={data.filter((bs) => bs.price === "$")}
          />
          <ResultList
            title="Bit Pricer"
            data={data.filter((bs) => bs.price === "$$")}
          />
          <ResultList
            title="Big Spender"
            data={data.filter((bs) => bs.price === "$$$")}
          />
        </ScrollView>
      ) : null}
    </View>
  );
}
