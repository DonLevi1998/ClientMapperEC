// CRUD methods for Products domain
// Métodos CRUD para el dominio de productos

export interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
}

let products: Product[] = [];

// Create a new product
// Crear un nuevo producto
export function createProduct(product: Product): Product {
  products.push(product);
  return product;
}

// Get all products
// Obtener todos los productos
export function getProducts(): Product[] {
  return products;
}

// Get a product by ID
// Obtener un producto por ID
export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

// Update a product by ID
// Actualizar un producto por ID
export function updateProduct(id: string, updated: Partial<Product>): Product | undefined {
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return undefined;
  products[index] = { ...products[index], ...updated };
  return products[index];
}

// Delete a product by ID
// Eliminar un producto por ID
export function deleteProduct(id: string): boolean {
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return false;
  products.splice(index, 1);
  return true;
}
