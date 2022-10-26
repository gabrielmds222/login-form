import React from "react";

import { View, SafeAreaView, ScrollView, Text } from "react-native";
import styles from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useForm, Controller } from "react-hook-form";

export function SignUp() {
  const { control } = useForm();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Text style={styles.title}>Cadastro</Text>
        <Text style={styles.subtitle}>
          Informe seus dados para se cadastrar!
        </Text>
        <View style={{ marginVertical: 20 }}>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange } }) => (
              <Input
                label="Nome completo"
                iconName="user"
                placeholder="Digite seu nome"
                onChangeText={onChange}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange } }) => (
              <Input
                label="Email"
                iconName="mail"
                placeholder="Entre com seu email"
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange } }) => (
              <Input
                label="Senha"
                iconName="lock"
                placeholder="Entre com sua senha"
                password
              />
            )}
          />
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: { onChange } }) => (
              <Input
                label="Confirme a senha"
                iconName="lock"
                placeholder="Confirme a senha"
                password
              />
            )}
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
