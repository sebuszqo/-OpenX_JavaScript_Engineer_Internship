const carts = [
  {
    id: 1,
    userId: 1,
    date: "2022-01-01T00:00:00.000Z",
    products: [
      { productId: 1, quantity: 2 },
      { productId: 2, quantity: 1 },
      { productId: 3, quantity: 3 },
    ],
    __v: 0,
  },
  {
    id: 2,
    userId: 2,
    date: "2022-02-01T00:00:00.000Z",
    products: [
      { productId: 4, quantity: 1 },
      { productId: 5, quantity: 2 },
    ],
    __v: 0,
  },
  {
    id: 3,
    userId: 1,
    date: "2022-03-01T00:00:00.000Z",
    products: [
      { productId: 1, quantity: 1 },
      { productId: 2, quantity: 2 },
      { productId: 3, quantity: 1 },
    ],
    __v: 0,
  },
];

module.exports = carts;
