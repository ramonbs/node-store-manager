const camelize = require('camelize');
const connection = require('./connection');

const registerSalesDate = async () => {
  const [result] = await connection.execute(
      'INSERT INTO StoreManager.sales (date) VALUES (NOW())',
    );

    return result;
};

const getAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT sp.sale_id, s.date, sp.product_id, sp.quantity FROM StoreManager.sales AS s
     INNER JOIN StoreManager.sales_products AS sp
     WHERE s.id = sp.sale_id;`,
  );
  const camelizedResult = camelize(result);
  return camelizedResult;
};

const getSalesById = async (id) => {
  const [result] = await connection.execute(
    `SELECT sp.sale_id, s.date, sp.product_id, sp.quantity FROM StoreManager.sales AS s
     INNER JOIN StoreManager.sales_products AS sp
     WHERE sp.sale_id = ? AND s.id = sp.sale_id;`,
    [id],
  );

  const camelizedResult = camelize(result);
  return camelizedResult;
};

module.exports = {
  registerSalesDate,
  getAllSales,
  getSalesById,
};