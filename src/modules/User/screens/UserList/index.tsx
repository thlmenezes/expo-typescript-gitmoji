import { StatusBar } from "expo-status-bar";
import React from "react";

import { icons } from "@root/assets";
import { Title, RoundImage } from "@root/atomic/atoms";
import { Card } from "@root/atomic/molecules";

import { Container, Text } from "./styles";

export const UserList = () => {
  return (
    <Container>
      <Card image={icons.icon} title="UserList" />
      <StatusBar style="auto" />
    </Container>
  );
};
