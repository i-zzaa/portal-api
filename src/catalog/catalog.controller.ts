import { Controller, Get, Param, UseGuards, Req } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('catalogo')
@UseGuards(AuthGuard('jwt'))
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}

  @Get()
  get(@Req() req: any) {
    const SessionID = req.session.SessionID;

    console.log('catalogo', req.session);

    return this.catalogService.get(SessionID);
  }

  @Get(':search')
  search(@Param('search') search: string, @Req() req: any) {
    const SessionID = req.session.SessionID;

    return this.catalogService.search(search, SessionID);
  }
}
