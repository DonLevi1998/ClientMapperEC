import { DataSource } from 'typeorm';
import { Product } from '../Dm-product.entities/product.entity';
// TypeORM configuration for PostgreSQL
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: ' rds-postgres-db.cf4mlglmpycd.us-east-1.rds.amazonaws.com',
  port: 5432,
  username: 'postgres', 
  password: 'Pollitoboy1998', 
  database: 'clientmapper', 
  synchronize: false, 
  logging: true,
  entities: [Product],
  migrations: [__dirname + '/../Dm-migrations/*.{ts,js}'],
  migrationsTableName: 'migrations',
});
//command migration npx typeorm migration:generate -d ./Dm-products/Dm-database-connection/ormconfig.ts ./Dm-products/Dm-migrations/InitialMigration