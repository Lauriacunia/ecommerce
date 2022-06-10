import { Router } from 'express';
const cartRoutes = Router();
//import { getAll, getOne, create, update, deleteById } from '../controllers/cartController';

cartRoutes.get('/', getAll);
cartRoutes.get('/:id', getOne);
cartRoutes.post('/', create);
cartRoutes.put('/:id', update);
cartRoutes.delete('/:id', deleteById);

module.exports = cartRoutes;