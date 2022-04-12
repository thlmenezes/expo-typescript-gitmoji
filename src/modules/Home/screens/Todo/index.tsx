import React, { useState } from "react";
import { Animated, TouchableOpacity, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { icons } from "@root/assets";
import { RoundImage } from "@root/atomic/atoms";
import { Card } from "@root/atomic/molecules";
import { useTodo } from "@root/modules/Home/hooks";

import { Container, Text, TextInput } from "./styles";

export const Todo = () => {
  const [textInputValue, onChangeText] = useState("");
  const { state, addTodo, removeTodo, activeFilter, filters, updateFilter } = useTodo();

  function handleAdd() {
    addTodo({ value: textInputValue });
  }

  function handleRemove(key: number) {
    removeTodo({ key });
  }

  const renderLeftActions =
    (callback: () => void) =>
    (_progress: Animated.AnimatedInterpolation, dragX: Animated.AnimatedInterpolation) => {
      const scale = dragX.interpolate({
        inputRange: [0, 80],
        outputRange: [0, 1],
        extrapolate: "clamp",
      });
      return (
        <RectButton
          style={{
            flex: 1,
            backgroundColor: "#388e3c",
            justifyContent: "flex-end",
            alignItems: "center",
            flexDirection: "row",
          }}
          onPress={callback}
        >
          <Animated.View
            style={[
              {
                width: 30,
                marginHorizontal: 10,
                backgroundColor: "plum",
                height: 20,
              },
              { transform: [{ scale }] },
            ]}
          />
        </RectButton>
      );
    };

  return (
    <Container>
      <View style={{ flexDirection: "row" }}>
        <TextInput value={textInputValue} onChangeText={onChangeText} />
        <TouchableOpacity onPress={handleAdd}>
          <RoundImage source={icons.icon} />
        </TouchableOpacity>
      </View>
      <Text>{activeFilter}</Text>
      <View>
        {filters.map((v) => (
          <TouchableOpacity key={v} onPress={() => updateFilter(v)}>
            <Card image={icons.favicon} title={v} />
          </TouchableOpacity>
        ))}
      </View>
      <View>
        {state.map(({ name, key }) => (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              margin: 10,
            }}
            key={key}
            onPress={() => handleRemove(key)}
          >
            {/* <Swipeable key={key} renderLeftActions={renderLeftActions(() => handleRemove(key))}> */}
            <Text
              style={{ textAlignVertical: "center" }}
              allowFontScaling
              adjustsFontSizeToFit
              minimumFontScale={0.5}
              numberOfLines={1}
            >
              {key.toFixed(2)}-{name}
            </Text>
            {/* </Swipeable> */}
          </TouchableOpacity>
        ))}
      </View>
    </Container>
  );
};
