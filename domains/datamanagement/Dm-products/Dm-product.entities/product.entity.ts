// Product entity for TypeORM
// Entidad Product para TypeORM
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 100 })
  name!: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price!: number;

  @Column({ type: 'text', nullable: true })
  description?: string;
}
