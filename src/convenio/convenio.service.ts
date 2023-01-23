import { Injectable } from '@nestjs/common';
import { ConvenioServiceInterface } from './convenio.interface';

@Injectable()
export class ConvenioService implements ConvenioServiceInterface {
  createConvenio(): string {
    return 'service convenio';
  }
  updateConvenio(): string {
    return 'service convenio';
  }
  getConvenio(): string {
    return 'service convenio';
  }
  searchConvenio(): string {
    return 'service convenio';
  }
}
