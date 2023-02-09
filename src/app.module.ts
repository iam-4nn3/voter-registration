import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BioDataModule } from './bio-data/bio-data.module';

@Module({
  imports: [TypeOrmModule.forRoot(
    {
      "type": "postgres",
      "host": "localhost",
      "port": 5433,
      "username": "postgres",
      "password": "*Rhev5ng5",
      "database": "voter-registration",
      "entities": [
      "dist/**/*.entity{.ts,.js}"
      ],
      "synchronize": true,
      "logging": true
      }
  ),BioDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
