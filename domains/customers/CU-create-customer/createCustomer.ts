// Create a new customer
// Crear un nuevo cliente
import { Customer, customers } from '../customer.model';

export function createCustomer(customer: Customer): Customer {
  customers.push(customer);
  return customer;
}
