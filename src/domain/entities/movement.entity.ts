import { Account } from './account.entity';

export enum MovementTypes {
  INCOME = 'income',
  OUTCOME = 'outcome',
  COMISSION = 'comission',
  WITHDRAWAL = 'withdrawal'
}

export class Movement {
  uuid!: string;
  account!: Account;
  movementType!: MovementTypes;
  ammount!: number;
  createdAt!: Date;
  updatedAt!: Date;
}