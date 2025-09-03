// controlar o que vai ser feito em uma requisição
const clientModel = require('../model/clientModel');


//Função que executa o método da camada model 
const getAllClients = (req, res) => {
    const client = clientModel.findAll();
    //se der certo transforme o user em json
    res.status(200).json(client);
}

// Método do controlador para obter um usuario por id
const getClientById = (req, res) => {

    // Pegando o id que foi enviado na requisição 
    // id sendo passado pelo req, parametro que manipula os dados que veio pela requisição
    // res é a resposta da requisição 
    // req.params.id | pegue o parametro id 
    const id = parseInt(req.params.id);
    
    //Chamando o método findById do userModel
    const client = clientModel.findById(id);

    if (client) {
        //Responder com status code de 200 (Sucesso!)
        // e devolver os dados do usuario em formato json
        res.status(200).json(client);
        //se não tiver sucesso
    } else {
        //devolver um 
        res.status(404).json({ mensagem: 'Usuário não encontrado no banco de dados!' });
    }
};

//Método do controlador para criar um novo usuario
const createClient = (req, res) => {
    // Pegando os dados que foram enviador pelo Body da requisição
    //Desestruturação, pegando algo estruturado e guardo em variáveis
    const {name, email, telefone, endereco, dataCadastro} = req.body;

    //validar se foram enviados
    if(!name || !email || !telefone || !endereco || !dataCadastro) {
        return res.status(400).json({mensagem: "Nome, email, telefone, endereço e data de cadastro são campos obrigatórios!"});
    } else {
        const newClient = clientModel.create({name, email, telefone, endereco, dataCadastro});
        res.status(201).json(newClient);
    }
}


//exportando o metodo getAllUsers
module.exports = {
    getAllClients,
    getClientById,
    createClient
}

