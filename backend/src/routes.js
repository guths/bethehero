const express = require('express'); //Faz todo o sistema de rotas 
const connection = require('./database/connection'); //Conexão com o banco 

const OngController = require('./controllers/OngController'); //..
const IncidentController = require('./controllers/IncidentController'); //..
const ProfileController = require('./controllers/ProfileController'); //..
const SessionController = require('./controllers/SessionController'); //Todos os controllers  

const routes = express.Router(); 

routes.post('/sessions',SessionController.create);

routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents',IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;