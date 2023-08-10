const sessions = [
  {
    id: 1,
    title: "Insira alguns dados básicos",
    inputsText: [
      {
        id: 1,
        name: "nome",
        label: "Nome",
        placeholder: "Digite seu nome completo",
      },
      {
        id: 2,
        name: "email",
        label: "Email",
        placeholder: "Digite seu email",
      },
      {
        id: 3,
        name: "senha",
        label: "Criar uma senha",
        secureTextEntry: true,
        placeholder: "Insira sua senha",
      },
      {
        id: 4,
        name: "confirmar_senha",
        label: "Repita a senha",
        secureTextEntry: true,
        placeholder: "Insira sua senha",
      },
      {
        id: 5,
        name: "cpf",
        label: "Insira seu CPF",
        placeholder: "Insira sua senha",
      },
      {
        id: 6,
        name: "imagem",
        label: "Foto de perfil",
        placeholder: "Link da foto",
      },
    ],
  },
  {
    id: 2,
    title: "Agora, mais alguns dados sobre você",
    inputsText: [
      {
        id: 1,
        name: "cep",
        label: "CEP",
        placeholder: "Digite seu CEP",
      },
      {
        id: 2,
        name: "rua",
        label: "Rua",
        placeholder: "Insira seu endereço",
      },
      {
        id: 3,
        name: "numero",
        label: "Número",
        placeholder: "Insira seu número",
      },
      {
        id: 4,
        name: "complemento",
        label: "Complemento",
        placeholder: "Insira seu complemento",
      },
      {
        id: 5,
        name: "telefone",
        label: "Telefone",
        placeholder: "(00) 00000-0000",
      },
      {
        id: 6,
        name: "estado",
        label: "Estado",
        placeholder: "Insira seu estado",
      },
    ],
  },
  {
    id: 3,
    title: "Para finalizar, quais são os seus planos?",
    inputsText: [],
    checkbox: [
      {
        id: 1,
        value: "Sulamerica",
      },
      {
        id: 2,
        value: "Unimed",
      },
      {
        id: 3,
        value: "Bradesco",
      },
      {
        id: 4,
        value: "Amil",
      },
      {
        id: 5,
        value: "Biosaúde",
      },
      {
        id: 6,
        value: "Biovida",
      },
      {
        id: 7,
        value: "Outros",
      },
    ],
  },
];

export { sessions };
