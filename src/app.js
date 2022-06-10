import express from 'express';
import morgan from 'morgan';
const app = express();

import productRouter from './routes/productRoutes.js';

/** Middleware */
app.use(express.static( '/public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/** Routes */

app.use('/api/products', productRouter);
//app.use('/api/cart', CartRoutes); 


/** CONNECTION SERVER */
const PORT = process.env.PORT || 8080;

try {
    app.listen(PORT);
    console.log(`Server on port ${PORT}...`)
} catch (error) {
    console.log('Error de conexión con el servidor...', error)
}