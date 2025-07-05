const pool = require('../models/productModel');

// Controlador para obtener todos los productos
async function getProducts() {
  const { rows } = await pool.query('SELECT * FROM products');
  return rows;
}

// Controlador para obtener un producto por ID
async function getProductById(id) {
  const { rows } = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
  return rows[0];
}

module.exports = {
  getProducts,
  getProductById
};
