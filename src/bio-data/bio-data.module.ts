import { Module } from '@nestjs/common';
import { CitizensModule } from './citizens/citizens.module';
import { VotersModule } from './voters/voters.module';

@Module({
  imports: [CitizensModule, VotersModule]
})
export class BioDataModule {}
