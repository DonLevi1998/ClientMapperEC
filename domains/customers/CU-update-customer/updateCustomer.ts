// Update a customer
// Actualizar un cliente
import { Customer, customers } from '../customer.model';

export function updateCustomer(id: string, updated: Partial<Customer>): Customer | undefined {
  const index = customers.findIndex(c => c.id === id);
  if (index === -1) return undefined;
  customers[index] = { ...customers[index], ...updated };
  return customers[index];
}
