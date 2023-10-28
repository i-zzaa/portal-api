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

  async get({ pageSize, currentPage }: any, SessionID: string) {
    const { data } = await API().post('/Tickets/GetTicketList', {
      SessionID,
      CustomerGetTicketList: process.env.CustomerGetTicketList,
    });

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedItems = data.Tickets.slice(startIndex, endIndex);

    const result = await Promise.all(
      paginatedItems.map((ticket: any) => {
        const item = setIconStatus(ticket);
        const date = formatDate(ticket.Created);

        return {
          id: ticket.TicketID,
          title: ticket.Title,
          ticket: ticket.TicketNumber,
          status: ticket.State,

          type: ticket.Type,
          priority: ticket.Priority,
          attendant: ticket.Owner,
          queue: ticket.Queue,
          date,
          userId: ticket.OwnerID,
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
      data: result,
      totalPages: data.length,
      currentPage: currentPage,
    };
  }
  async search(word: string, SessionID: string) {
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
