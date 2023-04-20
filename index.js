const {
  fetchData,
  createProductCategoriesDataStructure,
  findHighestValueCart,
  findFarthestUsers,
} = require("./utils/fakeStoreUtils");

const cardsURL =
  "https://fakestoreapi.com/carts/?startdate=2000-01-01&enddate=2023-04-07"; // URL for fetching cart data
const usersURL = "https://fakestoreapi.com/users"; // URL for fetching user data
const productsURL = "https://fakestoreapi.com/products"; // URL for fetching products data

(async () => {
  try {
    // Retrieves user, product and shopping cart data from the three URLs
    const [carts, users, products] = await Promise.all([
      fetchData(cardsURL),
      fetchData(usersURL),
      fetchData(productsURL),
    ]);
    // Log the results of the three tasks
    console.log(
      `2. ${JSON.stringify(createProductCategoriesDataStructure(products))}`
    );
    console.log(`3. ${findHighestValueCart(carts, users, products)}`);
    console.log(`4. ${findFarthestUsers(users)}`);
  } catch (error) {
    console.error(error);
  }
})();
