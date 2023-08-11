import api from "./api";

export async function scheduleAppointment(
  date: Date,
  specialistID: string,
  clientID: string
) {
  try {
    console.log("Especialista: ", specialistID)
    console.log("Paciente: ", clientID)
    const result = await api.post('/consulta', {
      
      especialista: specialistID,
      paciente: clientID,
      data: date
    })
    console.log(result.data)
    return result.data
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function removeAppointment(id: string) {
  if (!id) return null
  try {
    const result = await api.delete(`/consulta/${id}`)
    console.log(result.data)
    return result.data
  } catch(error) {
    console.log(error)
    return null
  }
}
