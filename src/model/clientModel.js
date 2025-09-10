let client = [
  {
    "id": 1,
    "nome": "Ana Paula Souza",
    "email": "ana.souza@email.com",
    "telefone": "(11) 98877-6655",
    "endereco": "Rua das Flores, 123, Centro, São Paulo - SP, 01001-000",
    "dataCadastro": "2025-09-01T10:30:00",
    "ativo": true
  },
  {
    "id": 2,
    "nome": "Carlos Henrique Oliveira",
    "email": "carlos.henrique@email.com",
    "telefone": "(21) 97766-5544",
    "endereco": "Av. Atlântica, 456, Copacabana, Rio de Janeiro - RJ, 22070-000",
    "dataCadastro": "2025-08-15T14:15:00",
    "ativo": true
  },
  {
    "id": 3,
    "nome": "Fernanda Lima",
    "email": "fernanda.lima@email.com",
    "telefone": "(31) 96543-2100",
    "endereco": "Rua Minas Gerais, 789, Funcionários, Belo Horizonte - MG, 30140-000",
    "dataCadastro": "2025-07-20T09:00:00",
    "ativo": false
  },
  {
    "id": 4,
    "nome": "João Pedro Almeida",
    "email": "joao.pedro@email.com",
    "telefone": "(41) 97654-3322",
    "endereco": "Rua XV de Novembro, 321, Centro, Curitiba - PR, 80020-310",
    "dataCadastro": "2025-06-10T18:45:00",
    "ativo": true
  },
  {
    "id": 5,
    "nome": "Mariana Santos",
    "email": "mariana.santos@email.com",
    "telefone": "(51) 99876-4433",
    "endereco": "Av. Borges de Medeiros, 654, Centro, Porto Alegre - RS, 90020-025",
    "dataCadastro": "2025-05-25T12:20:00",
    "ativo": false
  }
]

//Função para buscar todos os cliente
const findAll = () => {
  return client;
}

// Função para buscar um cliente por id
const findById = (id) => {
  // pra cada item do meu array client, ele vai receber o id 
  // e vai fazer a comparação vai percorrer todos os itens
  // e quando o client.id, for igual a id
  // retorna o objeto
  return client.find(client => client.id === id);
}
// Função para buscar um cliente por id
const findByName = (nome) => {
  // pra cada item do meu array client, ele vai receber o id 
  // e vai fazer a comparação vai percorrer todos os itens
  // e quando o client.id, for igual a id
  // retorna o objeto
  return client.find(client => client.nome === nome);
}

//Função que adiciona um novo cliente 
const createWithId = (newClientWithId) => {
  //ternario 
  //se client.length for maior que 0, 
  // diminuindo -1 por conta que começaria no 0 
  // + 1 para gerar o próximo id sequencial
  const newId = client.length > 0 ? client[client.length - 1].id + 1 : 1;

  // Cria um novo objeto de cliente
  // ...newClientWithId (spread operator) copia os dados do novo cliente (nome, email)
  // e adiciona a propriedade 'id' com o valor que calculamos
  // tudo que veio no ...newClientWithId
  const clientWithId = {id: newId, ...newClientWithId};

  // Adiciona o cliente recém-criado ao nosso array 'users'
  client.push(clientWithId);

  // Retorna o cliente completo que acabamos de adicionar
  return clientWithId;

 
}

const createWithName = (newClientWithName) => {
 //ternario 
  //se client.length for maior que 0, 
  // diminuindo -1 por conta que começaria no 0 
  // + 1 para gerar o próximo id sequencial
  const newName = client.length > 0 ? client[client.length - 1].nome + 1 : 1;

  // Cria um novo objeto de cliente
  // ...newClientWithId (spread operator) copia os dados do novo cliente (nome, email)
  // e adiciona a propriedade 'id' com o valor que calculamos
  // tudo que veio no ...newClienteWithId
  const clientWithName = {nome: newName, ...newClientWithName};

  // Adiciona o cliente recém-criado ao nosso array 'client'
  client.push(clientWithName);

  // Retorna o cliente completo que acabamos de adicionar
  return clientWithName;
}


// Exportar as funções
module.exports = {
  findAll,
  findById,
  createWithId,
  createWithName,
  findByName
}
