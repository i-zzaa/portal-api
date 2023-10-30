import { format } from 'date-fns';

export function formatDate(inputDateTime: any) {
  return format(new Date(inputDateTime), 'dd/MM/yyyy HH:mm');
}
