import { Injectable } from '@nestjs/common';
import { TicketCreateProps, TicketServiceInterface } from './ticket.interface';
import { setIconStatus } from 'src/util/util';
import { formatDate } from 'src/util/format-date';
import { API } from 'src/api/Api';

@Injectable()
export class TicketService implements TicketServiceInterface {
  constructor() {}

  async create(body: TicketCreateProps, SessionID: string) {
    const { data } = await API().post('Tickets/CreateTicket', {
      SessionID,
      ...body,
    });
  }

  async get({ pageSize, currentPage }: any, userId: number, SessionID: string) {
    const { data } = await API().post('Tickets/CreateTicket', {
      SessionID,
      CustomerGetTicketList: '1',
    });

    const result = await Promise.all(
      data.Tickets.map((ticket: any) => {
        const item = setIconStatus(ticket);
        const date = formatDate(ticket.CreatedServer);

        return {
          id: ticket.TicketID,
          title: ticket.Title,
          ticket: ticket.TicketNumber,
          status: ticket.ticket_state,

          type: ticket.State,
          priority: ticket.Priority,
          attendant: '',
          queue: ticket.Queue,
          date,
          userId: userId,
          color: item.color,
          icon: item.icon,

          detail: [
            {
              id: 2,
              ticketId: 3,

              title: 'Teste',
              attendant: ticket.Responsible,
              queue: ticket.Queue,
              detalhe: '',
              date,
              status: ticket.State,
            },
          ],
        };
      }),
    );

    return {
      data,
      totalPages: data.length,
      currentPage: currentPage,
    };
  }
  async search(word: string) {
    // return new Promise((resolve, reject) => {
    //   const filter = this.tickets.filter(
    //     ({ ticket, title, status }: any) =>
    //       ticket.includes(word) ||
    //       title.includes(word) ||
    //       status.includes(word),
    //   );
    //   resolve(filter);
    // });
  }
}
