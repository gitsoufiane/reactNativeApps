import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Create } from "./components/Create";
import { Edit } from "./components/Edit";
import { Index } from "./components/Index";
import { Show } from "./components/Show";
import { BlogProvider } from "./context/BlogContext";
const Stack = createNativeStackNavigator();

const queryClient = new QueryClient();

const routes = [
  { name: "Index", component: Index },
  { name: "Show", component: Show },
  { name: "Create", component: Create },
  { name: "Edit", component: Edit },
];

export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <Stack.Navigator initialRouteName="Index">
            {routes.map((r, index) => (
              <Stack.Screen
                name={r.name}
                component={r.component}
                key={r.name + index}
              />
            ))}
          </Stack.Navigator>
        </QueryClientProvider>
      </NavigationContainer>
    </BlogProvider>
  );
}
