import { Text, ScrollView, Avatar, Divider, VStack } from 'native-base'
import { TitleComponent } from '../../components/titleComponent';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getClientData } from '../../services/clientService';
import { Client } from '../../interfaces/Client';
import { ButtonComponent } from '../../components/buttonComponent';

const ProfileTab = ({ navigation }: any) => {
	const [dataClient, setDataClient] = useState({} as Client)

	useEffect(() => {
		async function showDataClient() {
			const clientID = await AsyncStorage.getItem('clientID')
			if (!clientID) return null

			const result = await getClientData(clientID)
			if (result) {
				setDataClient(result)
				console.log(result)
			}
		}
		showDataClient()
	}, [])

	function logoff() {
		AsyncStorage.removeItem('token')
		AsyncStorage.removeItem('clientID')
		navigation.replace('LoginScreen')
	}

	return (
		<ScrollView flex={1}>
			<VStack
				flex={1}
				alignItems="center"
				padding={5}
			>
				<TitleComponent color="blue.500"> Meu perfil </TitleComponent>
				<Avatar
					source={{ uri: dataClient?.imagem }}
					size="xl"
					marginTop={5}
					marginBottom={5}
				/>
				<TitleComponent color="blue.500"> Informações Pessoais </TitleComponent>
				<TitleComponent fontSize="lg" marginBottom={1}> {dataClient?.nome} </TitleComponent>
				<TitleComponent fontSize="md" marginBottom={1}> {dataClient?.email} </TitleComponent>
				<TitleComponent fontSize="md" marginBottom={5}> {dataClient?.endereco?.estado} </TitleComponent>
				<Divider marginTop={5} marginBottom={5} />
				<TitleComponent color="blue.500"> Planos de Saúde </TitleComponent>
				{
					dataClient?.planosSaude?.map((plano, index) => (
						<Text key={index}>{plano}</Text>
					))
				}

				<ButtonComponent
					buttonText='Deslogar'
					onPress={logoff}
				/>
			</VStack>

		</ScrollView>
	)
}

export default ProfileTab; 