import { registerProduct } from '../models/ProductsModel.js';

const createProduct = async (req, res) => {
  const { id, name, imageUrl } = req.body;
  try {
    if (!id || !name || !imageUrl) {
      return res.status(400).json({ message: 'All fields are required: id, name, imageUrl' });
    }

    const createdAt = new Date();
    const newProduct = await registerProduct(id, name, imageUrl, createdAt);
    res.status(201).json(newProduct);
  } catch (err) {
    console.error('Error creating product', err);
    res.status(500).json({ message: 'Error creating product' });
  }
};

export { createProduct };
