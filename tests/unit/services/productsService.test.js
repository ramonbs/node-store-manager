const { expect } = require("chai");
const sinon = require("sinon");

const productsService = require("../../../src/services/productsServices");
const productModels = require("../../../src/models/productsModels");

describe("Testa o service de produtos", () => {
  describe("Sucesso", () => {
    afterEach(() => {
      sinon.restore();
    });

    it("Testa se o service de todos os produtos é chamado com sucesso", async () => {
      sinon.stub(productModels, "getAllProducts").resolves([
        {
          id: 1,
          name: "Martelo de Thor",
        },
        {
          id: 2,
          name: "Traje de encolhimento",
        },
        {
          id: 3,
          name: "Escudo do Capitão América",
        },
      ]);

      const result = await productsService.getAllProducts();

      expect(result).to.be.an("array");
      expect(result).to.have.length(3);

      expect(productModels.getAllProducts).to.have.been.calledOnce;
    });

    it("Testa se o service de pegar o produto por ID é chamado com sucesso", async () => {
      sinon.stub(productModels, "getProductsById").resolves([
        {
          id: 1,
          name: "Martelo de Thor",
        },
      ]);
      
      const result = await productsService.getProductsById(1);

      expect(result).to.have.length(1);
      expect(result).to.be.an("array");

      expect(productModels.getProductsById).to.have.been.calledOnce;
    });

    it("Testa se o service de criar o produto por ID é chamado com sucesso", async () => {
      sinon.stub(productModels, "createProduct").resolves({
        id: 1,
        name: "Martelo de Thor",
      });

      const result = await productsService.createProduct("Martelo de Thor");

      expect(result).to.be.an("object");
      expect(result).to.have.property("id");
      expect(result).to.have.property("name");

      expect(productModels.createProduct).to.have.been.calledOnce;
    });
  });

});
