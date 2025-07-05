const pool = require('../models/productModel');

// Controlador para crear un producto
async function createProduct({ id, name, imageUrl }) {
  const createdAt = new Date();
  const query = 'INSERT INTO products (id, name, imageUrl, createdAt) VALUES ($1, $2, $3, $4) RETURNING *';
  const values = [id, name, imageUrl, createdAt];
  const { rows } = await pool.query(query, values);
  return rows[0];
}

module.exports = createProduct;
