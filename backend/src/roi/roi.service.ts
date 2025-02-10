import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRoiDto } from './dto/create-roi.dto';
import { Prisma, Roi } from '@prisma/client';

@Injectable()
export class RoiService {
  constructor(private readonly prisma: PrismaService) {}

  async create(roiData: CreateRoiDto): Promise<Roi> {
    const data: Prisma.RoiCreateInput = {
      image: roiData.image,
      name: roiData.name,
      dynastie: roiData.dynastie,
      birthDate: roiData.birthDate,
      deathDate: roiData.deathDate,
      description: roiData.description,
    };

    return this.prisma.roi.create({
      data,
    });
  }

  async findAll(): Promise<Roi[]> {
    return this.prisma.roi.findMany(); // Utilisation de Prisma pour récupérer tous les rois
  }
}
