import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { StatesRepositoy } from './repository/States.repository';
import { CreateStatesService } from './services/states.service';
import { StatesController } from './states.controller';

@Module({
  controllers: [StatesController],
  providers: [CreateStatesService, StatesRepositoy, PrismaService],
})
export class StatesModule {}
