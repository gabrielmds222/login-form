import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "./styles";

export default function Header({ icon, headerIcon, onIconClick }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={35} color="white" />
        </TouchableWithoutFeedback>
        <Text style={styles.title}>Portal do Médico</Text>
      </View>

      <TouchableWithoutFeedback onPress={onIconClick}>
        <View>{headerIcon}</View>
      </TouchableWithoutFeedback>
    </View>
  );
}
