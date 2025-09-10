//Importar o módulo Express 
const express = require('express');

//Importar as rotas de usuário
const clientRoutes = require('./src/routes/clientRoutes');

const productRoutes = require('./src/routes/productRoutes');


//Criar uma aplicação express
//Servidor web, recebendo requisições 
const app = express();

//Definir um middleware para analisar Json no corpo das requisições
app.use(express.json());

//Definir a porta do servidor que irá escutar
const porta = 8000;

//Definir a rota de teste API
            //req e res são parametros, quando chamar a função get(tipo de requisição) http get
            // a "/" é a rota 
            //req request
            //res é a (resposta) e é o objeto que o servidor usa para enviar os dados de volta para o cliente
app.get('/', (req, res) => {
    res.send("API de usuários está funcionando");
})

//Usando as rotas de cliente
//pra esse endereço eu quero centralizar 
app.use('/api/client', clientRoutes);

app.use('/api/product', productRoutes);

//Inicia o servidor
app.listen(porta, ()=> {
    console.log(`Servidor rodando em http://localhost:${porta}`);
})