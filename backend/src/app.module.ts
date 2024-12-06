import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoiModule } from './roi/roi.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [RoiModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
