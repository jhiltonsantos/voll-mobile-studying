import { Box, Text, Checkbox, ScrollView, useToast } from "native-base";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";

import { TitleComponent } from "../components/titleComponent";
import { InputComponent } from "../components/inputComponent";
import { ButtonComponent } from "../components/buttonComponent";
import { ImageLogoComponent } from "../components/imageLogoComponent";
import { sessions } from "../utils/registerInputsText";
import { registerClient } from "../services/clientService";
import { login } from "../services/authService";

export default function RegisterScreen({ navigation }: any) {
  const [numberSession, setNumberSession] = useState(0);
  const [data, setData] = useState({} as any)
  const [healthPlans, setHealthPlans] = useState([] as number[])
  const toast = useToast()
  let makeLogin = false


  function updateData(id: string, value: string) {
    setData({ ...data, [id]: value })
  }

  function nextSession() {
    if (numberSession < sessions.length - 1) {
      setNumberSession(numberSession + 1)
    }
    else {
      console.log(data)
      callRegisterAndLoginUser()

    }
  }

  function previousSession() {
    if (numberSession > 0) {
      setNumberSession(numberSession - 1)
    }
  }

  async function callRegisterAndLoginUser() {
    await register()
    await callLogin(makeLogin)
  }

  async function register() {
    const result = await registerClient({
      cpf: data.cpf,
      nome: data.nome,
      email: data.email,
      endereco: {
        cep: data.cep,
        rua: data.rua,
        numero: data.numero,
        complemento: data?.complemento,
        estado: data.estado,
      },
      senha: data.senha,
      telefone: data.telefone,
      possuiPlanoSaude: (healthPlans.length > 0),
      planosSaude: healthPlans,
      imagem: data.imagem,
    })
    isFinishedMessage(result)
  }

  function isFinishedMessage(result: boolean) {
    if (result) {
      makeLogin = true
      return (
        toast.show({
          alignItems: "center",
          shadow: 5,
          borderRadius: 10,
          title: "Cadastro realizado",
          description: "O usuário foi cadastrado com sucesso",
          backgroundColor: "green.500"
        })
      )
    }
    return (
      toast.show({
        alignItems: "center",
        shadow: 5,
        borderRadius: 10,
        title: "Falha no cadastro",
        description: "Verifique os dados inseridos",
        backgroundColor: "red.500"
      })
    )
  }

  async function callLogin(isRegister: boolean) {
    if (isRegister) {
      const result = await login(data.email, data.senha)
      const { token } = result
      AsyncStorage.setItem('token', token)
      const tokenDecode = jwtDecode(token) as any
      const clientID = tokenDecode.id
      AsyncStorage.setItem('clientID', clientID)
      navigation.replace('TabsScreen')
    }
  }

  function renderPreviousButton() {
    if (numberSession > 0) {
      return (
        <ButtonComponent
          buttonText="Voltar"
          onPress={() => previousSession()}
          backgroundColor="gray.400"
        />
      )
    }
  }

  function renderCheckboxInputs() {
    if (numberSession == 2) {
      return (
        <Box>
          <Text
            color="blue.800"
            fontWeight="bold"
            fontSize="md"
            marginTop={2}
            marginBottom={2}
          >
            Selecione os planos:
          </Text>
          {
            sessions[numberSession]?.checkbox?.map(checkbox => {
              return (
                <Checkbox
                  key={checkbox.id}
                  value={checkbox.value}
                  onChange={() => {
                    setHealthPlans((previousPlans) => {
                      if (previousPlans.includes(checkbox.id)) {
                        return previousPlans.filter((id) => id !== checkbox.id)
                      }
                      return [...previousPlans, checkbox.id]
                    })
                  }}
                  isChecked={healthPlans.includes(checkbox.id)}
                >
                  {checkbox.value}
                </Checkbox>
              )
            })
          }
        </Box>
      )
    }
  }

  return (
    <ScrollView
      flex={1}
      padding={5}
    >
      <ImageLogoComponent alignSelf="center" />

      <TitleComponent>
        {sessions[numberSession].title}
      </TitleComponent>

      <Box>
        {
          sessions[numberSession]?.inputsText?.map((input) => {
            return (
              <InputComponent
                labelText={input.label}
                placeholderText={input.placeholder}
                key={input.id}
                secureTextEntry={input.secureTextEntry}
                value={data[input.name]}
                onChangeText={(text) => updateData(input.name, text)}
              />
            )
          })
        }
      </Box>

      {renderCheckboxInputs()}

      {renderPreviousButton()}

      <ButtonComponent
        buttonText={numberSession == 2 ? 'Finalizar' : 'Avançar'}
        onPress={() => nextSession()}
        marginTop={4}
        marginBottom={20}
      />

    </ScrollView>
  );
}