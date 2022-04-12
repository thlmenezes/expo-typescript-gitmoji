import { StatusBar } from "expo-status-bar";
import React from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native";

import { icons } from "@root/assets";
import { Card, LanguagePicker } from "@root/atomic/molecules";
import type { HomeProps } from "@root/modules/Home";

import { Container, Text } from "./styles";

export const Home = ({ navigation }: HomeProps) => {
  function handlePress(screen: "User" | "Todo") {
    navigation.navigate(screen);
  }
  const { t } = useTranslation();

  return (
    <Container>
      <LanguagePicker />
      <TouchableOpacity onPress={() => handlePress("User")}>
        <Card image={icons.icon} title={`${t("HOME")}`} />
      </TouchableOpacity>
      <Text allowFontScaling>{`${t("HOME_TEXT")}`}</Text>
      <TouchableOpacity onPress={() => handlePress("Todo")}>
        <Card image={icons.icon} title={`${t("TODO")}`} />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </Container>
  );
};
