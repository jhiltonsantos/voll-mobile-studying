import { Text, Avatar, VStack } from 'native-base'
import { ButtonComponent } from './buttonComponent'
import { ReactNode } from 'react';

interface CardServiceCenterProps {
    name: string
    avatar: string
    specialty: string
}

export function CardServiceCenterComponent({
    name,
    avatar,
    specialty,
}: CardServiceCenterProps) {
    return (
        <VStack
            width="100%"
            backgroundColor={"white"}
            padding={5}
            borderRadius="lg"
            shadow={2}
        >
            <VStack
                flexDir="row"
                alignItems="center"
                justifyContent="center"
            >
                <Avatar
                    source={{ uri: avatar }}
                    size="lg"
                />
                <VStack paddingLeft={4}>
                    <Text fontSize="md" fontWeight="bold">{name}</Text>
                    <Text>{specialty}</Text>
                </VStack>
            </VStack>

            <ButtonComponent
                buttonText={'Agendar consulta'}
                marginTop={4}
            />
        </VStack>
    )
}

