import api from "./api";

export async function searchSpecialistByState(
  estado: string,
  especialidade: string
) {
  try {
    const result = await api.get("/especialista/busca", {
      params: {
        estado,
        especialidade,
      },
    });
    return result.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
