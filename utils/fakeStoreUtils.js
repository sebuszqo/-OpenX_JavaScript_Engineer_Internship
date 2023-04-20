// 1. Retrieves user, product and shopping cart data
/**
 * Fetches data from a specified URL and returns it as JSON.
 *
 * @param {string} url - The URL to fetch the data from.
 * @returns {Object} The fetched data as a JSON object.
 * @throws {Error} If the network request fails or the server returns an error response.
 */
async function fetchData(url) {
  const response = await fetch(url);

  if (!response.ok) {
    const message = `Failed to fetch data from ${url}. Response status: ${response.status} ${response.statusText}`;
    throw new Error(message);
  }

  return await response.json();
}

// 2. Data structure containing all available product categories and the total value of products of a given category
/**
 * Creates a data structure containing all available product categories and the total value of products of a given category.
 *
 * @param {Array<object>} products - An array of objects containing product data.
 * @returns {object} - An object containing product categories as keys and the total value of products of each category as values.
 * @throws {Error} - Throws an error if the argument is not an array or if no products are provided.
 */
function createProductCategoriesDataStructure(products) {
  // Check if the argument is an array and if it contains any elements
  switch (true) {
    case !Array.isArray(products):
      throw new Error("Invalid argument: one of the arguments is not an array");
    case products.length === 0:
      throw new Error("Invalid argument: no products provided");
    default:
      break;
  }

  // Check if the argument is an array and if it contains any elements
  const categoryValues = products.reduce((categoryValues, product) => {
    const { category, price } = product;

    // If the category already exists in the object, add the price of the product to the existing value
    if (categoryValues[category]) {
      categoryValues[category] += price;
    } else {
      // If the category doesn't exist in the object yet, create a new key-value pair
      categoryValues[category] = price;
    }

    return categoryValues;
  }, {});

  // Convert all category values to two decimal places
  for (const category in categoryValues) {
    categoryValues[category] = Number(categoryValues[category].toFixed(2));
  }
  return categoryValues;
}

// 3. Finds a cart with the highest value, determines its value and full name of its owner
/**
 * Finds a cart with the highest value, determines its value and full name of its owner
 *
 * @param {Array} carts - An array of cart objects
 * @param {Array} users - An array of user objects
 * @param {Array} products - An array of product objects
 * @returns {String} - A string containing information about the highest value cart and its owner
 * @throws {Error} - If one of the arguments is not an array, or if any of the arrays is empty
 */
function findHighestValueCart(carts, users, products) {
  // Check if arguments are arrays and not empty
  switch (true) {
    case !Array.isArray(carts) ||
      !Array.isArray(users) ||
      !Array.isArray(products):
      throw new Error("Invalid argument: one of the arguments is not an array");
    case carts.length === 0:
      throw new Error("Invalid argument: no carts provided");
    case users.length === 0:
      throw new Error("Invalid argument: no users provided");
    case products.length === 0:
      throw new Error("Invalid argument: no products provided");
    default:
      break;
  }

  // Find the cart with the highest value and its owner
  let highestValue = 0;
  let cartOwner = "";
  carts.forEach((cart) => {
    let cartValue = 0;
    cart.products.forEach((product) => {
      // Find the price of the product in the products array
      const productData = products.find((p) => p.id === product.productId);

      // Calculate the total value of the cart
      cartValue += productData.price * product.quantity;
    });
    // Check if the cart value is higher than the previous highest value
    if (cartValue > highestValue) {
      highestValue = cartValue;

      // Find the name of the cart owner
      const user = users.find((u) => u.id === cart.userId);
      cartOwner = `${user.name.firstname} ${user.name.lastname}`;
    }
  });

  // Return the highest value cart and its owner
  return `Highest value cart: ${highestValue} owned by ${cartOwner}`;
}

/**
 * Calculates the distance in kilometers between two points on Earth using the Haversine formula
 * @param {number} lat1 - The latitude of the first point in degrees
 * @param {number} long1 - The longitude of the first point in degrees
 * @param {number} lat2 - The latitude of the second point in degrees
 * @param {number} long2 - The longitude of the second point in degrees
 * @returns {number} The distance between the two points in kilometers
 */
function calculateDistance(lat1, long1, lat2, long2) {
  // Check if the two points are the same
  if (lat1 === lat2 && long1 === long2) {
    return 0;
  }

  // Earth's radius in meters
  const R = 6371e3;

  // Convert the latitude and longitude values to radians
  const radlat1 = (lat1 * Math.PI) / 180;
  const radlat2 = (lat2 * Math.PI) / 180;
  const theta = ((lat2 - lat1) * Math.PI) / 180;
  const radtheta = ((long2 - long1) * Math.PI) / 180;

  // Calculate the Haversine formula
  const a =
    Math.sin(theta / 2) * Math.sin(theta / 2) +
    Math.cos(radlat1) *
      Math.cos(radlat2) *
      Math.sin(radtheta / 2) *
      Math.sin(radtheta / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Calculate the distance in kilometers and return it with a precision of 3 decimal places
  const d = R * c;
  return Number((d / 1000).toFixed(3));
}

// 4. Finds the two users living furthest away from each other
/**
 * Finds the two users living furthest away from each other
 * @param {Array} users - An array of users, each user represented by an object containing a name and an address with geolocation data
 * @returns {string} A string containing the full names of the two farthest users and their distance in kilometers
 */
function findFarthestUsers(users) {
  // Check if the users argument is an array and contains at least two users
  switch (true) {
    case !Array.isArray(users):
      throw new Error("Invalid argument: argument is not an array");
    case users.length < 2:
      throw new Error("Invalid argument: less than two users provided");
    default:
      break;
  }

  // Calculate the distances between each pair of users and store them in an array
  const distances = [];
  for (let i = 0; i < users.length - 1; i++) {
    const user1 = users[i];
    for (let j = i + 1; j < users.length; j++) {
      const user2 = users[j];
      const distance = calculateDistance(
        user1.address.geolocation.lat,
        user1.address.geolocation.long,
        user2.address.geolocation.lat,
        user2.address.geolocation.long
      );
      // Add the distance and the names of the two users to the array
      distances.push({
        user1: `${user1.name.firstname} ${user1.name.lastname}`,
        user2: `${user2.name.firstname} ${user2.name.lastname}`,
        distance: distance,
      });
    }
  }

  // Find the pair of users with the farthest distance between them
  const farthestUsers = distances.reduce((max, current) => {
    return current.distance > max.distance ? current : max;
  });

  // Return a string with the names of the two users and the distance between them
  return `Farthest users: ${farthestUsers.user1} and ${farthestUsers.user2} with distance of ${farthestUsers.distance} km`;
}

module.exports = {
  fetchData,
  createProductCategoriesDataStructure,
  findHighestValueCart,
  findFarthestUsers,
};
