import React from "react";

import { View, SafeAreaView, ScrollView, Text } from "react-native";
import styles from "./styles";
import { Input } from "../../components/Input";

export function SignUp() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Text style={styles.title}>Cadastro</Text>
        <Text style={styles.subtitle}>
          Informe seus dados para se cadastrar!
        </Text>
        <View style={{ marginVertical: 20 }}>
          <Input
            label="Email"
            iconName="mail"
            placeholder="Entre com seu email"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
