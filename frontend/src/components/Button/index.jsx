import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export function Button({ title, onPress = () => {} }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
      activeOpacity={0.7}
    >
      <Text style={styles.texto}>{title}</Text>
    </TouchableOpacity>
  );
}
