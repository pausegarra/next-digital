import { MovementModel } from '../../infrastructure/models/movement.model';

export interface MovementsRepository {
  findByAccount(accountId: string): Promise<MovementModel[]>;
}