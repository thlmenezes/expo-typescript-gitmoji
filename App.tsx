import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { useColorScheme } from "react-native";
import { ThemeProvider } from "styled-components/native";

import { themeSelector } from "@root/global";
import { Routes } from "@root/routes";

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider theme={themeSelector[colorScheme ?? "dark"]}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
