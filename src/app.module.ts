import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import PrismaModule from './prisma/prisma.module';
import PrismaService from './prisma/prisma.service';

@Module({
  imports: [BooksModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
