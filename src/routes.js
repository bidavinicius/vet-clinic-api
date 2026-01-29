import { Router } from 'express';
import { listarVet, cadastrarVet } from './controllers/vetController.js';
import { listarAnimal, buscarAnimalPorId, buscarAnimalPorNome,cadastrarAnimal, atualizarAnimal, deletarAnimal } from './controllers/animalController.js';
import { listarConsulta, cadastrarConsulta } from './controllers/consultaController.js';

const routes = Router();

routes.get('/veterinarios', listarVet);
routes.post('/veterinarios', cadastrarVet);

routes.get('/animais', listarAnimal);
routes.get('/animais/:id', buscarAnimalPorId);
routes.get('/animais/nome/:nome', buscarAnimalPorNome);
routes.post('/animais', cadastrarAnimal);
routes.put('/animais/:id', atualizarAnimal);
routes.delete('/animais/:id', deletarAnimal);

routes.get('/consultas', listarConsulta);
routes.post('/consultas', cadastrarConsulta);

export default routes;