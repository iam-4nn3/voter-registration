import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Citizen } from "../../../bio-data/citizens/entities/citizen.entity";

@Entity()
export class Voter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  wardId: string;

  @OneToOne(type => Citizen, citizen => citizen.voter, {cascade: true})
  @JoinColumn()
  citizen: Citizen;
}
