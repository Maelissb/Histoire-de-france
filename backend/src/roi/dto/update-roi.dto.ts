import { PartialType } from '@nestjs/mapped-types';
import { CreateRoiDto } from './create-roi.dto';

export class UpdateRoiDto extends PartialType(CreateRoiDto) {}
