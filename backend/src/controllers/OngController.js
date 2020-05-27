const connection = require('../database/connection')
const crypto = require('crypto');

module.exports = {

    async index(request, response) {

        //Seleciona todas as ongs do banco
        const ongs = await connection('ongs').select('*');
        
        //Retorna a resposta com a variavel que armazena as ongs
        return response.json(ongs);
        
    },

    async create(request, response) {

        //Pegando dado por dado dentro do corpo da requisição, feito com desestruturação de dados
        const {name, email, whatsapp, city, uf} = request.body;

        //Gerando id aleatorio
        const id = crypto.randomBytes(4).toString('HEX');

        //Inserindo os dados no banco
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        //Apos o cadastro a ong precisa saber qual é seu id, sendo assim o response retornara o id
        return response.json({ id });
    }
}