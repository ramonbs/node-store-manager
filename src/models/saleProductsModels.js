const connection = require('./connection');

const registerSales = async (insertId, productId, quantity) => {
    const [result] = await connection.execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?);',
      [insertId, productId, quantity],
    );

    return result;
};

module.exports = {
  registerSales,
};