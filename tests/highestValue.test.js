const { findHighestValueCart } = require("../utils/fakeStoreUtils");
const products = require("./data/productsTestData");
const users = require("./data/usersTestData");
const carts = require("./data/cartsTestData");

describe("findHighestValueCart throws an error because of data validation", () => {
  it("should throw an error when no carts are passed", () => {
    expect(() => findHighestValueCart([], users, products)).toThrow(
      "Invalid argument: no carts provided"
    );
  });

  it("should throw an error when no users are passed", () => {
    expect(() => findHighestValueCart(carts, [], products)).toThrow(
      "Invalid argument: no users provided"
    );
  });

  it("should throw an error when no products are passed", () => {
    expect(() => findHighestValueCart(carts, users, [])).toThrow(
      "Invalid argument: no products provided"
    );
  });

  it("should throw an error when when all parameters are empty", () => {
    expect(() => findHighestValueCart([], [], [])).toThrow(
      "Invalid argument: no carts provided"
    );
  });

  it("should throw an error when carts argument is not an array", () => {
    expect(() => findHighestValueCart({}, users, products)).toThrow(
      "Invalid argument: one of the arguments is not an array"
    );
  });

  it("should throw an error when users argument is not an array", () => {
    expect(() => findHighestValueCart(carts, {}, products)).toThrow(
      "Invalid argument: one of the arguments is not an array"
    );
  });

  it("should throw an error when products argument is not an array", () => {
    expect(() => findHighestValueCart(carts, users, {})).toThrow(
      "Invalid argument: one of the arguments is not an array"
    );
  });
});

describe("findHighestValueCart returns properly values", () => {
  it("should return the correct highest value cart and owner", () => {
    expect(findHighestValueCart(carts, users, products)).toEqual(
      "Highest value cart: 410.17 owned by John Doe"
    );
  });
});
