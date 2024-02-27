import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Search } from "./Search";
import { Detail } from "./Detail";

const Stack = createNativeStackNavigator();

const routes = [
  { name: "Search", component: Search },
  { name: "Detail", component: Detail },
];

export function Home() {
  return (
    <Stack.Navigator initialRouteName="Search">
      {routes.map((r, index) => (
        <Stack.Screen
          name={r.name}
          component={r.component}
          key={r.name + index}
        />
      ))}
    </Stack.Navigator>
  );
}
