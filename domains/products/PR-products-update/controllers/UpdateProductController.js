const pool = require('../../models/productModel');

// Controlador para actualizar un producto
async function updateProduct(id, { name, description, return_date }) {
  const query = 'UPDATE products SET name = $1, description = $2, return_date = $3 WHERE id = $4 RETURNING *';
  const values = [name, description, return_date, id];
  const { rows } = await pool.query(query, values);
  return rows[0];
}

module.exports = updateProduct;
