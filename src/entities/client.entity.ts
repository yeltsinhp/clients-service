import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Contact } from './contact.entity';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  identityDocument: string;

  @OneToMany(() => Contact, contact => contact.client)
  contacts: Contact[];
}
