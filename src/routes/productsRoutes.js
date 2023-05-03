const express = require('express');
const productsControllers = require('../controllers/productsControllers');

const router = express.Router();
const productsMiddleware = require('../middlewares/productsMiddlewares');

router.get('/',
  productsMiddleware.verifyAllProduct,
  productsControllers.getAllProducts);

router.get(
  '/:id',
  productsMiddleware.verifyProductById,
  productsControllers.getProductsById,
);

router.post(
  '/',
  productsMiddleware.verifyProductCreation,
  productsControllers.createProduct,
);

router.put(
  '/:id',
  productsMiddleware.verifyProductCreation,
  productsMiddleware.verifyProductById,
  productsControllers.editProduct,
);

module.exports = router;