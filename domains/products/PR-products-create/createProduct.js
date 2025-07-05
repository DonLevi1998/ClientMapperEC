const { products } = require('../models/productModel');

function createProduct({ id, name, imageUrl }) {
  const newProduct = {
    id,
    name,
    imageUrl,
    createdAt: new Date()
  };
  products.push(newProduct);
  return newProduct;
}

module.exports = createProduct;
