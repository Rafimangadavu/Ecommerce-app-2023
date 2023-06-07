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
  productFiltersController,
  productCountController,
  productListController,
  searchProductController,
  relatedProductController,
  productCategoryController,
  braintreeTokenController,
  braintreePaymentController
} from '../controllers/productController.js';
import braintree from 'braintree';

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
router.delete('/delete-product/:pid', deleteProductController);

//filter product
router.post('/product.filters',productFiltersController)

//product count
router.get('/product-count', productCountController)

//product per page
router.get('/product-list/:page', productListController)

//search product
router.get('/search/:keyword', searchProductController)

//similar product
router.get('/related-product/:pid/:cid', relatedProductController)

//category wise product
router.get('/product-category/:slug', productCategoryController)

//payments routes
//token
router.get('/braintree/token', braintreeTokenController)

//payments
router.post('/braintree/payment', requireSignIn, braintreePaymentController )

export default router;
