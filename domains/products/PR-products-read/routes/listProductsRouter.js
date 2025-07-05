import express from 'express';
import { getProducts } from '../controllers/ListProductsController.js';

const router = express.Router();

router.get('/list', getProducts);

export default router;
