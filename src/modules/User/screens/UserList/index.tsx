import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import { Text } from "react-native";

import { CardList } from "@root/atomic/organisms";

import { useUsers } from "../../hooks";
import { mockedAvatarUrl } from "../../utils";
import { Container } from "./styles";

export const UserList = () => {
  const { users, isLoading, setCache } = useUsers();

  const removeUser = useCallback((targetId) => {
    setCache((old) => old?.filter(({ id }) => id !== targetId) ?? []);
  }, []);

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
