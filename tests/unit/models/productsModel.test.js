const { expect } = require("chai");
const sinon = require("sinon");

const questionModel = require("../../../src/models/productsModels");
const connection = require("../../../src/models/connection");
const {
  getAllMockWithData,
  getByIdMockWithData,
} = require("./mock/product.mock");

describe("Testa o model de produtos", () => {
  describe("Sucesso", () => {
    afterEach(() => {
      sinon.restore();
    });

    it("Testa se o model de produtos é chamado com sucesso com getAllWithData", async () => {
      sinon.stub(connection, "execute").resolves([getAllMockWithData]);

      const result = await questionModel.getAllProducts();

      expect(result).to.be.deep.equal(getAllMockWithData);

      expect(connection.execute).to.have.been.calledOnce;
      connection.execute.restore();
    });
  });

  it("Testa se o model de produtos é chamado com sucesso com getByIdMockWithData", async () => {
    sinon.stub(connection, "execute").resolves([getByIdMockWithData]);

    const result = await questionModel.getProductsById(1);

    expect(result).to.be.deep.equal(getByIdMockWithData);

    expect(connection.execute).to.have.been.calledOnce;
    connection.execute.restore();
  });

  it("Testa se o model de produtos é chamado com sucesso com para criar os produtos", async () => {
    sinon.stub(connection, "execute").resolves([getAllMockWithData]);

    const result = await questionModel.createProduct({
      name: "Martelo de Thor",
    });

    expect(result).to.be.an("object");
    expect(result).to.contain.keys(["id", "name"]);
    connection.execute.restore();
  });
});
