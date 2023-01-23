import { Controller, Get, Post, Put } from '@nestjs/common';
import { ConvenioService } from './convenio.service';

@Controller('convenio')
export class ConvenioController {
  constructor(private readonly convenioService: ConvenioService) {}

  @Get()
  get(): string {
    return this.convenioService.getConvenio();
  }

  @Post()
  createUser(): string {
    return this.convenioService.createConvenio();
  }

  @Put(':id')
  update(): string {
    return this.convenioService.updateConvenio();
  }

  @Get()
  search(): string {
    return this.convenioService.updateConvenio();
  }
}
