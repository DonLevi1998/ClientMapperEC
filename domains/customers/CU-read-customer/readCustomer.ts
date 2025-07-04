// Read customers
// Leer clientes
import { Customer, customers } from '../customer.model';

export function getCustomers(): Customer[] {
  return customers;
}

export function getCustomerById(id: string): Customer | undefined {
  return customers.find(c => c.id === id);
}
