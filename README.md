<h1 align="center">Task 2 - Implementation of the OpenX JavaScript Engineer Recruitment Task</h1>

### Using data from links below:

    Users: https://fakestoreapi.com/users
    Carts: https://fakestoreapi.com/carts/?startdate=2000-01-01&enddate=2023-04-07
    Products: https://fakestoreapi.com/productsThis 

### Program performs the following tasks:

1. Retrieves user, product, and shopping cart data from the Fake Store API
2. Creates a data structure containing all available product categories and the total value of products of a given
   category.
3. Finds a cart with the highest value, determines its value, and the full name of its owner.
4. Finds the two users living furthest away from each other.

### Implemented Methods

All methods are implemented in the `utils/fakeStoreUtils.js` file:

- `fetchData`: fetches data from the given URL
- `createProductCategoriesDataStructure`: creates a data structure for product categories with the total value for each
  category
- `findHighestValueCart`: finds the user with the highest cart value and returns the value and the user's name
- `findUserWithHighestCartValue`: finds the user with the highest cart value and returns the value and the user's name

#### Implementation Notes

- ###### I am aware that normally such an implementation should be split into multiple files.
- ###### For the purposes of the recruitment task, the entire implementation is in one file.

### Run Locally to retrieve the expected results:

- Please make sure you have Node.js version 17.5 or higher installed to run this program.
    You can check it: `node --version`

1. Clone the project

```bash
  git clone https://github.com/sebuszqo/OpenX_JavaScript_Engineer_Internship.git
```

2. Go to the project directory

```bash
  cd OpenX_JavaScript_Engineer
```

3. Install dependencies

```bash
  npm install
```

4. Run the program

```bash
  npm start / node index.js
```

### Run Tests - Solution contains tests to verify the implemented functionalities.

- You can find the tests in the `test` directory.
- Additionally, there are test data files available in the `tests/data` directory.

### Run Tests Locally

```bash
  npm run test / npm test
```

### Author

[Sebastian Knap](https://github.com/sebuszqo)
