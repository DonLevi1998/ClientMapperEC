const { products } = require('../models/productModel');

function getProductById(id) {
  return products.find(p => p.id === id);
}

module.exports = getProductById;
