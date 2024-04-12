import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 } from 'uuid';

@Entity()
export class Client {
  @PrimaryColumn()
  uuid: string = v4();

  @Column()
  username!: string;

  @Column()
  password!: string;

  @Column()
  createdAt: Date = new Date();

  @Column()
  updatedAt: Date = new Date();
}