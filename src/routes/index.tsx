import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";

import { HomeRoutes } from "@root/modules/Home";
import { UserRoutes } from "@root/modules/User";

const { Navigator, Screen } = createNativeStackNavigator();

type RootStackParamList = {
  Home: undefined;
  User: undefined;
};

export type UserProps = NativeStackScreenProps<RootStackParamList, "User">;
export type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export const Routes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={HomeRoutes} />
      <Screen name="User" component={UserRoutes} />
    </Navigator>
  );
};
