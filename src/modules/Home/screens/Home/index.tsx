import { StatusBar } from "expo-status-bar";
import React from "react";
import { TouchableOpacity } from "react-native";

import { icons } from "@root/assets";
import { Card } from "@root/atomic/molecules";
import type { HomeProps } from "@root/modules/Home";

import { Container, Text } from "./styles";

export const Home = ({ navigation }: HomeProps) => {
  function handlePress(screen: "User" | "Todo") {
    navigation.navigate(screen);
  }

  return (
    <Container>
      <TouchableOpacity onPress={() => handlePress("User")}>
        <Card image={icons.icon} title="Home" />
      </TouchableOpacity>
      <Text>Change Default Device Color to See Magic</Text>
      <TouchableOpacity onPress={() => handlePress("Todo")}>
        <Card image={icons.icon} title="Todo" />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </Container>
  );
};
