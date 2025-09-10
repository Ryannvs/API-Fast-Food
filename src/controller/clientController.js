// controlar o que vai ser feito em uma requisição
const clientModel = require('../model/clientModel');

//Método do controlador para criar um novo client
const createClient = (req, res) => {
    // Pegando os dados que foram enviador pelo Body da requisição
    //Desestruturação, pegando algo estruturado e guardo em variáveis
    const {name, email, telefone, endereco, dataCadastro} = req.body;

    //validar se foram enviados senão retorna mensagem de erro
    if(!name || !email || !telefone || !endereco || !dataCadastro) {
        return res.status(400).json({mensagem: "Nome, email, telefone, endereço e data de cadastro são campos obrigatórios!"});
    
    //Se estiver tudo correto, retornará a mensagem 201 que é de sucesso
    } else {
        const newClient = clientModel.create({name, email, telefone, endereco, dataCadastro});
        res.status(201).json(newClient);
    }
}


//Função que executa o método da camada model 
const getAllClients = (req, res) => {
    const client = clientModel.findAll();
    //se der certo transforme o client em json
    res.status(200).json(client);
}

// Método do controlador para obter um client por id
const getClientById = (req, res) => {

    // Pegando o id que foi enviado na requisição 
    // id sendo passado pelo req, parametro que manipula os dados que veio pela requisição
    // res é a resposta da requisição 
    // req.params.id | pegue o parametro id 
    const id = parseInt(req.params.id);
    
    //Chamando o método findById do clientModel
    const client = clientModel.findById(id);

    if (client) {
        //Responder com status code de 200 (Sucesso!)
        // e devolver os dados do cliente em formato json
        res.status(200).json(client);
        //se não tiver sucesso
    } else {
        //devolver um 
        res.status(404).json({ mensagem: 'Cliente não encontrado no banco de dados!' });
    }
};
// Método do controlador para obter um client por id
const getClientByName = (req, res) => {

    // Pegando o id que foi enviado na requisição 
    // id sendo passado pelo req, parametro que manipula os dados que veio pela requisição
    // res é a resposta da requisição 
    // req.params.id | pegue o parametro id 
    const name = String (req.params.name);
    
    //Chamando o método findById do clientModel
    const client = clientModel.findByName(name);

    if (client) {
        //Responder com status code de 200 (Sucesso!)
        // e devolver os dados do cliente em formato json
        res.status(200).json(client);
        //se não tiver sucesso
    } else {
        //devolver um 
        res.status(404).json({ mensagem: 'Cliente não encontrado no banco de dados!' });
    }
};

// atualizar um cliente
const updateClient = (req, res) => {

    //Tranformando os dados em int e buscando o parametro ID
    const id = parseInt(req.params.id)

    //Chamando a função updateById
    const updatedClient = clientModel.updateById(id, req.body)

    //mensagem de erro
    if(updatedClient){
        res.status(200).json(updatedClient)
    } else {
        res.status(404).json({ mensagem: "cliente não encontrado!" })
    }
}
// atualizar um cliente
const deleteClient = (req, res) => {

    //Tranformando os dados em int e buscando o parametro ID
    const id = parseInt(req.params.id)

    //Chamando a função updateById
    const deletedClient = clientModel.deleteById(id, req.body)

    //mensagem de erro
    if(deletedClient){
        res.status(200).json({mensagem: "cliente deletado com sucesso!"})
    } else {
        res.status(404).json({ mensagem: "cliente não encontrado!" })
    }
}




//exportando os métodos
module.exports = {
    getAllClients,
    getClientById,
    getClientByName,
    createClient,
    updateClient,
    deleteClient
}

