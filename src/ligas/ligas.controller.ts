import { Controller, Get, Param, Query} from '@nestjs/common';
import { LigasService } from './ligas.service';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Controller('ligas')
export class LigasController {
  constructor(private readonly ligasService: LigasService) {}


  @Get()
  findAll( @Query( ) paginationDto: PaginationDto  ) {
    return this.ligasService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ligasService.findOne(+id);
  }


}
