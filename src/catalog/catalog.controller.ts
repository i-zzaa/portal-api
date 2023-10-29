import { Controller, Get, Param, UseGuards, Req } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { AutheticatedGuard } from 'src/auth/autheticated.guard';

@Controller('catalogo')
@UseGuards(AutheticatedGuard)
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}

  @Get()
  get(@Req() req: any) {
    const SessionID = req.user.session.SessionID;
    return this.catalogService.get(SessionID);
  }

  @Get(':search')
  search(@Param('search') search: string, @Req() req: any) {
    const SessionID = req.user.session.SessionID;
    return this.catalogService.search(search, SessionID);
  }
}
