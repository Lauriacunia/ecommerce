import { Router } from 'express';
const productRouter = Router();
import { options } from '../config/configDB.js';
import ProductController from '../controllers/productController.js';
const productController = new ProductController();


productRouter.get('/', productController.getAllProducts);
productRouter.get('/:id', productController.getOneProduct);
productRouter.post('/', productController.createProduct);
productRouter.put('/:id', productController.updateProductById);
productRouter.delete('/:id', productController.deleteProductById);

export default productRouter;