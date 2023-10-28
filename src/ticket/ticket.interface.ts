import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';

export interface DetailProps {
  id?: number;
  ticketId?: number;

  title: string;
  attendant: string;
  queue: string;
  detail: string;
  date: string;
}

export interface TicketProps {
  id?: number;
  ticket: string;
  title: string;
  type: string;
  priority: string;
  attendant: string;
  queue: string;
  date: string;

  userId: number;

  detail: DetailProps[];
}

export class TicketDTO {
  @IsString()
  @IsNotEmpty()
  readonly codCatalog: string;

  @IsString()
  @IsNotEmpty()
  readonly codCategory: string;

  @IsString()
  @IsNotEmpty()
  readonly codService: string;

  @IsNotEmpty()
  @IsString()
  readonly subject: string;

  @IsNotEmpty()
  @IsString()
  readonly detail: string;

  @IsOptional()
  @IsString()
  readonly recipient: string;

  @IsOptional()
  @IsString()
  readonly telephone: string;

  @IsOptional()
  @IsString()
  readonly extension: string;

  @IsOptional()
  @IsString()
  readonly ip: string;

  @IsOptional()
  @IsString()
  readonly patrimony: string;

  @IsOptional()
  @IsString()
  readonly file: string;

  @IsOptional()
  @IsString()
  readonly filename: string;
}

export class TicketGetProps {
  @IsString()
  @IsNotEmpty()
  readonly pageSize: string;

  @IsString()
  @IsNotEmpty()
  readonly currentPage: string;
}

export abstract class TicketServiceInterface {
  abstract create(body: TicketDTO, file: any, SessionID: string);
  abstract get(pag: any, SessionID: string);
  abstract search(word: string, SessionID: string);
}
