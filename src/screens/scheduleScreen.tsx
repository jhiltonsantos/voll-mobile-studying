import { Input, VStack, useToast } from 'native-base'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { ButtonComponent } from '../components/buttonComponent'
import { convertStringToDate } from '../utils/convertStringToDate'
import { scheduleAppointment } from '../services/appointmentService'

export default function ScheduleScreen({ route, navigation }: any) {
  const [date, setDate] = useState('')
  const toast = useToast()

  async function toSchedule() {
    const clientID = await AsyncStorage.getItem('clientID')
    const { specialistID } = route.params
    if (!clientID || !specialistID || !date) return
    const dateFormatted = convertStringToDate(date)
    const result = await scheduleAppointment(dateFormatted, specialistID, clientID)
    if (result) {
      toast.show({
        title: 'Consulta agendada com sucesso',
        backgroundColor: 'green.500',
      })
      return navigation.goBack()
    }
    toast.show({
      title: 'Erro ao agendar consulta',
      description: 'Horário indisponível',
      backgroundColor: 'red.500',
    })
  }

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" padding={5}>
      <Input
        placeholder="Digite a data"
        onChangeText={setDate}
      />

      <ButtonComponent
        buttonText='Agendar'
        onPress={toSchedule}
      />
    </VStack>
  )
}