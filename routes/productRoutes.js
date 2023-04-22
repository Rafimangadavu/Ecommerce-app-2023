import express from 'express';
import formidable from 'express-formidable';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import {
  createProductController,
  getProductsController,
  getSingleProductsController,
  productPhotoController,
  deleteProductController,
  updateProductController,
} from '../controllers/productController.js';

const router = express.Router();

//routes
//create products
router.post(
  '/create-product',
  formidable(),
  requireSignIn,
  isAdmin,
  createProductController
);

// update product
router.put(
  '/update-product/:pid',
  formidable(),
  requireSignIn,
  isAdmin,
  updateProductController
);

//get all products
router.get('/get-product', getProductsController);

//single product
router.get('/get-product/:slug', getSingleProductsController);

//get photo
router.get('/product-photo/:pid', productPhotoController);

//delete product
router.delete('/product/pid', deleteProductController);

export default router;
