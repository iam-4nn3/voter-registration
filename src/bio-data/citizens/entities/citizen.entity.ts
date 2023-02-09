import { Voter } from "../../../bio-data/voters/entities/voter.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Citizen {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  primaryPhoneNumber: number;

  @Column()
  firstName: string;

  @Column({ nullable: true})
  middleName: string;

  @Column()
  lastName: string;

  @Column({ nullable: true})
  dateOfBirth: Date;

  @Column({ nullable: true})
  stateOfBirth: string;

  @Column({ nullable: true})
  townOfBirth: string;

  @Column({ nullable: true})
  residenceAddress: string;

  @Column({ nullable: true})
  profession: string;

  @OneToOne(type => Voter, voter => voter.citizen)
    voter: Voter;
}
