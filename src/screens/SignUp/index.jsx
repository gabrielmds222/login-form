import React from "react";

import { View, SafeAreaView, ScrollView, Text } from "react-native";
import styles from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useForm } from "react-hook-form";

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
            label="Nome completo"
            iconName="user"
            placeholder="Digite seu nome"
          />
          <Input
            label="Email"
            iconName="mail"
            placeholder="Entre com seu email"
          />
          <Input
            label="Senha"
            iconName="lock"
            placeholder="Entre com sua senha"
            password
          />
          <Input
            label="Confirme a senha"
            iconName="lock"
            placeholder="Confirme a senha"
            password
          />
          <Button title="Cadastro" />
          <Text
            style={{
              color: "#000",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 14,
            }}
          >
            Já possui conta? Faça login!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
