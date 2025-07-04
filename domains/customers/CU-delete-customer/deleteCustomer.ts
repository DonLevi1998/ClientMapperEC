// Delete a customer
// Eliminar un cliente
import { customers } from '../customer.model';

export function deleteCustomer(id: string): boolean {
  const index = customers.findIndex(c => c.id === id);
  if (index === -1) return false;
  customers.splice(index, 1);
  return true;
}
