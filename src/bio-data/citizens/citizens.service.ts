import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCitizenDto } from './dto/create-citizen.dto';
import { UpdateCitizenDto } from './dto/update-citizen.dto';
import { Citizen } from './entities/citizen.entity';
@Injectable()
export class CitizensService {
  constructor(
    @InjectRepository(Citizen)
    private citizensRepository: Repository<Citizen>
    ){}
    async create(createCitizenDto: CreateCitizenDto) {
      const newCitizen: Citizen = this.citizensRepository.create(createCitizenDto)
      return this.citizensRepository.save(newCitizen);
      //return 'This action adds a new user';
    }
    async findAll() {
      //return `This action returns all users`;
      return await this.citizensRepository.find();
    }
    async findOne(id: number) {
      //return `This action returns a #${id} user`;
      return await this.citizensRepository.findOne({
        where: {
          id // same as id:id
        }
      });
    }
    async update(id: number, updateCitizenDto:
      UpdateCitizenDto) {
        //return `This action updates a #${id} user`;
        return await this.citizensRepository.update(id,
          updateCitizenDto);
        }
    async remove(id: number) {
      //return `This action removes a #${id} user`;
      return await this.citizensRepository.delete(id);
}
  }
