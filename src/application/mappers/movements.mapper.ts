import { Movement, MovementTypes } from '../../domain/entities/movement.entity';
import { MovementModel } from '../../infrastructure/models/movement.model';

export class MovementsMapper {
  fromModelToEntity(model: MovementModel): Movement {
    const movement = new Movement();

    movement.uuid = model.uuid;
    movement.ammount = model.ammount;
    movement.account = model.account.uuid;
    movement.movementType = MovementTypes[model.movementType];

    return movement;
  }
}