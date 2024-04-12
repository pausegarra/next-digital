import { Client } from './client.entity';

export class Account {
  uuid!: string;
  client!: Client;
  createdAt!: string;
  updatedAt!: string;
}