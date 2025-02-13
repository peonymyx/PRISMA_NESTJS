import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  async getAllBooks() {
    return this.bookService.getAllBooks();
  }

  @Get(':id')
  async getBookById(@Param('id', ParseIntPipe) id: number) {
    return this.bookService.getBookById(id);
  }

  @Post()
  async createBook(@Body() body: { name: string; price: number; category: string; author: string }) {
    return this.bookService.createBook(body);
  }

  @Put(':id')
  async updateBook(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { name?: string; price?: number; category?: string; author?: string }
  ) {
    return this.bookService.updateBook(id, body);
  }

  @Delete(':id')
  async deleteBook(@Param('id', ParseIntPipe) id: number) {
    return this.bookService.deleteBook(id);
  }
}
