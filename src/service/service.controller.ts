import { Controller, Get, Param, UseGuards, Request } from '@nestjs/common';
import { ServiceService } from './service.service';
import { AutheticatedGuard } from 'src/auth/autheticated.guard';

@Controller('servicos')
@UseGuards(AutheticatedGuard)
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Get(':catalogCod')
  get(@Param('catalogCod') catalogCod: string, @Request() req: any) {
    const SessionID = req.user.session.SessionID;
    return this.serviceService.get(catalogCod, SessionID);
  }

  @Get(':search/:catalogCod')
  search(
    @Param('search') search: string,
    @Param('catalogCod') catalogCod: string,
    @Request() req: any,
  ) {
    const SessionID = req.user.session.SessionID;
    return this.serviceService.search(search, catalogCod, SessionID);
  }
}
