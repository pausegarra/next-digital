import { Movement } from '../../domain/entities/movement.entity';

export class ListMovementsResponse {
  message = "Movements retrieved successfully!";

  constructor(readonly data: Movement[]) {}
}