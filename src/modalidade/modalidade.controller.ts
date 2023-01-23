import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ModalidadeService } from './modalidade.service';

@Controller('modalidade')
export class ModalidadeController {
  constructor(private readonly modalidadeService: ModalidadeService) {}

  @Get()
  get(): string {
    return this.modalidadeService.getModalidade();
  }

  @Post()
  createUser(): string {
    return this.modalidadeService.createModalidade();
  }

  @Put(':id')
  update(): string {
    return this.modalidadeService.updateModalidade();
  }

  @Delete()
  delete(): string {
    return this.modalidadeService.deleteModalidade();
  }

  @Get()
  search(): string {
    return this.modalidadeService.updateModalidade();
  }
}
