import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Materia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;
}