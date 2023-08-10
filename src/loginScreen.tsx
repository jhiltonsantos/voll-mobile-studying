import { VStack, Text, Box, Link, useToast } from "native-base";
import { TouchableOpacity } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";

import { TitleComponent } from "./components/titleComponent";
import { InputComponent } from "./components/inputComponent";
import { ButtonComponent } from "./components/buttonComponent";
import { ImageLogoComponent } from "./components/imageLogoComponent";
import { useEffect, useState } from "react";
import { login } from "./services/authService";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const toast = useToast()
  const [loadingScreen, setLoadingScreen] = useState(true)

  // initState() {}
  useEffect(() => {
    // AsyncStorage.removeItem('token')
    async function checkLogin() {
      const token = await AsyncStorage.getItem('token')
      if (token) {
        navigation.replace('TabsScreen')
      }
      setLoadingScreen(false)
    }
    checkLogin()
  }, [])

  async function callLogin() {
    const result = await login(email, password)
    if (result) {
      const { token } = result
      AsyncStorage.setItem('token', token)
      const tokenDecode = jwtDecode(token) as any
      const clientID = tokenDecode.id
      AsyncStorage.setItem('clientID', clientID)
      navigation.replace('TabsScreen')
    } else {
      toast.show({
        alignItems: "center",
        shadow: 5,
        borderRadius: 10,
        title: "Erro no login",
        description: "Email ou senha incorretos",
        backgroundColor: "red.500"
      })
    }
  }

  if (loadingScreen) {
    return null
  }

  return (
    <VStack
      flex={1}
      alignItems="center"
      justifyContent="center"
      padding={5}
    >

      <ImageLogoComponent />

      <TitleComponent marginTop={5}>
        Faça login em sua conta
      </TitleComponent>

      <Box>
        <InputComponent
          marginTop={10}
          labelText="Email"
          placeholderText="Insera seu endereço de email"
          value={email}
          onChangeText={setEmail}
        />

        <InputComponent
          marginTop={3}
          labelText="Senha"
          placeholderText="Insira sua senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

      </Box>

      <ButtonComponent
        buttonText="Entrar"
        onPress={callLogin}
      />

      <Link
        href="https://github.com/jhiltonsantos"
        marginTop={2}
      >
        "Esqueceu sua senha?"
      </Link>

      <Box
        width="100%"
        flexDirection="row"
        justifyContent="center"
        marginTop={8}
      >
        <Text paddingRight={1}>
          Ainda não tem cadastro?
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('RegisterScreen')}
        >
          <Text color="blue.500">
            Faça seu cadastro!
          </Text>
        </TouchableOpacity>

      </Box>

    </VStack>
  );
}