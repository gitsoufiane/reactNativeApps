import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./components/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </NavigationContainer>
  );
}
