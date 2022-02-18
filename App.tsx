import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { useColorScheme } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components/native";

import { themeSelector } from "@root/global";
import { Routes } from "@root/routes";

const client = new QueryClient();

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={themeSelector[colorScheme ?? "dark"]}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

// Storybook: to  run comment out file and uncomment this line
// export { default } from "./storybook";
