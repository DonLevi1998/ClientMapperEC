import { listProducts } from '../models/ProductsModel.js';

const getProducts = async (req, res) => {
  try {
    const products = await listProducts();
    res.status(200).json(products);
  } catch (err) {
    console.error('Error listing products', err);
    res.status(500).json({ message: 'Error listing products' });
  }
};

export { getProducts };
