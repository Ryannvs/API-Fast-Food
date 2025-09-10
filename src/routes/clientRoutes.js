// Colocando todas as rotas referente ao usuário
const express = require('express');

const router = express.Router();

const clientController = require('../controller/clientController');

// rota para obter todos os clientes
router.get('/', clientController.getAllClients)

// rota para obter cliente por ID
router.get('/:id', clientController.getClientById)

// rota para obter cliente pelo nome
// necessario o /nome diferente do id acima, porque se não fica ambiguo, por exemplo "1" poderia ser ID ou cliente, então precisa diferenciar
router.get('/nome/:name', clientController.getClientByName)

// rota para criar um novo cliente
router.post('/', clientController.createClient)

// atualizar cliente
router.put('/', clientController.updateClient)

// deletar cliente
router.delete('/:id', clientController.deleteClient)

// exportanto o router 
module.exports = router;