const productsService = require('../services/productsServices');

const getAllProducts = async (_req, res) => {
  const result = await productsService.getAllProducts();

  return res.status(200).json(result);
};

const getProductsById = async (req, res) => {
  const { id } = req.params;

  const result = await productsService.getProductsById(id);

  const { name } = result[0];

  return res.status(200).json({ id: +id, name });
};

const createProduct = async (req, res) => {
  const { name } = req.body;

  const result = await productsService.createProduct(name);

  return res.status(201).json(result);
};

const editProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const result = await productsService.editProduct(name, id);

  return res.status(200).json(result);
};

module.exports = {
  getAllProducts,
  getProductsById,
  createProduct,
  editProduct,
};
