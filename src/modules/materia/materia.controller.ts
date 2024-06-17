// src/modules/materia/materia.controller.ts

import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { MateriaService } from './materia.service';
import { Materia } from './entities/materia.entity';

@Controller('materia')
export class MateriaController {
  constructor(private readonly materiaService: MateriaService) {}

  @Get()
  findAll(): Promise<Materia[]> {
    return this.materiaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Materia> {
    return this.materiaService.findOne(Number(id));
  }

  @Post()
  create(@Body() materiaData: Partial<Materia>): Promise<Materia> {
    return this.materiaService.create(materiaData);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() materiaData: Partial<Materia>): Promise<Materia> {
    return this.materiaService.update(Number(id), materiaData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.materiaService.remove(Number(id));
  }
}
