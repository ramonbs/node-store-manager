const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

chai.use(sinonChai);

const { expect } = chai;

const productsControllers = require("../../../src/controllers/productsControllers");
const productsService = require("../../../src/services/productsServices");
const { getAllMockWithData, getByIdMockWithData } = require('../models/mock/product.mock');

describe("Testa o controller de produtos", () => {
  describe("Sucesso", () => {
    afterEach(() => {
      sinon.restore();
    });

    it("Testa se o controller de pegar todos os produtos é chamado com sucesso", async () => {      
      sinon
        .stub(productsService, "getAllProducts")
        .resolves(getAllMockWithData);
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productsControllers.getAllProducts(req, res);

      expect(res.status).to.have.been.calledWith(200);

      expect(res.json).to.have.been.calledWith(getAllMockWithData);

      expect(productsService.getAllProducts).to.have.been.calledOnce;
    });

    it("Testa se o controller de pegar todos os produtos é chamado com sucesso", async () => {
      sinon
        .stub(productsService, "getProductsById")
        .resolves(getByIdMockWithData);

      const req = {
        params: {
          'id': 1
        }
      };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productsControllers.getProductsById(req, res);

      expect(res.status).to.have.been.calledWith(200);

      expect(res.json).to.have.been.calledWith({ id: 1, name: 'Martelo de Thor'});

      expect(productsService.getProductsById).to.have.been.calledOnce;
    });

    it("Testa se o controller de criar o produto é chamado com sucesso", async () => {
      sinon
        .stub(productsService, "createProduct")
        .resolves({ id: 1, name: 'Martelo de Thor' });

      const req = {
        body: {
          'name': 'Martelo de Thor'
        }
      };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productsControllers.createProduct(req, res);

      expect(res.status).to.have.been.calledWith(201);

      expect(res.json).to.have.been.calledWith({ id: 1, name: 'Martelo de Thor' });

      expect(productsService.createProduct).to.have.been.calledOnce;
    });
  });
});
