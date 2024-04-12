import { Container } from '@betino/ioc';
import { ListMovementsService } from './application/use-cases/list-movements.service';

Container.register('ListMovementsService', ListMovementsService);