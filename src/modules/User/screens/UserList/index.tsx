import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";

import { Card } from "@root/atomic/molecules";
import type { UserProps } from "@root/modules/User";

import { useUsers } from "../../hooks";
import { mockedAvatarUrl } from "../../utils";
import { Container } from "./styles";

export const UserList = ({ navigation }: UserProps) => {
  function handlePress() {
    navigation.navigate("Home");
  }

  const { users, isLoading } = useUsers();

  if (isLoading) {
    return (
      <Container>
        <Text>Loading...</Text>
      </Container>
    );
  }

  return (
    <Container>
      <ScrollView>
        {users?.map(({ name, id }) => (
          <TouchableOpacity key={id} onPress={handlePress}>
            <Card image={{ uri: mockedAvatarUrl(name) }} title={name} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </Container>
  );
};
