import { Inject } from '@betino/ioc';
import { Movement } from '../../domain/entities/movement.entity';
import { MovementsRepository } from '../../domain/repositories/movements.repository';
import { MovementsMapper } from '../mappers/movements.mapper';

export class ListMovementsService {
  constructor(
    @Inject('MovementsRepository') private readonly accountsRepository: MovementsRepository,
    @Inject('MovementsMapper') private readonly movementsMapper: MovementsMapper,
  ) {}

  async execute(accountId: string): Promise<Movement[]> {
    const accounts = await this.accountsRepository.findByAccount(accountId);

    return accounts.map(account => this.movementsMapper.fromModelToEntity(account))
  }
}