import { Injectable } from '@nestjs/common';
import { TicketServiceInterface } from './ticket.interface';
import { setIconStatus } from 'src/util/util';
import { formatDate } from 'src/util/format-date';
import { API } from 'src/api/Api';

@Injectable()
export class TicketService implements TicketServiceInterface {
  constructor() {}

  async create(formData: any, file: any, SessionID: string) {
    const { data } = await API().post('/Tickets/CreateTicket', {
      SessionID,
      CustomerGetTicketList: process.env.CustomerGetTicketList,

      PriorityID: formData.id,
      TypeID: formData.TypeID,
      StateID: formData.id,
      QueueID: formData.id,

      SLAID: 1,
      ServiceID: formData.codService,
      CustomerUserID: formData.id,
      Title: formData.subject,
      Body: formData.detail,
      DynamicFields: {
        Telefone: formData.telephone,
        Ramal: formData.extension,
        IP: formData.id,
        Patrimonio: formData.patrimony,
      },
    });

    await API().post('/Tickets/CreateAttachment', {
      SessionID,
      TicketID: data.TicketID,
      ArticleID: data.ArticleID,
      File: {
        Filename: formData?.filename,
        ContentType: 'text/plain',
        Content: file,
      },
    });
  }

  async formatTicket(pageSize: any, currentPage: any, data: any) {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedItems = data.slice(startIndex, endIndex);

    return await Promise.all(
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
  }

  async get({ pageSize, currentPage }: any, SessionID: string) {
    const { data } = await API().post('/Tickets/GetTicketList', {
      SessionID,
      CustomerGetTicketList: process.env.CustomerGetTicketList,
    });

    const result = await this.formatTicket(pageSize, currentPage, data.Tickets);

    return {
      data: result,
      totalPages: data.length,
      currentPage: currentPage,
    };
  }
  async search(word: string, SessionID: string) {
    const { data } = await API().post('/Tickets/GetTicketList', {
      SessionID,
      CustomerGetTicketList: process.env.CustomerGetTicketList,
    });
  }
}
