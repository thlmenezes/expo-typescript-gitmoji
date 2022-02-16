import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text>home</Text>
      <Text>Open up App.tsx start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};
