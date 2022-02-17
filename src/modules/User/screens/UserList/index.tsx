import { StatusBar } from "expo-status-bar";
import React from "react";
import { TouchableOpacity } from "react-native";

import { icons } from "@root/assets";
import { Title, RoundImage } from "@root/atomic/atoms";
import { Card } from "@root/atomic/molecules";
import { UserProps } from "@root/routes";

import { Container, Text } from "./styles";

export const UserList = ({ navigation }: UserProps) => {
  function handlePress() {
    navigation.navigate("Home");
  }

  return (
    <Container>
      <TouchableOpacity onPress={handlePress}>
        <Card image={icons.icon} title="UserList" />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </Container>
  );
};
