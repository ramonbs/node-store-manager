const connection = require('./connection');

const getAllProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products ORDER BY id;',
  );

  return result;
};

const getProductsById = async (id) => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id=?;',
    [id],
  );

  return result;
};

const createProduct = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?);',
    [name],
  );

  return { id: insertId, name };
};

const editProduct = async (name, id) => {
  const [result] = await connection.execute(
    'UPDATE StoreManager.products SET name=? WHERE id=?;',
    [name, id],
  );

  return result;
};

module.exports = {
  getAllProducts,
  getProductsById,
  createProduct,
  editProduct,
};
