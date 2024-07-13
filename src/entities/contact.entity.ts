import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Client } from './client.entity';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  contactType: string;

  @Column()
  value: string;

  @ManyToOne(() => Client, client => client.contacts)
  client: Client;
}
