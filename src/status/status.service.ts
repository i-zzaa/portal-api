import { Injectable } from '@nestjs/common';
import { StatusServiceInterface } from './status.interface';

@Injectable()
export class StatusService implements StatusServiceInterface {
  createStatus(): string {
    return 'service status';
  }
  updateStatus(): string {
    return 'service status';
  }
  getStatus(): string {
    return 'service status';
  }
  searchStatus(): string {
    return 'service status';
  }
}
