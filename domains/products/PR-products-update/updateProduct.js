const { products } = require('../models/productModel');

function updateProduct(id, updated) {
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return undefined;
  // Solo se permite actualizar name e imageUrl
  products[index] = {
    ...products[index],
    ...('name' in updated ? { name: updated.name } : {}),
    ...('imageUrl' in updated ? { imageUrl: updated.imageUrl } : {})
  };
  return products[index];
}

module.exports = updateProduct;
