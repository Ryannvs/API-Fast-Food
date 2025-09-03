// controlar o que vai ser feito em uma requisição
const productModel = require('../model/productModel');


//Função que executa o metodo da camada model 
const getAllProducts = (req, res) => {
    const products = productModel.findAll();
    //se der certo transforme o product em json
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

// Método do controlador para obter um produto por id
const getProductByName = (req, res) => {

    // Pegando o id que foi enviado na requisição 
    // id sendo passado pelo req, parametro que manipula os dados que veio pela requisição
    // res é a resposta da requisição 
    // req.params.id | pegue o parametro id 
    const name = String (req.params.name);
    
    //Chamando o método findById do clientModel
    const product = productModel.findByName(name);

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

    //validar se foram enviados senão retorna mensagem de erro
    if(!name || !email || !descricao || !preco || !categoria || !estoque) {
        return res.status(400).json({mensagem: "Nome, email, descricao, preco, categoria e estoque são campos obrigatórios!"});
    
    //Se estiver tudo correto, retornará a mensagem 201 que é de sucesso
    } else {
        const newProduct = productModel.create({name, email, descricao, preco, categoria, estoque});
        res.status(201).json(newProduct);
    }
}


//exportando os métodos
module.exports = {
    getAllProducts,
    getProductsById,
    createProduct
}

