// controlar o que vai ser feito em uma requisição
const productModel = require('../model/productModel');


//Função que executa o metodo da camada model 
const getAllProducts = (req, res) => {
    const products = productModel.findAll();
    //se der certo transforme o user em json
    res.status(200).json(products);
}

// Método do controlador para obter um produto por id
const getProductsById = (req, res) => {

    // Pegando o id que foi enviado na requisição 
    // id sendo passado pelo req, parametro que manipula os dados que veio pela requisição
    // res é a resposta da requisição 
    // req.params.id | pegue o parametro id 
    const id = parseInt(req.params.id);
    
    //Chamando o método findById do productModel
    const product = productModel.findById(id);

    if (product) {
        //Responder com status code de 200 (Sucesso!)
        // e devolver os dados do produto em formato json
        res.status(200).json(product);
        //se não tiver sucesso
    } else {
        //devolver um 
        res.status(404).json({ mensagem: 'Produto não encontrado no banco de dados!' });
    }
};

//Método do controlador para criar um novo produto
const createProduct = (req, res) => {
    // Pegando os dados que foram enviador pelo Body da requisição
    //Desestruturação, pegando algo estruturado e guardo em variáveis
    const {name, email, descricao, preco, categoria, estoque} = req.body;

    //validar se foram enviados
    if(!name || !email || !descricao || !preco || !categoria || !estoque) {
        return res.status(400).json({mensagem: "Nome, email, descricao, preco, categoria e estoque são campos obrigatórios!"});
    } else {
        const newProduct = userModel.create({name, email, descricao, preco, categoria, estoque});
        res.status(201).json(newProduct);
    }
}


//exportando o metodo getAllUsers
module.exports = {
    getAllProducts,
    getProductsById,
    createProduct
}

