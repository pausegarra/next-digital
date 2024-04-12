import { Inject } from '@betino/ioc';
import { MovementsRepository } from '../../domain/repositories/movements.repository';
import { Database } from '../persistance/db';
import { Repository } from 'typeorm';
import { MovementModel } from '../models/movement.model';

export class MovementsTypeOrmRepository implements MovementsRepository {
  private movementRepository: Repository<MovementModel>;

  constructor(
    @Inject('DatabaseModule') private readonly database: Database
  ) {
    this.movementRepository = this.database.dataSource.getRepository(MovementModel);
  }

  async findByAccount(accountId: string): Promise<MovementModel[]> {
    return this.movementRepository.find({
      where: {
        uuid: accountId
      }
    });
  }
}