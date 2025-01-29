import express from 'express';
import { createProduct, deleteProduct, getProducts, getProductsById, updateProduct } from '../controller/productController.js';


const routes = express.Router();

routes.route('/').get(getProducts).post(createProduct)
routes.route('/:id').get(getProductsById).put(updateProduct).delete(deleteProduct)

export default routes