import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Citizen {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  middleName: string;

  @Column()
  lastName: string;

  @Column()
  dateOfBirth: string;

  @Column()
  stateOfBirth: string;

  @Column()
  townOfBirth: string;

  @Column()
  residenceAddress: string;

  @Column()
  primaryPhoneNumber: string;

  @Column()
  profession: string;
}
