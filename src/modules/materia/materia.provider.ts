import { DataSource } from "typeorm";
import { Materia } from "./entities/materia.entity";
import { Inject } from "@nestjs/common";

export const materiaProviders=[
    {
        provide:'materia_REPOSITORY',
        useFactory: (dataSource:DataSource)=>dataSource.getRepository(Materia),
        inject:['DATABASE_CONNECTION_POSTGRES']
    }
] 