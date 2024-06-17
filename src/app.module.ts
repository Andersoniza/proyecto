// src/app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MateriaModule } from './modules/materia/materia.module';
import { ProfesorModule } from './modules/profesor/profesor.module';
import { ClaseModule } from './modules/clase/clase.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',  // tu usuario de PostgreSQL
      password: '1234',  // tu contraseña de PostgreSQL
      database: 'Materia_back',  // tu base de datos
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    MateriaModule,
    ProfesorModule,
    ClaseModule,
  ],
})
export class AppModule {}
