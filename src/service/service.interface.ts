export interface ServiceProps {
  id: number;
  cod?: string;
  name: string;
}

export interface ServiceResponse {
  id: number;
  cod?: string;
  title: string;
}

export abstract class ServiceServiceInterface {
  abstract get(cod: string, SessionID: string): Promise<ServiceResponse[]>;
  abstract search(
    word: string,
    catalogCod: string,
    SessionID: string,
  ): Promise<ServiceResponse[]>;
}
