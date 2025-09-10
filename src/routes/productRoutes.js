// Colocando todas as rotas referente ao usuário
const express = require('express');

const router = express.Router();

const productController = require('../controller/productController');

// rota para obter todos os produtos
router.get('/', productController.getAllProducts)

// rota para obter produto por ID
router.get('/:id', productController.getProductById)

// rota para obter produto pelo nome
// necessario o /nome diferente do id acima, porque se não fica ambiguo, por exemplo "1" poderia ser ID ou produto, então precisa diferenciar
router.get('/nome/:nome', productController.getProductByName)

// rota para criar um novo produto
router.post('/', productController.createProduct)

// atualizar produto
router.put('/:id', productController.updateProduct)

// deletar produto
router.delete('/:id', productController.deleteProduct)

// exportanto o router 
module.exports = router;