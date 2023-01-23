import { Injectable } from '@nestjs/common';
import { ModalidadeServiceInterface } from './modalidade.interface';

@Injectable()
export class ModalidadeService implements ModalidadeServiceInterface {
  createModalidade(): string {
    return 'service modalidade';
  }
  updateModalidade(): string {
    return 'service modalidade';
  }
  getModalidade(): string {
    return 'service modalidade';
  }
  searchModalidade(): string {
    return 'service modalidade';
  }
  deleteModalidade(): string {
    return 'service modalidade';
  }
}
