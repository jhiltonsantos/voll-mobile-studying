import { Box, ScrollView, VStack } from 'native-base'
import { useState } from "react"

import { TitleComponent } from '../../components/titleComponent'
import { CardServiceCenterComponent } from '../../components/cardServiceCenterComponent'
import { InputComponent } from '../../components/inputComponent'
import { ButtonComponent } from '../../components/buttonComponent'
import { searchSpecialistByState } from '../../services/specialistService'
import { Specialist } from '../../interfaces/Specialist'
import { NavigationProps } from '../../@types/navigation'

const ExploreTab = ({ navigation }: NavigationProps<'ExploreTab'>) => {
	const [stateLoc, setStateLoc] = useState('')
	const [specialty, setSpecialty] = useState('')
	const [resultSearch, setResultSearch] = useState([])

	async function searchSpecialist() {
		if (!stateLoc || !specialty) return null
		try {
			console.log(stateLoc, specialty)
			const result = await searchSpecialistByState(stateLoc, specialty)
			if (result) {
				setResultSearch(result)
				console.log(result)
			}
		} catch (error) {
			console.log(error)
			return null
		}
	}

	return (
		<ScrollView flex={1}>
			<VStack
				flex={1}
				padding={5}
			>
				<Box
					width="100%"
					paddingLeft={3}
					paddingRight={3}
					paddingBottom={6}
					shadow={1}
					borderBottomRadius="lg"
					borderRightRadius="md"
				>
					<InputComponent
						labelText=''
						placeholderText='Digite a especialidade'
						value={specialty}
						onChangeText={setSpecialty}
					/>

					<InputComponent
						labelText=''
						placeholderText='Digite sua localização'
						value={stateLoc}
						onChangeText={setStateLoc}
					/>

					<ButtonComponent
						buttonText='Buscar'
						marginTop={5}
						onPress={searchSpecialist}
					/>
				</Box>

				<TitleComponent
					color="blue.500"
					alignSelf="center"
					padding={5}
				>
					Resultado da busca
				</TitleComponent>

				{
					resultSearch?.map((specialist: Specialist, index) => (
						<VStack marginBottom={5} key={index}>
							<CardServiceCenterComponent
								name={specialist?.nome}
								avatar={specialist?.imagem}
								specialty={specialist?.especialidade}
								onPress={() => navigation.navigate('ScheduleScreen', { specialistID: specialist.id })}
							/>
						</VStack>
					))
				}

			</VStack>
		</ScrollView>
	)
}

export default ExploreTab; 