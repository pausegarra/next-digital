import { Account } from './account.entity';

export enum MovementTypes {
  INCOME = 'INCOME',
  OUTCOME = 'OUTCOME',
  COMISSION = 'COMISSION',
  WITHDRAWAL = 'WITHDRAWAL'
}

export class Movement {
  uuid!: string;
  account!: Account | string;
  movementType!: MovementTypes;
  ammount!: number;
  createdAt!: Date;
  updatedAt!: Date;
}