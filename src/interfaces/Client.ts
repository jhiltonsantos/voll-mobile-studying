import { Address } from "./Address"

export interface Client {
    cpf: string
    nome: string
    email: string
    endereco: Address
    senha: string
    telefone: string
    possuiPlanoSaude: boolean
    planosSaude?: number[]
    imagem?: string
}
