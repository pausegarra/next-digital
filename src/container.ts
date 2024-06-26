import { Container } from '@betino/ioc';
import { ListMovementsService } from './application/use-cases/list-movements.service';
import { db } from './infrastructure/persistance/db';
import { MovementsTypeOrmRepository } from './infrastructure/repositories/movements.repository';
import { MovementsMapper } from './application/mappers/movements.mapper';
import { ListMovementsController } from './infrastructure/controllers/list-movements.controller';

export function containerInit() {
  Container.register('DatabaseModule', db, { isInstance: true });

  Container.register('MovementsMapper', MovementsMapper);

  Container.register('MovementsRepository', MovementsTypeOrmRepository, { loadDependencies: true });

  Container.register('ListMovementsService', ListMovementsService, { loadDependencies: true });

  Container.register('ListMovementsController', ListMovementsController, { loadDependencies: true });
}