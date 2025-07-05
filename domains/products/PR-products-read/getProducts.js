const { products } = require('../models/productModel');

function getProducts() {
  return products;
}

module.exports = getProducts;
