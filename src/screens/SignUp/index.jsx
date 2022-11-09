import React from "react";

import { View, SafeAreaView, ScrollView, Text } from "react-native";
import styles from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Dropdown } from "../../components/Dropdown";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    Nome: yup.string().required("Campo nome é obrigatório"),
    Email: yup
      .string()
      .required("Email é obrigatório")
      .email("Informe um email válido"),
    Password: yup.string().required("Senha é obrigatória"),
    Password_confirm: yup
      .string()
      .required("Confirmar a senha é obrigatório")
      .oneOf([yup.ref("Password"), null], "As senhas não são iguais"),
  })
  .required();

export function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleSignUp(data) {
    console.log(data);
  }

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
            name="Nome"
            render={({ field: { onChange } }) => (
              <Input
                label="Nome completo"
                iconName="user"
                placeholder="Digite seu nome"
                onChangeText={onChange}
              />
            )}
          />
          <Text style={styles.erro}>{errors.Nome?.message}</Text>

          <Controller
            control={control}
            name="Email"
            render={({ field: { onChange } }) => (
              <Input
                label="Email"
                iconName="mail"
                placeholder="Entre com seu email"
                onChangeText={onChange}
              />
            )}
          />
          <Text style={styles.erro}>{errors.Email?.message}</Text>

          <Dropdown />

          <Controller
            control={control}
            name="Password"
            render={({ field: { onChange } }) => (
              <Input
                label="Senha"
                iconName="lock"
                placeholder="Entre com sua senha"
                password
                onChangeText={onChange}
              />
            )}
          />
          <Text style={styles.erro}>{errors.Password?.message}</Text>

          <Controller
            control={control}
            name="Password_confirm"
            render={({ field: { onChange } }) => (
              <Input
                label="Confirme a senha"
                iconName="lock"
                placeholder="Confirme a senha"
                password
                onChangeText={onChange}
              />
            )}
          />
          <Text style={styles.erro}>{errors.Password_confirm?.message}</Text>

          <Button title="Cadastro" onPress={handleSubmit(handleSignUp)} />
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
