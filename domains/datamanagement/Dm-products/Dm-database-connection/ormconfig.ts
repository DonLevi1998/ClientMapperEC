// TypeORM configuration for PostgreSQL
// Configuración de TypeORM para PostgreSQL
import { DataSource } from 'typeorm';
import { Product } from '../Dm-product.entities/product.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost', // Cambia según tu entorno
  port: 5432,
  username: 'postgres', // Cambia según tu usuario
  password: 'postgres', // Cambia según tu contraseña
  database: 'clientmapper', // Cambia según tu base de datos
  synchronize: false, // Usar migraciones, no sincronización automática
  logging: true,
  entities: [Product],
  migrations: [__dirname + '/../Dm-migrations/*.{ts,js}'],
  migrationsTableName: 'migrations',
});
