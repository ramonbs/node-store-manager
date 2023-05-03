const productsService = require('../services/productsServices');

const verifyAllProduct = async (_req, res, next) => {
  const result = await productsService.getAllProducts();

  if (!result) {
    return res
      .status(422)
      .json({ err: { code: 'invalid_data', message: 'Wrong id format' } });
  }

  return next();
};

const verifyProductById = async (req, res, next) => {
  const { id } = req.params;

  const result = await productsService.getProductsById(id);

  if (!result || result.length === 0) {
    return res.status(404).json({ message: 'Product not found' });
  }

  return next();
};

const verifyProductCreation = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).send({ message: '"name" is required' });
  }

  if (name.length < 5) {
    return res
      .status(422)
      .send({ message: '"name" length must be at least 5 characters long' });
  }

  return next();
};

module.exports = {
  verifyAllProduct,
  verifyProductById,
  verifyProductCreation,
};
