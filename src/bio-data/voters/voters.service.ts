import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Citizen } from '../citizens/entities/citizen.entity';
import { CreateVoterDto } from './dto/create-voter.dto';
import { UpdateVoterDto } from './dto/update-voter.dto';
import { Voter } from './entities/voter.entity';

@Injectable()
export class VotersService {
  constructor(
    @InjectRepository(Voter)
    private voterRepository: Repository<Voter>,

    @InjectRepository(Citizen)
    private citizenRepository: Repository<Citizen>
  ) { }

  async create(createVoterDto: CreateVoterDto) {
    //return 'This action adds a new student';
    const newVoter = this.voterRepository.create(createVoterDto);
    //ideally, below should be wrapped in a transaction so that it can roll back if there is error in any of the stages.
    if (createVoterDto.citizen) {
      const newCitizen = this.citizenRepository.create(createVoterDto.citizen);
      const citizen: Citizen = await this.citizenRepository.save(newCitizen);
      newVoter.citizen = citizen;
    }
    return this.voterRepository.save(newVoter)
  }

  async findAll() {
    //return `This action returns all students`;
    return await this.voterRepository.find({ relations: ['citizen'] });
  }

  async findOne(id: number) {
    //return `This action returns a #${id} student`;
    return await this.voterRepository.findOne({
      where: {
        id
      }});
  }

  async update(id: number, updateVoterDto: UpdateVoterDto) {
    //return `This action updates a #${id} student`;
    return await this.voterRepository.update(id, updateVoterDto);
  }

  async remove(id: number) {
    //return `This action removes a #${id} student`;
    return await this.voterRepository.delete(id);
  }

  /* Work on relationships */
  async setCitizenById(voterId: number, citizenId: number) {
    try {
      return await this.voterRepository.createQueryBuilder()
        .relation(Voter, "citizen")
        .of(voterId)
        .set(citizenId)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem setting user for voter: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async unsetCitizenById(voterId: number) {
    try {
      return await this.voterRepository.createQueryBuilder()
        .relation(Voter, "citizen")
        .of(voterId)
        .set(null)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem unsetting user for voter: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}