import { StatusBar } from "expo-status-bar";
import React from "react";
import { TouchableOpacity } from "react-native";

import { icons } from "@root/assets";
import { Title, RoundImage } from "@root/atomic/atoms";
import { Card } from "@root/atomic/molecules";
import { HomeProps } from "@root/routes";

import { Container, Text } from "./styles";

export const Home = ({ navigation }: HomeProps) => {
  function handlePress() {
    navigation.navigate("User");
  }

  return (
    <Container>
      <TouchableOpacity onPress={handlePress}>
        <Card image={icons.icon} title="Home" />
      </TouchableOpacity>
      <Text>Change Default Device Color to See Magic</Text>
      <StatusBar style="auto" />
    </Container>
  );
};
