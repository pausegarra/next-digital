import { Movement } from '../../domain/entities/movement.entity';
import { MovementModel } from '../../infrastructure/models/movement.model';

export class MovementsMapper {
  fromModelToEntity(model: MovementModel): Movement {
    const movement = new Movement();

    return movement;
  }
}