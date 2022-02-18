import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import { Text } from "react-native";

import { CardList } from "@root/atomic/organisms";

import { useUsers } from "../../hooks";
import { mockedAvatarUrl } from "../../utils";
import { Container } from "./styles";

export const UserList = () => {
  const { users, isLoading } = useUsers();

  const removeUser = useCallback(() => {}, []);

  if (isLoading) {
    return (
      <Container>
        <Text>Loading...</Text>
      </Container>
    );
  }

  return (
    <Container>
      <CardList
        data={
          users?.map(({ name, id }) => ({
            title: name,
            image: { uri: mockedAvatarUrl(name) },
            id,
          })) ?? []
        }
        callback={removeUser}
      />
      <StatusBar style="auto" />
    </Container>
  );
};
