// Customer model and in-memory storage
// Modelo de cliente y almacenamiento en memoria
export interface Customer {
  id: string;
  name: string;
  email: string;
  address?: string;
}

export let customers: Customer[] = [];
