import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 } from 'uuid';
import { AccountModel } from './account.model';
import { MovementTypes } from '../../domain/entities/movement.entity';

@Entity()
export class MovementModel {
  @PrimaryColumn()
  uuid: string = v4();

  @ManyToOne(() => AccountModel)
  account!: AccountModel;

  @Column()
  movementType!: MovementTypes;

  @Column({ type: 'float' })
  ammount!: number;

  @Column()
  createdAt: Date = new Date();

  @Column()
  updatedAt: Date = new Date();
}