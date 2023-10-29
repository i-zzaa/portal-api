import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CatalogController } from './catalog/catalog.controller';
import { CatalogService } from './catalog/catalog.service';
import { ServiceController } from './service/service.controller';

import { TicketController } from './ticket/ticket.controller';
import { ServiceService } from './service/service.service';
import { TicketService } from './ticket/ticket.service';
import { AuthModule } from './auth/auth.module';

import * as cors from 'cors';
import { CategoryService } from './category/category.service';
import { CategoryController } from './category/category.controller';

import * as session from 'express-session';

@Module({
  imports: [AuthModule],
  controllers: [
    TicketController,
    ServiceController,
    CatalogController,
    CategoryController,

    AppController,
  ],
  providers: [
    TicketService,
    ServiceService,
    CatalogService,
    CategoryService,

    AppService,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        session({
          secret: process.env.KEY_SECRET_SESSION,
          resave: false,
          saveUninitialized: true,
          cookie: { secure: true },
        }),
        cors({
          origin: '*',
        }),
      ) // Aplica o middleware cors
      .forRoutes('*'); // Habilita o CORS para todas as rotas
  }
}
