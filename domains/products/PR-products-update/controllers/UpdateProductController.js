const pool = require('../../models/productModel');

// Controlador para actualizar un producto
async function updateProduct(id, { name, imageUrl }) {
  const query = 'UPDATE products SET name = $1, imageUrl = $2 WHERE id = $3 RETURNING *';
  const values = [name, imageUrl, id];
  const { rows } = await pool.query(query, values);
  return rows[0];
}

module.exports = updateProduct;
