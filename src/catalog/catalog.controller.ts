import { Controller, Get, Param, UseGuards, Request } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('catalogo')
// @UseGuards(AuthGuard('jwt'))
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}

  @Get()
  get(@Request() req: any) {
    const SessionID = req.session.SessionID;
    return this.catalogService.get(SessionID);
  }

  @Get(':search')
  search(@Param('search') search: string) {
    return this.catalogService.search(search);
  }
}
