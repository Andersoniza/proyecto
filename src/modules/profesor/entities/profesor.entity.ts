import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Profesor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 100 })
  apellido: string;
}
