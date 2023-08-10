import { VStack, Divider, ScrollView } from 'native-base'
import { CardServiceComponent } from '../components/cardServiceComponent';
import { TitleComponent } from '../components/titleComponent';
import { ButtonComponent } from '../components/buttonComponent';

const ServiceTab = () => {
    return (
        <ScrollView padding={5}>
            <TitleComponent 
            color="blue.500"
            alignSelf={"center"}>
                Minhas Consultas
            </TitleComponent>

            <ButtonComponent
                buttonText='Agendar nova consulta'
                marginTop={5}
                marginBottom={5}
            />

            <TitleComponent
                color="blue.500"
                fontSize="lg"
                alignSelf="flex-start"
                marginBottom={2}
            >
                Próximas consultas
            </TitleComponent>

            <CardServiceComponent
                name='Dr. Hilton Santos'
                specialty='Oftalmologista'
                avatar='https://github.com/jhiltonsantos.png'
                date='04/08/2023'
                isScheduled
            />

            <Divider marginTop={5} />

            <TitleComponent
                color="blue.500"
                fontSize="lg"
                alignSelf="flex-start"
                marginBottom={2}
            >
                Consultas passadas
            </TitleComponent>

            <CardServiceComponent
                name='Dr. Hilton Santos'
                specialty='Oftalmologista'
                avatar='https://github.com/jhiltonsantos.png'
                date='04/08/2023'
                isCompleted
            />
        </ScrollView>
    )
}

export default ServiceTab; 