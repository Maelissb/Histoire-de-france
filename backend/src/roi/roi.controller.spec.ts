import { Test, TestingModule } from '@nestjs/testing';
import { RoiController } from './roi.controller';
import { RoiService } from './roi.service';

describe('RoiController', () => {
  let controller: RoiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoiController],
      providers: [RoiService],
    }).compile();

    controller = module.get<RoiController>(RoiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
