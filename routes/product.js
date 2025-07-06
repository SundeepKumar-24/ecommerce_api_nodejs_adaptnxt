import express from 'express';
import { addProduct, getProducts, updateProduct, deleteProduct } from '../controllers/productController.js';
import { verifyToken, isAdmin } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getProducts);
router.post('/', verifyToken, isAdmin, addProduct);
router.put('/:id', verifyToken, isAdmin, updateProduct);
router.delete('/:id', verifyToken, isAdmin, deleteProduct);

export default router;
