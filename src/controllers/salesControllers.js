const salesServices = require('../services/salesServices');

const registerSale = async (req, res) => {
    const { body } = req;
    const result = await salesServices.registerSale(body);
    if (result) return res.status(201).json(result);
};

const getAllSales = async (_req, res) => {
  const result = await salesServices.getAllSales();

  if (result) return res.status(200).json(result);
};

const getSalesById = async (req, res) => {
  const { id } = req.params;
  const result = await salesServices.getSalesById(id);

  if (result) return res.status(200).json(result);
};

module.exports = {
  registerSale,
  getAllSales,
  getSalesById,
};