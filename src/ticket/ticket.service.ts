import { Injectable } from '@nestjs/common';
import {
  TicketDTO,
  TicketReplyDTO,
  TicketServiceInterface,
} from './ticket.interface';
import { setIconStatus } from 'src/util/util';
import { formatDate } from 'src/util/format-date';
import { API } from 'src/api/api';

@Injectable()
export class TicketService implements TicketServiceInterface {
  constructor() {}

  async create(
    formData: TicketDTO,
    file: any,
    SessionID: string,
    userID: number,
  ) {
    const { data } = await API().post('/Tickets/CreateTicket', {
      SessionID,
      CustomerGetTicketList: process.env.CustomerGetTicketList,

      PriorityID: '3',
      TypeID: '4',
      StateID: '1',
      QueueID: '1',
      SLAID: 1,

      ServiceID: formData.codService,
      CustomerUserID: userID,
      Title: formData.subject,
      Body: formData.detail,
      DynamicFields: {
        Telefone: formData?.telephone,
        Ramal: formData?.extension,
        IP: formData?.ip,
        Patrimonio: formData?.patrimony,
      },
    });

    try {
      const fileBuffer = file.buffer;
      const base64Data = fileBuffer.toString('base64');

      const fileData = await API().post('/Tickets/CreateAttachment', {
        SessionID,
        TicketID: data.TicketID,
        File: {
          Filename: formData?.filename,
          ContentType: file.mimetype,
          Content: base64Data,
        },
      });
    } catch (error) {
      console.log(error);
    }
    return data;
  }

  async createReplay(formData: TicketReplyDTO, file: any, SessionID: string) {
    const { data } = await API().post('/Tickets/CreateArticle', {
      SessionID,
      TicketID: formData.ticketId,

      Subject: formData.subject,
      Body: formData.detail,
    });

    try {
      const fileBuffer = file.buffer;
      const base64Data = fileBuffer.toString('base64');

      const fileData = await API().post('/Tickets/CreateAttachment', {
        SessionID,
        TicketID: `${formData.ticketId}`,
        ArticleID: `${data.ArticleID}`,

        File: {
          Filename: formData?.filename,
          ContentType: file.mimetype,
          Content: base64Data,
        },
      });
    } catch (error) {
      console.log(error);
    }
    return {
      ...data,
      TicketID: formData.ticketId,
    };
  }

  async formatTicket(data: any, SessionID: string) {
    return await Promise.all(
      data.map(async (ticket: any) => {
        const item = setIconStatus(ticket);
        const date = formatDate(ticket.Created);

        const articles = await API().post('/Tickets/GetArticles', {
          SessionID,
          TicketID: ticket.TicketID,
        });

        const formattedArticles = await this.formatArticle(articles.data);

        return {
          id: ticket.TicketID,
          title: ticket.Title,
          ticket: ticket.TicketNumber,
          status: item.status,

          detail: formattedArticles.pop(),

          type: ticket.Type,
          priority: ticket.Priority,
          attendant: ticket.Owner,
          queue: ticket.Queue,
          date,
          userId: ticket.OwnerID,
          color: item.color,
          icon: item.icon,
        };
      }),
    );
  }

  async getAll({ pageSize, currentPage }: any, SessionID: string) {
    const { data } = await API().post('/Tickets/GetTicketList', {
      SessionID,
      Offset: (currentPage - 1) * pageSize,
      Limit: pageSize,
    });

    const result = await this.formatTicket(data.Tickets, SessionID);

    const totalPages: number = Math.ceil(data.Count / pageSize);

    return {
      data: result,
      totalPages: totalPages,
      currentPage: currentPage,
    };
  }

  async formatArticle(data: any) {
    return await Promise.all(
      Object.keys(data.Articles).map(async (key: any) => {
        const ticket = data.Articles[key];

        const date = formatDate(ticket.CreateTime);
        const item = setIconStatus(ticket);

        return {
          ticketNumber: ticket.TicketNumber,
          title: ticket.Title,
          attendant: ticket.Responsible,
          queue: ticket.Queue,
          detail: ticket.Body || '-',
          date,
          status: item.status,
          icon: item.icon,
          color: item.color,
        };
      }),
    );
  }

  async get(id: number, SessionID: string) {
    const [ticket, aticles] = await Promise.all([
      API().post('/Tickets/GetTicketDeep', {
        SessionID,
        TicketID: id,
        GetAllArticleAttachments: '1',
        CustomerGetTicket: '1',
      }),

      API().post('/Tickets/GetArticles', {
        SessionID,
        TicketID: id,
      }),
    ]);

    const resultTicket = await this.formatTicket(
      ticket.data.Tickets,
      SessionID,
    );
    const result = await this.formatArticle(aticles.data);
    return {
      data: {
        ...resultTicket[0],
        details: [...result],
      },
    };
  }

  async search({ pageSize, currentPage, word }: any, SessionID: string) {
    const { data } = await API().post('/Tickets/GetTicketList', {
      SessionID,
      FullTextSearch: word,
      Offset: (currentPage - 1) * pageSize,
      Limit: pageSize,
    });

    const result = await this.formatTicket(data.Tickets, SessionID);
    const totalPages: number = Math.ceil(data.Count / pageSize);

    return {
      data: result,
      totalPages: totalPages,
      currentPage: currentPage,
    };
  }
}
