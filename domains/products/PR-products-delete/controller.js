const pool = require('../models/productModel');

// Controlador para eliminar un producto
async function deleteProduct(id) {
  const { rowCount } = await pool.query('DELETE FROM products WHERE id = $1', [id]);
  return rowCount > 0;
}

module.exports = deleteProduct;
