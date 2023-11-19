import { Controller, Get, Param, Query } from '@nestjs/common';
import { NinjasService } from './ninjas.service';

@Controller('ninjas') // The root path for this controller (e.g., 'localhost:3000/ninjas')
export class NinjasController {
  constructor(private readonly ninjaService: NinjasService) {}

  @Get('/')
  getNinjas(@Query('type') type: string) {
    return this.ninjaService.getNinjas(type);
  }

  @Get('/:id')
  getNinja(@Param('id') id: string) {
    return this.ninjaService.getNinja(id);
  }
}
