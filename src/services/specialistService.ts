import api from "./api";

export async function searchSpecialistByState(
  state: string,
  specialty: string
) {
  try {
    const result = await api.get("/especialista/busca", {
      params: {
        estado: state,
        especialidade: specialty,
      },
    });
    return result.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
