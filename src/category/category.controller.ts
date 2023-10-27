import { Controller, Get, Param, UseGuards, Req } from '@nestjs/common';
import { CategoryService } from './category.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('categoria')
@UseGuards(AuthGuard('jwt'))
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get(':catalogCod')
  get(@Param('catalogCod') catalogCod: string, @Req() req: any) {
    const SessionID = req.user.session.SessionID;

    return this.categoryService.get(catalogCod, SessionID);
  }

  @Get(':search/:catalogCod')
  search(
    @Param('search') search: string,
    @Param('catalogCod') catalogCod: string,
    @Req() req: any,
  ) {
    const SessionID = req.user.session.SessionID;
    return this.categoryService.search(search, catalogCod, SessionID);
  }
}
