let product = [
    {
      "id": 1,
      "nome": "Cheeseburger Clássico",
      "descricao": "Hambúrguer com queijo cheddar, alface, tomate e molho especial",
      "preco": 18.90,
      "categoria": "Lanche",
      "estoque": 50,
      "ativo": true
    },
    {
      "id": 2,
      "nome": "Batata Frita Grande",
      "descricao": "Porção de batata frita crocante, tamanho grande",
      "preco": 12.00,
      "categoria": "Acompanhamento",
      "estoque": 80,
      "ativo": true
    },
    {
      "id": 3,
      "nome": "Refrigerante 500ml",
      "descricao": "Copo de refrigerante gelado (Coca, Guaraná ou Fanta)",
      "preco": 8.00,
      "categoria": "Bebida",
      "estoque": 100,
      "ativo": true
    },
    {
      "id": 4,
      "nome": "Milkshake de Chocolate",
      "descricao": "Milkshake cremoso de chocolate, 400ml",
      "preco": 15.50,
      "categoria": "Sobremesa",
      "estoque": 30,
      "ativo": true
    },
    {
      "id": 5,
      "nome": "Combo Família",
      "descricao": "2 Cheeseburgers, 2 Batatas Grandes e 2 Refrigerantes 500ml",
      "preco": 65.00,
      "categoria": "Combo",
      "estoque": 15,
      "ativo": false
    }
  ]
  
  
  //Função para buscar todos os produtos
  const findAll = () => {
    return product;
  }
  
  // Função para buscar um produto por id
  const findById = (id) => {
    // pra cada item do meu array product, ele vai receber o id 
    // e vai fazer a comparação vai percorrer todos os itens
    // e quando o product.id, for igual a id
    // retorna o objeto
    return product.find(product => product.id === id);
  }
  // Função para buscar um produto por id
  const findByName = (nome) => {
    // pra cada item do meu array product, ele vai receber o id 
    // e vai fazer a comparação vai percorrer todos os itens
    // e quando o product.id, for igual a id
    // retorna o objeto
    return product.find(product => product.nome === nome);
  }
  
  //Função que adiciona um novo produto 
  const create = (newProductWithId) => {
    //ternario 
    //se product.length for maior que 0, 
    // diminuindo -1 por conta que começaria no 0 
    // + 1 para gerar o próximo id sequencial
    const newId = product.length > 0 ? product[product.length - 1].id + 1 : 1;
  
    // Cria um novo objeto de produto
    // ...newProductWithId (spread operator) copia os dados do novo produto (nome, email)
    // e adiciona a propriedade 'id' com o valor que calculamos
    // tudo que veio no ...newProductWithId
    const productWithId = {id: newId, ...newProductWithId};
  
    // Adiciona o produto recém-criado ao nosso array 'product'
    client.push(productWithId);
  
    // Retorna o produto completo que acabamos de adicionar
    return productWithId;
  
   
  }
  //função que altera/atualiza os dados de um produto existente
const updateById = (id, newData) => {

  // procura o indice (posição) do produto no "array" de produtos que possua o id informado
  const productIndex = product.findIndex(p => p.id === id)

  // verifica se encontrou o produto
  if (productIndex >= 0) {
      // "substitui" o produto mantendo o id original
      // ...newData copia todas as propriedades do newData
      product[productIndex] = { id, ...newData }

      // retorna o produto atualizado para o controller
      return product[productIndex]
  }
}

//função que deleta um produto
const deleteById = (id) => {

  const productIndex = product.findIndex(p => p.id === id)

  if (productIndex >= 0) {

      // splice retorna um array com o elemento removido (1 é a quantidade removido)
      const removed = product.splice(productIndex, 1)

      // aqui é [0] porque é o primeiro (e unico) elemento removido
      return removed[0]
  }
}
  
  
  // Exportar as funções
  module.exports = {
    findAll,
    findById,
    create,
    findByName,
    updateById,
    deleteById
  
  }