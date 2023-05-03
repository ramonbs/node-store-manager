const saleModels = require('../models/saleModels');
const saleProductsModels = require('../models/saleProductsModels');

const registerSale = async (body) => {
  const { insertId } = await saleModels.registerSalesDate();

  const result = body.map(({ productId, quantity }) =>
    saleProductsModels.registerSales(insertId, productId, quantity));

  await Promise.all(result);

  return {
    id: insertId,
    itemsSold: body,
  };
};

const getAllSales = async () => {
  const result = await saleModels.getAllSales();

  return result;
};

const getSalesById = async (id) => {
  const result = await saleModels.getSalesById(id);
  const newResult = result.map((e) => {
    const { date, productId, quantity } = e;
    return {
      date,
      productId,
      quantity,
    };
  });

  return newResult;
};

module.exports = {
  registerSale,
  getAllSales,
  getSalesById,
};
