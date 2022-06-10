/**Equivalente a apiClass-> Contiene las peticiones a la DB */
import knex from 'knex';
import { options } from '../config/configDB.js';

class ProductController {
    constructor() {
    }
    
    async getAllProducts(req, res) {
        try{
            const products = await knex(options.mysql)('products').select('*');
            res.status(200).json({products: products});
        }
        catch(error){
            res.status(500).json({message: error.message});
        }
    }     
    async getOneProduct(req, res) {
        try{
            const { id } = req.params;
            const product = await knex(options.mysql)('products').select('*').where('id', id);
            !product.length ? res.status(404).json({message: 'Product not found'}) : res.status(200).json({product: product});
        }
        catch(error){
            res.status(500).json({message: error.message});
        }
    }
    async createProduct(req, res) {
        try{
            const { name, description, price, thumbnail,code,stock } = req.body;
            const product = await knex(options.mysql)('products').insert({
                name,
                description,
                price,
                thumbnail,
                code,
                stock
            });
            res.status(201).json({
                message: 'Product created',
                new_product: product});
        }
        catch(error){
            res.status(500).json({message: error.message});
        }
    }
    async updateProductById(req, res) {
        try{
            const { id } = req.params;
            const { name, description, price, thumbnail,code,stock } = req.body;
            const product = await knex(options.mysql)('products').where('id', id).update({
                name,
                description,
                price,
                thumbnail,
                code,
                stock
            });
            const product_updated = await knex(options.mysql)('products').select('*').where('id', id);
            res.status(200).json({
                message: 'Product updated',
                product: product_updated
            });
        }
        catch(error){
            res.status(500).json({message: error.message});
        }
    }
    async deleteProductById(req, res) {
        try{
            const { id } = req.params;
            const product = await knex(options.mysql)('products').where('id', id).del();
            res.status(200).json({
                message: 'Product deleted',
                product_id: product
            });
        }
        catch(error){
            res.status(500).json({message: error.message});
        }    
    }
}

export default ProductController;