const express = require('express');
const salesControllers = require('../controllers/salesControllers');

const router = express.Router();
const salesMiddlewares = require('../middlewares/salesMiddlewares');

router.post(
  '/',
  salesMiddlewares.verifyProductId,
  salesMiddlewares.verifyQuantity,
  salesMiddlewares.verifyIfQuantityIsGreaterThan,
  salesMiddlewares.verifyIfAProductExist,
  salesControllers.registerSale,
);

router.get('/', salesControllers.getAllSales);

router.get('/:id', salesMiddlewares.verifyIfSaleExist, salesControllers.getSalesById);

module.exports = router;
