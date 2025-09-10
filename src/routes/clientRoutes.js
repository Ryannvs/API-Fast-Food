// Colocando todas as rotas referente ao usuário
const express = require('express');

const router = express.Router();

const clientController = require('../controller/clientController');

//Criando as rotas da nossa API 

//1° rota para obter todos os cliente

//quando ela receber uma requisição para a rota "/" ela executa o client controller.getalluser
router.get('/', clientController.getAllClients);


// //2° Rota para obter dados de um cliente por ID
// //rota para obter é o id, e chamaria o metodo 
// rota padrão de clientes porém com ID que você quer consultar
router.get('/:id', clientController.getClientById);

//3° rota para obter dados de um produto por nome
router.get('/:name', clientController.getClientByName);


// //4° rota para criar um novo cliente
router.post('/', clientController.createClient);

// exportanto o router 
module.exports = router;