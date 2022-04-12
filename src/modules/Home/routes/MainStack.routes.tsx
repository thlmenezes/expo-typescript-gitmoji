import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { Home, Todo } from "../screens";

const { Navigator, Screen } = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="HomePage" component={Home} />
      <Screen options={{ headerShown: true }} name="Todo" component={Todo} />
    </Navigator>
  );
};
