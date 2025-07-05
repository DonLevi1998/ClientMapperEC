import { connectDB } from '../../../config/postgredb.js';

const listProducts = async () => {
  try {
    const query = 'SELECT * FROM products ORDER BY createdAt DESC';
    const result = await connectDB.query(query);
    return result.rows;
  } catch (error) {
    console.error('Error listing products:', error);
    throw error;
  }
};

export { listProducts };
