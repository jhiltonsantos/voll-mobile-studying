import { Client } from "../interfaces/Client";
import api from "./api";

export async function registerClient(client: Client) {
  if (!client) return null;
  try {
    const result = await api.post("/paciente", client);
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getClientData(id: string) {
  if (!id) return null;
  try {
    const result = await api.get(`/paciente/${id}`);
    return result.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getClientAppointments(id: string) {
  if (!id) return null;
  try {
    const result = await api.get(`/paciente/${id}/consultas`);
    return result.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}


