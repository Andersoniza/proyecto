// materia.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MateriaService } from './modules/materia/materia.service';

import { Materia } from './modules/materia/entities/materia.entity'; // Asegúrate de importar la entidad aquí

@Module({
  imports: [
    TypeOrmModule.forFeature([Materia]), // Registra la entidad y el repositorio con TypeORM
    // Otros módulos que puedas necesitar importar
  ],
  providers: [MateriaService], // Añade MateriaService y MateriaRepository como proveedores
  exports: [MateriaService], // Exporta MateriaService si es necesario
})
export class MateriaModule {}
