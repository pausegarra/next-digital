import { Container } from '@betino/ioc';
import { type Express } from 'express';
import { ListMovementsController } from './controllers/list-movements.controller';

export function defineRouter(app: Express) {
  const listMovementsController = Container.resolve<ListMovementsController>('ListMovementsController');
  app.get('/accounts/:id/movements', listMovementsController.exec.bind(listMovementsController));
}