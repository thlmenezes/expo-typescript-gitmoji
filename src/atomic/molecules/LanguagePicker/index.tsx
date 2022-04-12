import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { Modal, View, Text, Pressable } from "./styles";

export const LanguagePicker = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { i18n } = useTranslation(); // i18n instance

  // array with all supported languages
  const languages = [
    { name: "en-US", label: "English" },
    { name: "pt-BR", label: "Português do Brasil" },
  ];

  const LanguageItem = ({ name, label }: { name: string; label: string }) => (
    <Pressable
      onPress={() => {
        i18n.changeLanguage(name); // changes the app language
        setModalVisible(!modalVisible);
      }}
    >
      <Text>{label}</Text>
    </Pressable>
  );

  return (
    <View>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View>
          <View>
            {languages.map((lang) => (
              <LanguageItem {...lang} key={lang.name} />
            ))}
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
        {/* //displays the current app language */}
        <Text>{i18n.language}</Text>
      </Pressable>
    </View>
  );
};
