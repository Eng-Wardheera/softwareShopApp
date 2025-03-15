import express from 'express';
import { addToCarts, addToWishlist } from '../controller/cartController.js';

const router = express.Router();



router.route('/').post(addToCarts);

router.route('/add-to-wishlist').post(addToWishlist);

export default router;