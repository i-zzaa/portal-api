import { Injectable } from '@nestjs/common';
import { PatientServiceInterface } from './patient.interface';

@Injectable()
export class PatientService implements PatientServiceInterface {
  createPatient(): string {
    return 'service paciente!';
  }
  updatePatient(): string {
    return 'service paciente!';
  }
  updateDisabled(): string {
    return 'service paciente!';
  }
  getPatients(): string {
    return 'service paciente!';
  }
}
