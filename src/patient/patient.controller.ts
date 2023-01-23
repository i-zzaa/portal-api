import { Controller, Get, Post, Put } from '@nestjs/common';
import { PatientService } from './patient.service';

@Controller('pacientes')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get()
  get(): string {
    return this.patientService.getPatients();
  }

  @Post()
  create(): string {
    return this.patientService.createPatient();
  }

  @Put()
  update(): string {
    return this.patientService.updatePatient();
  }

  @Put('desabilitar')
  disabled(): string {
    return this.patientService.updateDisabled();
  }
}
