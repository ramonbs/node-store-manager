const productsModels = require('../models/productsModels');

const getAllProducts = async () => {
  const result = await productsModels.getAllProducts();

  return result;
};

const getProductsById = async (id) => {
  const result = await productsModels.getProductsById(id);

  return result;
};

const createProduct = async (name) => {
  const result = await productsModels.createProduct(name);

  return result;
};

const editProduct = async (productName, id) => {
  await productsModels.editProduct(productName, id);
  const [{ name }] = await productsModels.getProductsById(id);
  
  return { id, name };
};

module.exports = {
  getAllProducts,
  getProductsById,
  createProduct,
  editProduct,
};
