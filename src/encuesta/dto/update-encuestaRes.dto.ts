import { PartialType } from '@nestjs/mapped-types';
import { CreateEncuestaResDto } from './create-encuestaRes.dto';

export class UpdateEncuestaDto extends PartialType(CreateEncuestaResDto) {}
