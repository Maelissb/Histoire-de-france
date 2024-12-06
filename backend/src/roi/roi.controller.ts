import { Controller, Post, Body, Get } from '@nestjs/common';
import { RoiService } from './roi.service';

@Controller('rois')
export class RoiController {
  constructor(private readonly roiService: RoiService) {}

  @Post()
  async create(
    @Body()
    roiData: {
      image?: string;
      name: string;
      dynastie: string;
      birthDate: string;
      deathDate: string;
      description: string;
    },
  ) {
    return this.roiService.create(roiData);
  }

  @Get()
  async findAll() {
    return this.roiService.findAll();
  }
}
