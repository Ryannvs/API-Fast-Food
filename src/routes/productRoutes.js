// Colocando todas as rotas referente ao usuário
const express = require('express');

const router = express.Router();

const productController = require('../controller/productController');

//Criando as rotas da nossa API 

//1° rota para obter todos os usuários

//quando ela receber uma requisição para a rota "/" ela executa o user controller.getalluser
router.get('/', productController.getAllUsers);


// //2° Rota para obter dados de um usuario por ID
// //rota para obter é o id, e chamaria o metodo 
// rota padrão de usuários porém com ID que você quer consultar
router.get('/:id', productController.getUserById);



// //3° rota para criar um novo usuário
router.post('/', productController.createUser);

// exportanto o router 
module.exports = router;