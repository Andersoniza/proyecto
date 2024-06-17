import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Materia } from './entities/materia.entity';

@Injectable()
export class MateriaService {
  constructor(
    @InjectRepository(Materia)
    private readonly materiaRepository: Repository<Materia>,
  ) {}

  async findAll(): Promise<Materia[]> {
    return this.materiaRepository.find();
  }

  async findOne(id: number): Promise<Materia> {
    return this.materiaRepository.findOne({ where: { id } });
  }

  async create(materiaData: Partial<Materia>): Promise<Materia> {
    const newMateria = this.materiaRepository.create(materiaData);
    return this.materiaRepository.save(newMateria);
  }

  async update(id: number, materiaData: Partial<Materia>): Promise<Materia> {
    await this.materiaRepository.update(id, materiaData);
    return this.materiaRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.materiaRepository.delete(id);
  }
}
