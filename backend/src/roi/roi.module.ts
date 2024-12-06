import { Module } from '@nestjs/common';
import { RoiService } from './roi.service';
import { RoiController } from './roi.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RoiController],
  providers: [RoiService],
})
export class RoiModule {}
