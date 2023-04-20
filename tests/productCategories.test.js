const products = require("./data/productsTestData");
const {
  createProductCategoriesDataStructure,
} = require("../utils/fakeStoreUtils");

describe("createProductCategoriesDataStructure throws an error because of data validation", () => {
  it("should return an error when no products are passed", () => {
    expect(() => createProductCategoriesDataStructure([])).toThrow(
      "Invalid argument: no products provided"
    );
  });
  it("should return an error when products argument is not an array", () => {
    expect(() => createProductCategoriesDataStructure(undefined)).toThrow(
      "Invalid argument: one of the arguments is not an array"
    );
  });
});

describe("createProductCategoriesDataStructure returns properly values", () => {
  it("should return correct data structure", () => {
    const expected = {
      "men's clothing": 188.24,
      "women's clothing": 139.98,
      home: 210.98,
    };
    expect(createProductCategoriesDataStructure(products)).toEqual(expected);
  });

  it("should sum prices for products in the same category", () => {
    const expected = {
      "men's clothing": 188.24,
      "women's clothing": 139.98,
      home: 210.98,
    };
    const result = createProductCategoriesDataStructure(products);
    expect(result["men's clothing"]).toEqual(expected["men's clothing"]);
    expect(result["women's clothing"]).toEqual(expected["women's clothing"]);
    expect(result["home"]).toEqual(expected["home"]);
  });
});
