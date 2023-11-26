import { PartialType } from '@nestjs/mapped-types';
import { CreateEncuestaPreDto } from './create-encuestaPre.dto';

export class UpdateEncuestaPreDto extends PartialType(CreateEncuestaPreDto) {}
