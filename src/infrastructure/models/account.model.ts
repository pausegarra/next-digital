import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 } from 'uuid';
import { Client } from './client.model';

@Entity()
export class AccountModel {
  @PrimaryColumn()
  uuid: string = v4();

  @ManyToOne(() => Client)
  client!: Client;

  @Column()
  createdAt: Date = new Date();

  @Column()
  updatedAt: Date = new Date();
}