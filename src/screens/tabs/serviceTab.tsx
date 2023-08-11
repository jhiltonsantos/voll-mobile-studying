import { Divider, ScrollView, VStack, useToast } from 'native-base'
import { CardServiceComponent } from '../../components/cardServiceComponent';
import { TitleComponent } from '../../components/titleComponent';
import { ButtonComponent } from '../../components/buttonComponent';
import { useEffect, useState } from 'react';
import { Appointment } from '../../interfaces/Appointment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getClientAppointments } from '../../services/clientService';
import { NavigationProps } from '../../@types/navigation';
import { removeAppointment } from '../../services/appointmentService';
import { useIsFocused } from '@react-navigation/native';

const ServiceTab = ({ navigation }: NavigationProps<'ServiceTab'>) => {
  const [nextAppointment, setNextAppointment] = useState<Appointment[]>([])
  const [previousAppointment, setPreviousAppointment] = useState<Appointment[]>([])
  const [reloadKey, setReloadKey] = useState(false);
  const toast = useToast()
  const isFocused = useIsFocused();

  useEffect(() => {
    async function getAppoiments() {
      const clientID = await AsyncStorage.getItem('clientID')
      if (!clientID) return

      const allAppoiments: Appointment[] = await getClientAppointments(clientID)
      const nowDate = new Date();

      console.log(allAppoiments[0])

      const next = allAppoiments.filter((appoiment) => new Date(appoiment.data) > nowDate)
      const previous = allAppoiments.filter((appoiment) => new Date(appoiment.data) <= nowDate)

      setNextAppointment(next)
      setPreviousAppointment(previous)
    }
    getAppoiments()
  }, [isFocused, reloadKey])

  async function cancelAppointment(idAppointment: string) {
    if (!idAppointment) return
    const result = await removeAppointment(idAppointment)
    if (result) {
      toast.show({
        title: 'Consulta cancelada com sucesso',
        backgroundColor: 'green.500',
      })
      setReloadKey(!reloadKey)
    } else {
      toast.show({
        title: 'Erro ao cancelar consulta',
        backgroundColor: 'red.500',
      })
    }
  }

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
        onPress={() => { navigation.navigate('ExploreTab') }}
      />

      <TitleComponent
        color="blue.500"
        fontSize="lg"
        alignSelf="flex-start"
        marginBottom={2}
      >
        Próximas consultas
      </TitleComponent>


      {nextAppointment?.map((appoiment) => (
        <VStack
          marginTop={5}
        >
          <CardServiceComponent
            key={appoiment?.id}
            name={appoiment?.especialista?.nome}
            specialty={appoiment?.especialista?.especialidade}
            avatar={appoiment?.especialista?.imagem}
            date={appoiment.data}
            isScheduled
            onPress={() => cancelAppointment(appoiment?.id)}
          />
        </VStack>
      ))}

      <Divider marginTop={5} />

      <TitleComponent
        color="blue.500"
        fontSize="lg"
        alignSelf="flex-start"
        marginBottom={2}
      >
        Consultas passadas
      </TitleComponent>

      {previousAppointment?.map((appoiment) => (
        <VStack
          marginTop={5}
        >
          <CardServiceComponent
            key={appoiment?.id}
            name={appoiment?.especialista?.nome}
            specialty={appoiment?.especialista?.especialidade}
            avatar={appoiment?.especialista?.imagem}
            date={appoiment.data}
            isCompleted
            onPress={() => navigation.navigate('ScheduleScreen', { specialistID: appoiment?.especialista?.id })}
          />
        </VStack>
      ))}
      <Divider marginTop={5} marginBottom={20} />
    </ScrollView>
  )
}

export default ServiceTab; 