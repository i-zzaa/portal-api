import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  UseGuards,
  Query,
  Request,
} from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketCreateProps, TicketGetProps } from './ticket.interface';
import { AuthGuard } from '@nestjs/passport';

@Controller('ticket')
@UseGuards(AuthGuard('jwt'))
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Get()
  get(@Query() query: TicketGetProps, @Request() req: any) {
    const SessionID = req.user.session.SessionID;

    return this.ticketService.get(query, SessionID);
  }

  @Post()
  create(@Body() body: TicketCreateProps, @Request() req: any) {
    const SessionID = req.user.session.SessionID;

    return this.ticketService.create(body, SessionID);
  }

  @Get('search/:search')
  search(@Param('search') search: string, @Request() req: any) {
    const SessionID = req.user.session.SessionID;

    return this.ticketService.search(search, SessionID);
  }
}
