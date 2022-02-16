import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";

import { Routes } from "@root/routes";

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
