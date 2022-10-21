import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";

export function Input({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          { borderColor: error ? "red" : isFocused ? "#7978B5" : "#F3F4FB" },
        ]}
      >
        <Feather
          name={iconName}
          size={22}
          style={{ color: "#7978B5", marginRight: 10 }}
        />
        <TextInput
          {...props}
          style={styles.input}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBLur={() => {
            setIsFocused(false);
          }}
        />
      </View>
      {error && <Text style={styles.erro}>{error}</Text>}
    </View>
  );
}
