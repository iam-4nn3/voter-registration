import { Module } from '@nestjs/common';
import { VotersService } from './voters.service';
import { VotersController } from './voters.controller';
import { Voter } from './entities/voter.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Citizen } from '../citizens/entities/citizen.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Voter, Citizen])],
  controllers: [VotersController],
  providers: [VotersService]
})
export class VotersModule {}
