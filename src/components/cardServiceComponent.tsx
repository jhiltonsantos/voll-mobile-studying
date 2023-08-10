import { Text, Avatar, VStack } from 'native-base'
import { ButtonComponent } from './buttonComponent'

interface CardServiceProps {
    name: string
    avatar: string
    specialty: string
    date?: string
    isCompleted?: boolean
    isScheduled?: boolean
}

export function CardServiceComponent({
    name,
    avatar,
    specialty,
    date,
    isScheduled,
    isCompleted
}: CardServiceProps) {
    return (
        <VStack
            width="100%"
            backgroundColor={isCompleted ? "blue.100" : "white"}
            padding={5}
            borderRadius="lg"
            shadow={2}
        >
            <VStack flexDir="row">
                <Avatar
                    source={{ uri: avatar }}
                    size="lg"
                />
                <VStack paddingLeft={4}>
                    <Text fontSize="md" fontWeight="bold">{name}</Text>
                    <Text>{specialty}</Text>
                    <Text>{date}</Text>
                </VStack>
            </VStack>

            <ButtonComponent
                buttonText={isScheduled ? 'Cancelar' : 'Agendar consulta'}
                marginTop={4}
            />
        </VStack>
    )
}

