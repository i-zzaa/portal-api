import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  UseGuards,
  Query,
  Request,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketGetProps } from './ticket.interface';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('ticket')
@UseGuards(AuthGuard('jwt'))
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Get('all')
  getAll(@Query() query: TicketGetProps, @Request() req: any) {
    const SessionID = req.user.session.SessionID;

    return this.ticketService.getAll(query, SessionID);
  }

  @Get(':id')
  get(@Param('id') id: number, @Request() req: any) {
    const SessionID = req.user.session.SessionID;

    return this.ticketService.get(id, SessionID);
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(
    @Body('form') formData: any,
    @Request() req: any,
    @UploadedFile() file,
  ) {
    const SessionID = req.user.session.SessionID;
    const userID = req.user.sub;

    return this.ticketService.create(
      JSON.parse(formData),
      file,
      SessionID,
      userID,
    );
  }

  @Get('search/:search')
  search(@Param('search') search: string, @Request() req: any) {
    const SessionID = req.user.session.SessionID;

    return this.ticketService.search(search, SessionID);
  }
}
