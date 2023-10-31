import { utcToZonedTime, format } from 'date-fns-tz';
const fusoHorarioSaoPaulo = 'America/Sao_Paulo';

export function formatDate(inputDateTime: any) {
  const dataUTC = new Date(inputDateTime);
  const dataSaoPaulo = utcToZonedTime(dataUTC, fusoHorarioSaoPaulo);

  const dataFormatada = format(dataSaoPaulo, 'dd/MM/yyyy HH:mm');

  return dataFormatada;
}
