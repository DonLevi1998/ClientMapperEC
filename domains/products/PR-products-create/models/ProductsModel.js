import { connectDB } from '../config/postgredb.js';

const registerProduct = async (id, name, imageUrl, createdAt) => {
  try {
    const query = `
      INSERT INTO products (id, name, imageUrl, createdAt)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [id, name, imageUrl, createdAt];

    const result = await connectDB.query(query, values);

    return result.rows[0]; // Returns the registered product
  } catch (error) {
    console.error('Error registering product:', error);
    throw error;
  }
};

export { registerProduct };
