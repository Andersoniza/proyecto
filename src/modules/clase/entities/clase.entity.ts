import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Materia } from '../../materia/entities/materia.entity';
import { Profesor } from '../../profesor/entities/profesor.entity';

@Entity()
export class Clase {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Materia, { eager: true })
  @JoinColumn({ name: 'materia_id' })
  materia: Materia;

  @ManyToOne(() => Profesor, { eager: true })
  @JoinColumn({ name: 'profesor_id' })
  profesor: Profesor;

  @Column()
  hora_clase: string;

  @Column({ length: 200 })
  tema: string;
}
